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
    }

    const body = {
      theme: {
        extend: { colors, fontFamily, fontSize, spacing, borderRadius, boxShadow },
      },
    };

    return `// GENERATED FILE — do not edit by hand.\n// Source of truth: tahche-design-tokens/tokens/*.json\n// Rebuilds on every merge to main via Style Dictionary (see build.mjs).\nmodule.exports = ${JSON.stringify(body, null, 2)};\n`;
  },
});

// Custom format: font-weight lookup, since Tailwind's fontSize tuple only
// carries lineHeight/letterSpacing — weight has to be applied as a separate
// utility (font-bold, font-medium, etc.) by whoever consumes a typography token.
StyleDictionary.registerFormat({
  name: 'tokens/weights-json',
  format: ({ dictionary }) => {
    const weights = {};
    for (const token of dictionary.allTokens) {
      if (token.path[0] === 'typography' && token.path[1] !== 'fontFamily') {
        const v = token.$value ?? token.value;
        weights[token.path[1]] = { fontWeight: v.fontWeight, confirmed: !/proposed/i.test(token.$description ?? '') };
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
