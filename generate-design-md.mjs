import { readFileSync, writeFileSync } from 'node:fs';
import YAML from 'yaml';

// DESIGN.md is GENERATED from tokens/*.json — the same single source of truth
// that produces the Tailwind preset. Do not hand-edit DESIGN.md's frontmatter;
// change the token JSON and re-run `npm run design-md` instead. The prose
// sections below are hand-written and versioned in this script, not derived.

const color = readFileSync('./tokens/color.json', 'utf8');
const typography = readFileSync('./tokens/typography.json', 'utf8');
const spacing = readFileSync('./tokens/spacing.json', 'utf8');
const elevation = readFileSync('./tokens/elevation.json', 'utf8');
const radius = readFileSync('./tokens/radius.json', 'utf8');

const colorTokens = JSON.parse(color).color;
const typographyTokens = JSON.parse(typography).typography;
const spacingTokens = JSON.parse(spacing).spacing;
const elevationTokens = JSON.parse(elevation).elevation;
const radiusTokens = JSON.parse(radius).radius;

// ── Colors: DESIGN.md's schema is a flat map<string, Color> — ramps become
// dash-suffixed flat keys (primary-500), with a bare semantic alias
// (primary) pointing at the base tone, per the spec's own convention.
const colors = {};
for (const [group, ramp] of Object.entries(colorTokens)) {
  if (group.startsWith('$')) continue;
  for (const [step, token] of Object.entries(ramp)) {
    if (step.startsWith('$')) continue;
    colors[`${group}-${step}`] = token.$value;
  }
}
colors.primary = '{colors.primary-500}';
colors.secondary = '{colors.secondary-500}';
colors.neutral = '{colors.neutral-500}';
colors.success = '{colors.success-500}';
colors.warning = '{colors.warning-500}';
colors.destructive = '{colors.destructive-500}';

// ── Typography: fontFamily is inlined per style (the spec's own examples do
// the same) rather than referenced, since a bare string primitive doesn't
// fit inside a group whose schema expects every entry to be a Typography composite.
const sansStack = typographyTokens.fontFamily.sans.$value;
const typographyOut = {};
for (const [name, token] of Object.entries(typographyTokens)) {
  if (name === 'fontFamily' || name.startsWith('$')) continue;
  const v = token.$value;
  typographyOut[name] = {
    fontFamily: sansStack,
    fontSize: v.fontSize,
    fontWeight: v.fontWeight,
    lineHeight: v.lineHeight,
    ...(v.letterSpacing && v.letterSpacing !== '0' ? { letterSpacing: v.letterSpacing } : {}),
  };
}

// ── Spacing / Rounded: pass through as-is, already scale-level -> Dimension.
const spacingOut = {};
for (const [level, token] of Object.entries(spacingTokens)) {
  if (level.startsWith('$')) continue;
  spacingOut[String(level)] = token.$value;
}
const roundedOut = {};
for (const [level, token] of Object.entries(radiusTokens)) {
  if (level.startsWith('$')) continue;
  roundedOut[level] = token.$value;
}

