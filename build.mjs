import StyleDictionary from 'style-dictionary';
import { formats, transformGroups } from 'style-dictionary/enums';

// Custom format: a CommonJS Tailwind preset, so apps can do
//   presets: [require('tahche-design-tokens/build/tailwind/preset.cjs')]
// without needing to touch their own module system.
StyleDictionary.registerFormat({
  name: 'tailwind/preset',
  format: ({ dictionary }) => {
    const colors = {};
    const fontFamily = {};
    const fontSize = {};
    const spacing = {};
    const borderRadius = {};
    const boxShadow = {};
    const transitionDuration = {};
    const transitionTimingFunction = {};
    // name -> { fontSize, lineHeight, letterSpacing, fontWeight, alias } — used below
    // to build composite .text-{name} classes, not just the fontSize theme key.
    const textStylesRaw = {};

    for (const token of dictionary.allTokens) {
      const [category, ...rest] = token.path;

      if (category === 'color') {
        // color.primary.500 -> colors.primary['500'], color.brand.blue -> colors.brand.blue
        let node = colors;
        for (let i = 0; i < rest.length - 1; i++) {
          node[rest[i]] = node[rest[i]] || {};
          node = node[rest[i]];
        }
        node[rest[rest.length - 1]] = token.$value ?? token.value;
      }

      if (category === 'typography') {
        if (rest[0] === 'fontFamily') {
          fontFamily[rest[1]] = (token.$value ?? token.value).split(',').map((s) => s.trim());
        } else {
          const name = rest[0];
          const v = token.$value ?? token.value;
          fontSize[name] = [
            v.fontSize,
            { lineHeight: v.lineHeight, letterSpacing: v.letterSpacing },
          ];
          textStylesRaw[name] = {
            fontSize: v.fontSize,
            lineHeight: v.lineHeight,
            letterSpacing: v.letterSpacing,
            fontWeight: v.fontWeight,
            alias: token.$alias,
          };
        }
      }

      if (category === 'spacing') {
        spacing[rest[0]] = token.$value ?? token.value;
      }

      if (category === 'radius') {
        borderRadius[rest[0]] = token.$value ?? token.value;
      }

      if (category === 'elevation') {
        boxShadow[rest[0]] = token.$value ?? token.value;
      }

      if (category === 'motion') {
        // rest = ['duration', 'fast'] or ['easing', 'standard']
        if (rest[0] === 'duration') transitionDuration[rest[1]] = token.$value ?? token.value;
        if (rest[0] === 'easing') transitionTimingFunction[rest[1]] = token.$value ?? token.value;
      }
    }

    // ── Best practice: composite text-style classes ─────────────────────
    // Tailwind's own `fontSize` theme key can bundle size/line-height/tracking
    // into one value, but NOT font-weight — so a design-system text style built
    // from two separately-applied utilities (text-2xl + font-medium) can drift
    // apart the moment either one changes independently. That's exactly how
    // this file's own heading-h2 conflict and the general Figma-vs-code weight
    // mismatches happened. One `.text-{name}` class per named style, shipped as
    // a Tailwind plugin, removes that failure mode: size and weight can no
    // longer be applied (or omitted) independently.
    //
    // Deprecated tokens ($alias set) render using their replacement's resolved
    // values, not their own now-superseded ones — so anything still referencing
    // the deprecated class looks identical to the replacement rather than subtly
    // different, while docs point authors at the replacement going forward.
    const sansStack = fontFamily.sans ? fontFamily.sans.join(', ') : 'Inter, Arial, Helvetica, sans-serif';
    const textStyles = {};
    for (const [name, style] of Object.entries(textStylesRaw)) {
      const resolved = (style.alias && textStylesRaw[style.alias]) || style;
      const decl = {
        fontFamily: sansStack,
        fontSize: resolved.fontSize,
        lineHeight: resolved.lineHeight,
        fontWeight: String(resolved.fontWeight),
      };
      if (resolved.letterSpacing && resolved.letterSpacing !== '0') decl.letterSpacing = resolved.letterSpacing;
      // Real, confirmed usage (Table Header) — uppercase isn't part of the
      // token's own fontSize/lineHeight/weight value, so it's applied here.
      if (name === 'overline') decl.textTransform = 'uppercase';
      textStyles[`.text-${name}`] = decl;
    }

    const body = {
      theme: {
        extend: { colors, fontFamily, fontSize, spacing, borderRadius, boxShadow, transitionDuration, transitionTimingFunction },
      },
    };
    // JSON.stringify can't serialize a function, so the plugin is spliced in as
    // literal JS after the theme object rather than included in `body` above.
    const themeJson = JSON.stringify(body, null, 2);
    const withoutClosingBrace = themeJson.slice(0, -1); // drop the root object's trailing "}"
    const textStylesJson = JSON.stringify(textStyles, null, 2);

    return `// GENERATED FILE — do not edit by hand.
// Source of truth: tahche-design-tokens/tokens/*.json
// Rebuilds on every merge to main via Style Dictionary (see build.mjs).
//
// Ships one composite ".text-{style}" class per named typography style
// (e.g. .text-heading-h2 { font-size: 36px; line-height: 44px; font-weight: 800; ... })
// via a Tailwind plugin, alongside the usual theme.extend values. Prefer these
// over separately combining text-{size} + font-{weight} utilities, which can
// drift apart independently — see build.mjs for why.
module.exports = ${withoutClosingBrace},
  "plugins": [
    function ({ addComponents }) {
      addComponents(${textStylesJson});
    },
  ]
};
`;
  },
});

// Custom format: font-weight lookup. Kept even now that the Tailwind preset
// also ships composite .text-{name} classes (which bundle weight in already) —
// useful for anyone consuming fontSize/font-weight as separate utilities on
// purpose, and as a quick confirmed/proposed/deprecated status check per style.
//
// Reads the explicit $confirmed/$deprecated/$alias metadata on each token
// rather than pattern-matching the prose $description — regex-parsing text
// for machine-readable status is fragile by construction (e.g. a description
// that says "confirmed — corrected from an earlier proposed guess" trips a
// naive /proposed/ check even though the token IS confirmed). Explicit fields
// don't have that failure mode.
StyleDictionary.registerFormat({
  name: 'tokens/weights-json',
  format: ({ dictionary }) => {
    const weights = {};
    for (const token of dictionary.allTokens) {
      if (token.path[0] === 'typography' && token.path[1] !== 'fontFamily') {
        const v = token.$value ?? token.value;
        weights[token.path[1]] = {
          fontWeight: v.fontWeight,
          confirmed: token.$confirmed === true || token.$confirmed === 'true',
          deprecated: token.$deprecated === true || token.$deprecated === 'true',
          ...(token.$alias ? { alias: token.$alias } : {}),
        };
      }
    }
    return JSON.stringify(weights, null, 2) + '\n';
  },
});

const sd = new StyleDictionary({
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: transformGroups.css,
      buildPath: 'build/css/',
      files: [{ destination: 'tokens.css', format: formats.cssVariables, options: { outputReferences: true } }],
    },
    json: {
      transformGroup: transformGroups.js,
      buildPath: 'build/json/',
      files: [{ destination: 'tokens.json', format: formats.jsonNested }],
    },
    tailwind: {
      transformGroup: transformGroups.js,
      buildPath: 'build/tailwind/',
      files: [
        { destination: 'preset.cjs', format: 'tailwind/preset' },
        { destination: 'font-weights.json', format: 'tokens/weights-json' },
      ],
    },
  },
});

await sd.buildAllPlatforms();
console.log('\nBuilt tokens -> build/css, build/json, build/tailwind');