// ── Components: a representative set, not an exhaustive catalog — component
// structure stays flexible per app; these exist so "button-primary" means
// the same base tokens everywhere it's built.
//
// Button values below are confirmed via live Figma design context (get_design_context
// against the actual selected component, not inferred) — checked directly against the
// full Size × Type × State × Destructive=No component set. Border color on
// button-outlined/button-tertiary isn't representable here: DESIGN.md's component schema
// supports backgroundColor/textColor/typography/rounded/padding/size/height/width only,
// no border token — see this file's "Components" prose section for the real border specs.
const components = {
  'button-primary': {
    backgroundColor: '{colors.primary-500}',
    textColor: '#FFFFFF',
    typography: '{typography.paragraph-medium-medium}',
    rounded: '{rounded.sm}',
    height: '48px',
    padding: '12px 20px',
  },
  'button-primary-hover': { backgroundColor: '{colors.primary-600}' },
  'button-primary-pressed': { backgroundColor: '{colors.primary-600}', textColor: '{colors.primary-200}' },
  'button-primary-disabled': {
    backgroundColor: '{colors.primary-300}',
    textColor: '#FFFFFF',
  },
  'button-primary-medium': { height: '40px', padding: '10px 16px', typography: '{typography.paragraph-small-medium}' },
  'button-primary-small': { height: '28px', padding: '6px 12px', typography: '{typography.label-xsmall}' },
  'button-secondary': {
    backgroundColor: '{colors.primary-50}',
    textColor: '{colors.primary-500}',
    typography: '{typography.paragraph-medium-medium}',
    rounded: '{rounded.sm}',
    height: '48px',
    padding: '12px 20px',
  },
  'button-outlined': {
    backgroundColor: 'transparent',
    textColor: '{colors.primary-500}',
    typography: '{typography.paragraph-medium-medium}',
    rounded: '{rounded.sm}',
    height: '48px',
    padding: '12px 20px',
  },
  'button-tertiary': {
    backgroundColor: '#FFFFFF',
    textColor: '{colors.neutral-700}',
    typography: '{typography.paragraph-medium-medium}',
    rounded: '{rounded.sm}',
    height: '48px',
    padding: '12px 20px',
  },
  'button-link': {
    backgroundColor: 'transparent',
    textColor: '{colors.primary-500}',
    typography: '{typography.paragraph-medium-medium}',
    padding: '12px 0',
  },
  badge: {
    backgroundColor: '{colors.primary-50}',
    textColor: '{colors.primary-700}',
    typography: '{typography.paragraph-xsmall}',
    rounded: '{rounded.full}',
    padding: '2px 8px',
  },
  'input-field-box': {
    backgroundColor: '#FFFFFF',
    textColor: '{colors.neutral-900}',
    typography: '{typography.paragraph-small}',
    rounded: '{rounded.sm}',
    padding: '8px 12px',
  },
  'input-field-box-disabled': { textColor: '{colors.neutral-400}' },
  'input-field-box-error': {
    textColor: '{colors.destructive-500}',
  },
  'input-field-line': {
    backgroundColor: 'transparent',
    textColor: '{colors.neutral-900}',
    typography: '{typography.paragraph-small}',
    padding: '10px 0',
  },
  'input-field-line-disabled': { textColor: '{colors.neutral-400}' },
  modal: {
    backgroundColor: '#FFFFFF',
    rounded: '{rounded.xl}',
    padding: '24px',
  },
};

const frontmatter = {
  version: 'alpha',
  name: 'Tahche',
  description:
    "Design system for Tahche's internal product suite — 5 Vue 3 + Tailwind apps, moving toward a shared PWA.",
  colors,
  typography: typographyOut,
  rounded: roundedOut,
  spacing: spacingOut,
  components,
};

const yamlStr = YAML.stringify(frontmatter, { lineWidth: 0 });

const body = `
## Overview

Tahche's product suite is a set of internal operational tools — HR, recruitment, client and employee dashboards, asset management — used daily by staff and clients, not a consumer marketing surface. The UI should feel calm, efficient, and trustworthy rather than decorative: dense information handled legibly, clear affordances, no gimmicks. This carries the brand's voice (warm but professional, confident, employee-first, client-focused, action-oriented — see the brand guide) into product terms: helpful and direct, never cold or over-designed.

This file is **generated** from [\`tahche-design-tokens\`](https://github.com/karl-tahche/tahche-design-tokens) — the token JSON is the actual source of truth (and what Figma's Variables sync against via Tokens Studio). Regenerate this file when tokens change; don't hand-edit the frontmatter.

Component *structure* is deliberately not standardized here. Each of the 5 apps builds its own components in whatever shape suits it — that flexibility is intentional, confirmed with the dev team directly. What this file (and the token package behind it) exists to make consistent is the token layer: color, type, spacing, elevation, shape. A component can be built any way a developer likes, as long as its values come from these tokens rather than a hand-typed hex or pixel value.

## Colors

Two tiers, deliberately kept separate:

- **Product colors** (\`primary\`, \`secondary\`, \`neutral\`, \`success\`, \`warning\`, \`destructive\`) — for UI. \`primary\` is \`#353DD7\`, the value already live across all 5 apps; kept as-is rather than migrated, since re-theming five production apps for a color that was only ever a brand-guide value, never a shipped one, wasn't worth the churn.
- **Brand colors** (\`brand-blue\` \`#2232D7\`, \`brand-gold\` \`#FBD24D\`) — for marketing/document contexts only (matches the brand guide exactly). Do not use these in product UI; that's what \`primary\`/\`secondary\` are for, even though they're visually close.

Each semantic ramp (\`success\`/\`warning\`/\`destructive\`) runs 50→900 and should only be used for state communication — a destructive action, a warning banner, a success toast — never as a decorative accent. Within any ramp: 50/100 for tinted backgrounds and hover fills, 500 for the primary interactive tone, 700–900 for high-contrast text or dark-surface contexts.

## Typography

**Inter** is the typeface actually rendering across all 5 apps today — but historically it was applied only via a global CSS override (\`* { font-family: Inter !important }\`), never registered in Tailwind's own \`fontFamily\` config. That's fixed at the token level here: \`typography.fontFamily\` resolves to Inter with system fallbacks, and should be wired as Tailwind's \`fontFamily.sans\`, not a separate custom key.

The type scale below covers display sizes down to overline. Not every weight is equally certain: \`heading-h2\` (Extrabold/800), \`heading-h4\` (Medium/500), and \`paragraph-large\` (Regular/400 and Medium/500) came from bound Figma variables and are confirmed. Every other weight is a proposed default — check \`build/tailwind/font-weights.json\` in the tokens repo for the live confirmed/proposed status before treating one as final.

## Layout

The spacing scale (4px→192px) matches Tailwind's own default scale exactly at every step — adopting it requires no Tailwind config changes, only the discipline to stop reaching for arbitrary bracket values (\`px-[0.938rem]\`, \`w-[6.25rem]\`) that show up throughout all 5 codebases today.

Breakpoints are a proposed change, not yet ratified: every app currently carries three parallel, conflicting breakpoint definitions (custom Tailwind \`screens\`, SCSS \`$breakpoint-*\` variables, and CSS custom properties), often mixed in the same file. The recommendation is to drop the custom names entirely and standardize on Tailwind's own \`sm/md/lg/xl/2xl\` — nothing is lost (\`tablet:768\` already equals \`md:768\`) but it is a breaking change to existing markup, and needs explicit design+dev sign-off given the shift toward a PWA makes responsive behavior more load-bearing, not less.

## Elevation & Depth

A 6-step shadow scale, already identical across Figma and all 5 apps (a rare case with no conflict to resolve) — built on a single neutral shadow color (\`rgba(16,24,40,*)\`) at increasing offset/blur/spread. Use \`xsmall\` for subtle separation between adjacent surfaces (a card against its page background), \`small\`/\`medium\` for dropdowns and popovers, \`large\`/\`xlarge\` for modals and sheets, and reserve \`xxlarge\` for the single heaviest overlay in a given view.

## Shapes

Radius is a proposed scale, not a ratified one — no Figma foundation page for border-radius existed anywhere in the audit that produced this file, so these values are inferred from the arbitrary \`rounded-[Npx]\` values already scattered across the 5 codebases. Treat this section as a starting proposal for a design decision, not a settled fact. Suggested usage once ratified: \`sm\` for inputs and small controls, \`lg\`/\`xl\` for cards and modals, \`full\` for pills, avatars, and badges.

## Components

Not an exhaustive catalog — a shared vocabulary. Figma's real component library (audited directly) already documents a working set: Accordion, Avatar, Badge, Breadcrumb, Button, Button Group, Data Display, Date Picker, File Upload, Form Control, Inline Alert, Sticky Alert, Input Field, List Field, Loader, Modal, Pagination, Progress Bar, Progress Step, Side Navigation, Stat, Tab, Table, Title, and Tooltip. Those names are the shared vocabulary for what a "Button" or "Badge" means across the org, even though each app is free to implement its own.

The composite tokens in this file's frontmatter (\`button-*\`, \`badge\`, \`input-field\`, \`modal\`, and their state variants) are reference points for the handful of primitives every app already reimplements independently — not a mandate to build a shared component package. Use them as a starting shape; diverge where a specific app's needs require it, as long as the underlying color/type/spacing/radius tokens are still the ones referenced above.

### Button — confirmed directly from Figma

Unlike the other components below, Button's tokens are pulled from live Figma design context (the actual selected component, not an inference) — checked against the full Size × Type × State matrix, not just one variant:

- **Radius is \`6px\` (\`rounded.sm\`) on every Button variant**, all 3 sizes, all 5 types (Primary/Secondary/Outlined/Tertiary/Link) — the first real confirmation for the \`rounded\` scale, which otherwise has no Figma source (see Shapes above).
- **Size drives height and padding**, consistently across every type: Large is \`48px\` height / \`12px 20px\` padding, Medium is \`40px\` / \`10px 16px\`, Small is \`28px\` / \`6px 12px\`. Icon size scales with it too: \`20px\` at Large/Medium, \`16px\` at Small.
- **State changes color only, never size**: Primary's Default (\`primary-500\` bg, white text) → Hover (\`primary-600\` bg) → Pressed (also \`primary-600\` bg, but text shifts to \`primary-200\` — a real, distinct state, not a duplicate of Hover) → Disabled (\`primary-300\` bg, white text).
- **⚠️ The Disabled state is a confirmed WCAG failure, not a placeholder**: white text on \`primary-300\` (\`#8D92EB\`) measures 2.82:1, below the 4.5:1 AA minimum. This is what's actually in Figma today — flagged here for a design decision, not silently corrected to something that "looks right."
- **Outlined and Tertiary both have a border** (\`primary-500\` and \`neutral-200\` respectively) that isn't representable in this file's \`components\` schema — it only supports \`backgroundColor\`/\`textColor\`/\`typography\`/\`rounded\`/\`padding\`/\`size\`/\`height\`/\`width\`, no border token. If you're implementing these types, add the border yourself; it's real, just not encodable here.
- **Link has no background, border, or horizontal padding** — text and icons only, vertical padding matching the other types at its size.
- The lint warnings on \`button-outlined\`/\`button-link\`/\`input-field-line\` about low contrast against a "transparent" background are a known linter limitation (it can't evaluate contrast with nothing behind it) — all three sit on a white page in practice, where their text colors pass comfortably (confirmed by \`button-secondary\`'s identical primary-500 text passing against its primary-50 background, and neutral-900 being the standard body-text color used everywhere else in this file against white).

### Input Field — confirmed directly from Figma

Two visual styles, \`Box\` (bordered) and \`Line\` (bottom-border only), each across Default/Focused/Typing/Active/Disabled/Destructive states:

- **Both styles share the same type ramp**: label is \`paragraph-small-medium\` (14/20, Medium), value/placeholder/helper text is \`paragraph-small\` (14/20, Regular) — both now confirmed twice over (once via Button, once here).
- **\`Box\`**: white background, \`6px\` radius (\`rounded.sm\` — a third confirmation), \`8px 12px\` padding, 1px border that changes color by state (\`neutral-200\` default/active/disabled, \`primary-300\` focused/typing, \`destructive-300\` error) — border color isn't representable in this schema, same limitation as Button's Outlined/Tertiary. Carries the \`elevation.xsmall\` shadow at rest, which is **removed entirely when disabled**.
- **A focused or typing \`Box\` gets a 4px focus ring** (\`elevation.focus-ring\`, \`#E1E1FE\`) — a new token this audit surfaced, not previously in this file.
- **\`Line\` never gets that ring** — focus only changes its bottom-border color, same state-to-color mapping as \`Box\`. This is a real, deliberate difference between the two styles, not an inconsistency to fix.
- **Destructive state**: border shifts to \`destructive-300\`, and helper text shifts to \`destructive-500\` — the one part of the error state representable in the \`components\` schema (\`input-field-box-error\`).

## Do's and Don'ts

These are drawn directly from patterns found across all 5 production apps during the audit that produced this file — each one caused a real, shipped inconsistency.

- **Do** reference a token (\`bg-primary-500\`, \`text-neutral-700\`) for any color, spacing, or radius value. **Don't** hand-type a hex or pixel value that happens to match one — that's exactly how \`destructive-800\` and \`destructive-900\` ended up identical in every app.
- **Do** use the shared spacing scale. **Don't** reach for an arbitrary bracket value (\`px-[0.938rem]\`) when a token already covers that exact pixel amount.
- **Do** register Inter as Tailwind's \`fontFamily.sans\`. **Don't** apply it via a global \`* { font-family: ... !important }\` override — it silently breaks any component that expects \`font-sans\` to resolve correctly.
- **Do** pick one icon theming contract per app (a \`color\` prop or a Tailwind-class prop) and use it consistently. **Don't** mix both within the same icon set, or within the same component.
- **Do** type a component's \`variant\` prop as a string-literal union. **Don't** leave it as a loose \`string\` once more than a couple of variants exist — it's how a 25-variant button with no compile-time safety happens.
- **Do** delete a superseded component version once its replacement has shipped and been verified. **Don't** leave "V1"/"V2" trees or "_Old"/"Legacy" files live in production indefinitely — several apps in this audit still had both.
- **Do** build components however best fits the app. **Don't** skip pulling from the shared token package even when building something fully bespoke — that's the one rule this file exists to support.
`.trim();

const output = `---\n${yamlStr}---\n\n${body}\n`;

writeFileSync('./DESIGN.md', output);
console.log('Wrote DESIGN.md (' + output.length + ' bytes)');
