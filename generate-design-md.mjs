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
const motion = readFileSync('./tokens/motion.json', 'utf8');

const colorTokens = JSON.parse(color).color;
const typographyTokens = JSON.parse(typography).typography;
const spacingTokens = JSON.parse(spacing).spacing;
const elevationTokens = JSON.parse(elevation).elevation;
const radiusTokens = JSON.parse(radius).radius;
const motionTokens = JSON.parse(motion).motion;

// ── Colors: DESIGN.md's schema is a flat map<string, Color> — ramps become
// dash-suffixed flat keys (primary-500), with a bare semantic alias
// (primary) pointing at the base tone, per the spec's own convention.
//
// tokens/color.json uses its own internal reference syntax ({color.group.step})
// so a handful of tokens (the -foreground pairs, request.coe) can point at
// another token's value instead of duplicating its hex literally — verified
// against Style Dictionary's own reference resolution in build.mjs. This
// script does its own flat remapping rather than going through Style
// Dictionary, so those references must be resolved to literal hex here too,
// or they'd leak into DESIGN.md's frontmatter as a raw unresolved string
// (`{color.neutral.900}`) instead of a color value.
const REF_RE = /^\{color\.([\w-]+)\.([\w-]+)\}$/;
function resolveColorValue(value) {
  const match = REF_RE.exec(value);
  if (!match) return value;
  const [, group, step] = match;
  return resolveColorValue(colorTokens[group][step].$value);
}

const colors = {};
for (const [group, ramp] of Object.entries(colorTokens)) {
  if (group.startsWith('$')) continue;
  for (const [step, token] of Object.entries(ramp)) {
    if (step.startsWith('$')) continue;
    colors[`${group}-${step}`] = resolveColorValue(token.$value);
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

// ── Motion: not one of the spec's own frontmatter groups (colors/typography/
// rounded/spacing/components) — tested directly against the real design.md
// lint CLI (2026-07-25): an unrecognized top-level key produces zero new
// warnings and zero errors, unlike an unrecognized *component* sub-token
// (which IS validated against a fixed allowlist — see the Button section's
// borderColor note). Included as a best-effort extension, not a guarantee
// about Stitch's own separate ingestion pipeline.
const motionOut = { duration: {}, easing: {} };
for (const [group, tokens] of Object.entries(motionTokens)) {
  if (group.startsWith('$')) continue;
  for (const [name, token] of Object.entries(tokens)) {
    if (name.startsWith('$')) continue;
    motionOut[group][name] = token.$value;
  }
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
    // Bumped from Figma's literal primary-300 (2026-07-25) — WCAG exempts inactive
    // components from contrast minimums entirely, so this isn't a compliance fix, just
    // perceptual clarity. See this file's "Button" prose section for the full story.
    backgroundColor: '{colors.primary-400}',
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
  'badge-filled-primary': {
    backgroundColor: '{colors.primary-500}',
    textColor: '#FFFFFF',
    typography: '{typography.paragraph-small-medium}',
    rounded: '{rounded.full}',
    padding: '6px 16px',
  },
  // badge-filled-{success,warning,destructive,neutral}: confirmed 2026-07-25 via a real-code
  // audit of a shared Badge.vue, byte-identical across 4 of 5 apps. Success/warning use the
  // named ramps directly; destructive's real class is Tailwind's stock `bg-red-500`, not a
  // `destructive-*` class — but red-500 (#EF4444) and destructive-500 are the exact same
  // value, so this is the same "ghost usage" pattern already documented for primary-500's
  // hardcoded hex elsewhere in this file, just via a stock Tailwind class instead of a raw
  // hex. Neutral has no true solid-fill variant in real code — the closest real pattern is
  // `.badge-light` (bg-neutral-100/text-neutral-900), used for "Inactive"/draft states.
  'badge-filled-success': { backgroundColor: '{colors.success-500}', textColor: '{colors.success-foreground}', typography: '{typography.paragraph-small-medium}', rounded: '{rounded.full}', padding: '6px 16px' },
  'badge-filled-warning': { backgroundColor: '{colors.warning-500}', textColor: '{colors.warning-foreground}', typography: '{typography.paragraph-small-medium}', rounded: '{rounded.full}', padding: '6px 16px' },
  'badge-filled-destructive': { backgroundColor: '{colors.destructive-500}', textColor: '{colors.destructive-foreground}', typography: '{typography.paragraph-small-medium}', rounded: '{rounded.full}', padding: '6px 16px' },
  'badge-filled-neutral': { backgroundColor: '{colors.neutral-100}', textColor: '{colors.neutral-900}', typography: '{typography.paragraph-small-medium}', rounded: '{rounded.full}', padding: '6px 16px' },
  // badge-outlined-{primary,success,destructive}: confirmed 2026-07-25, real and load-bearing
  // (CandidatesByJob.vue, TicketsReport.vue) — border-200/text-500 per ramp. Warning/neutral
  // have no real outlined styling defined anywhere; not included here rather than guessed.
  'badge-outlined-primary': { backgroundColor: 'transparent', textColor: '{colors.primary-500}', typography: '{typography.paragraph-small-medium}', rounded: '{rounded.full}', padding: '6px 16px' },
  'badge-outlined-success': { backgroundColor: 'transparent', textColor: '{colors.success-500}', typography: '{typography.paragraph-small-medium}', rounded: '{rounded.full}', padding: '6px 16px' },
  'badge-outlined-destructive': { backgroundColor: 'transparent', textColor: '{colors.destructive-500}', typography: '{typography.paragraph-small-medium}', rounded: '{rounded.full}', padding: '6px 16px' },
  // badge-accent: NOT copied from real code — real "accent/tint" usage (`.badge-light-blue`)
  // is inconsistently named and has no dedicated success/warning/destructive equivalent
  // anywhere in real markup. Modeled instead on shadcn-vue's `secondary` badge convention
  // (tinted bg + darker text), per this repo's own rule for when real evidence is too thin.
  'badge-accent': { backgroundColor: '{colors.primary-100}', textColor: '{colors.primary-700}', typography: '{typography.paragraph-small-medium}', rounded: '{rounded.full}', padding: '6px 16px' },
  accordion: {
    backgroundColor: '#FFFFFF',
    textColor: '{colors.neutral-800}',
    typography: '{typography.paragraph-large-semibold}',
    padding: '26px 16px',
  },
  avatar: {
    backgroundColor: '{colors.neutral-100}',
    rounded: '{rounded.full}',
    size: '40px',
  },
  'avatar-initials': { backgroundColor: '{colors.primary-50}', textColor: '{colors.primary-500}' },
  breadcrumb: { textColor: '{colors.neutral-750}', typography: '{typography.paragraph-small}' },
  'alert-inline-primary': {
    backgroundColor: '{colors.primary-50}',
    textColor: '{colors.primary-800}',
    rounded: '{rounded.sm}',
    padding: '12px 20px',
  },
  // alert-inline-{success,warning,destructive}: confirmed 2026-07-25 via a real-code audit
  // of SnackBar.vue, identical across 4 of 5 apps (client-web, client-dashboard,
  // recruitment-portal, dashboard) — the bg-50/border-200/text-800(title) pattern already
  // established for Primary holds consistently for these three too. textColor here is the
  // title color per the components schema's single-textColor limit; each ramp's body text
  // actually runs one step lighter (700, not 800) — see this file's Alert Inline prose section.
  'alert-inline-success': { backgroundColor: '{colors.success-50}', textColor: '{colors.success-800}', rounded: '{rounded.sm}', padding: '12px 20px' },
  'alert-inline-warning': { backgroundColor: '{colors.warning-50}', textColor: '{colors.warning-800}', rounded: '{rounded.sm}', padding: '12px 20px' },
  'alert-inline-destructive': { backgroundColor: '{colors.destructive-50}', textColor: '{colors.destructive-800}', rounded: '{rounded.sm}', padding: '12px 20px' },
  // alert-inline-neutral: NOT copied from real code — the real "information" type found in
  // the audit is a fallback onto the success ramp (bg-success-50 etc.), not a genuine neutral
  // treatment. This extrapolates the same confirmed offset pattern onto the neutral ramp
  // instead, since no real distinct neutral implementation exists to copy.
  'alert-inline-neutral': { backgroundColor: '{colors.neutral-50}', textColor: '{colors.neutral-800}', rounded: '{rounded.sm}', padding: '12px 20px' },
  'tab-line': { textColor: '{colors.neutral-750}', typography: '{typography.paragraph-small-medium}', padding: '16px' },
  'tab-pill': {
    textColor: '{colors.neutral-750}',
    typography: '{typography.paragraph-small-medium}',
    rounded: '{rounded.sm}',
    padding: '8px 12px',
  },
  // tab-active: confirmed 2026-07-25 via a real-code audit of the shared Tabs.vue used in
  // 4 of 5 apps — a solid bg-primary-500/white-text fill swap on the selected tab, no
  // border or underline anywhere. ⚠️ This applies to BOTH tab-line and tab-pill above: no
  // real evidence of a distinct bottom-border-only "line" active style was found in any
  // app's actual Tab code — see this file's Tab prose section for the full discrepancy.
  'tab-active': { backgroundColor: '{colors.primary-500}', textColor: '#FFFFFF', typography: '{typography.paragraph-small-medium}' },
  'table-header': {
    backgroundColor: '#FFFFFF',
    textColor: '{colors.neutral-750}',
    typography: '{typography.overline}',
    padding: '12px 24px',
  },
  'progress-bar-track': { backgroundColor: '{colors.neutral-100}', rounded: '{rounded.full}' },
  tooltip: { backgroundColor: '#FFFFFF', textColor: '{colors.neutral-900}', rounded: '{rounded.md}', padding: '16px' },
  title: {
    backgroundColor: '#FFFFFF',
    textColor: '{colors.neutral-900}',
    typography: '{typography.heading-h2}',
    padding: '24px 0',
  },
  stat: { backgroundColor: '#FFFFFF', rounded: '{rounded.md}', padding: '24px' },
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
    rounded: '{rounded.sm}',
    padding: '24px',
  },
  'modal-horizontal': { width: '512px' },
  'modal-vertical': { width: '384px' },
  // The following 7 components were confirmed 2026-07-25 via real-code audits (not Figma) —
  // see this file's Components section for the per-component evidence, including 3 real
  // corrections to earlier Figma-only claims (File Upload's radius, Pagination's and Side
  // Navigation's text color) that didn't survive contact with real code.
  //
  // button-group: the real ListViewToggle.vue segmented-control pattern (the literal
  // ButtonGroup.vue component in code is a bare, unstyled layout wrapper with no color/shape
  // of its own — this represents the actual segmented-control behavior, not that component).
  'button-group': { backgroundColor: '{colors.neutral-100}', rounded: '{rounded.md}', padding: '4px' },
  'button-group-active': { backgroundColor: '#FFFFFF', textColor: '{colors.primary-600}', rounded: '{rounded.sm}' },
  // form-control-switch: track color for the real, shared FormToggle.vue (4 of 5 apps). The
  // "on" state below is the RECOMMENDED value, not yet what's shipped — real code currently
  // uses an un-themed stock `bg-blue-600`, never re-themed to the design system's primary
  // color. Flagged as a real re-theming gap, not silently matched to what ships today.
  'form-control-switch-off': { backgroundColor: '{colors.neutral-200}', rounded: '{rounded.full}' },
  'form-control-switch-on': { backgroundColor: '{colors.primary-500}', rounded: '{rounded.full}' },
  // file-upload: confirmed via FormUploadBox.vue, present in 4 of 5 apps. Corrects this
  // file's earlier claim that File Upload confirmed radius.sm (6px) — real code uses 3xl
  // (20px) consistently across every real copy.
  'file-upload': { backgroundColor: '#FFFFFF', textColor: '{colors.neutral-700}', rounded: '{rounded.3xl}', padding: '24px' },
  'file-upload-drag-over': { backgroundColor: '{colors.primary-50}' },
  // pagination-active: the outline pattern is the real majority default (career-web,
  // client-web, client-dashboard, recruitment-portal V1); recruitment-portal's V2 diverges to
  // a filled bg-primary-500/white-text variant, documented as an alternate, not the default.
  'pagination-active': { backgroundColor: 'transparent', textColor: '{colors.primary-500}', rounded: '{rounded.sm}' },
  'pagination-active-filled': { backgroundColor: '{colors.primary-500}', textColor: '#FFFFFF', rounded: '{rounded.sm}' },
  // side-nav-active: confirmed via a shared LeftSidebarMenuItem.vue (4 of 5 apps). Corrects
  // this file's earlier claims that Side Navigation confirmed neutral-750 text and a 6px
  // radius — real code uses secondary-500/primary-500/8px, not neutral-750/6px.
  'side-nav-active': { backgroundColor: '{colors.secondary-500}', textColor: '{colors.primary-500}', rounded: '{rounded.md}' },
  // loader: the real, shared Loader.vue default size (md, 40px) — see this file's Loader
  // section for the full xs–xl scale and the LoaderScreen full-page overlay variant, neither
  // of which fits this schema's single-size-per-entry shape.
  loader: { textColor: '{colors.extended-loader-blue}', size: '40px' },
  'loader-screen': { backgroundColor: '{colors.neutral-100}' },
  // data-display-{label,value}: confirmed via EmployeeDetails.vue (client-dashboard) — real
  // but thin evidence (1 source file, 3 usage sites). Label and value share the same text
  // color, differentiated only by font-weight (regular vs. semibold) — not a lighter "muted
  // label" convention some design systems default to.
  'data-display-label': { textColor: '{colors.neutral-800}', typography: '{typography.paragraph-small}' },
  'data-display-value': { textColor: '{colors.neutral-800}', typography: '{typography.paragraph-small-medium}' },
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
  motion: motionOut,
  components,
};

const yamlStr = YAML.stringify(frontmatter, { lineWidth: 0 });

const body = `
## Overview

Tahche's product suite is a set of internal operational tools — HR, recruitment, client and employee dashboards, asset management — used daily by staff and clients, not a consumer marketing surface. The UI should feel calm, efficient, and trustworthy rather than decorative: dense information handled legibly, clear affordances, no gimmicks. This carries the brand's voice (warm but professional, confident, employee-first, client-focused, action-oriented — see the brand guide) into product terms: helpful and direct, never cold or over-designed.

This file is **generated** from [\`tahche-design-tokens\`](https://github.com/karl-tahche/tahche-design-tokens) — the token JSON is the actual source of truth (and what Figma's Variables sync against via Tokens Studio). Regenerate this file when tokens change; don't hand-edit the frontmatter.

Component *structure* is deliberately not standardized here. Each of the 5 apps builds its own components in whatever shape suits it — that flexibility is intentional, confirmed with the dev team directly. What this file (and the token package behind it) exists to make consistent is the token layer: color, type, spacing, elevation, shape. A component can be built any way a developer likes, as long as its values come from these tokens rather than a hand-typed hex or pixel value.

Figma is a design reference here, not the final source of truth — the strategy is to find the token set that actually fits this Vue 3 + Tailwind codebase, evolve components in code first, and round-trip proven changes back to Figma afterward. A 2026-07-23 audit grepped real class usage across all 5 apps (not just what's in \`tailwind.config.js\`) specifically to check this file's tokens against what's genuinely load-bearing versus what only exists in Figma or config. Findings from that pass are noted inline below wherever they changed or reinforced something.

## Colors

Two tiers, deliberately kept separate:

- **Product colors** (\`primary\`, \`secondary\`, \`neutral\`, \`success\`, \`warning\`, \`destructive\`) — for UI. \`primary\` is \`#353DD7\`, the value already live across all 5 apps; kept as-is rather than migrated, since re-theming five production apps for a color that was only ever a brand-guide value, never a shipped one, wasn't worth the churn.
- **Brand colors** (\`brand-blue\` \`#2232D7\`, \`brand-gold\` \`#FBD24D\`) — for marketing/document contexts only (matches the brand guide exactly). Do not use these in product UI; that's what \`primary\`/\`secondary\` are for, even though they're visually close.

Each semantic ramp (\`success\`/\`warning\`/\`destructive\`) runs 50→900 and should only be used for state communication — a destructive action, a warning banner, a success toast — never as a decorative accent. Within any ramp: 50/100 for tinted backgrounds and hover fills, 500 for the primary interactive tone, 700–900 for high-contrast text or dark-surface contexts.

**\`neutral-750\` (\`#3F3F3F\`) is new** — not a Figma foundation-page color, but a real, heavily-used gray discovered by auditing live components directly. It's the actual secondary/body text color in Breadcrumb, Tab, Table Header, Table Content Cell, Tooltip, Button Tertiary, and Accordion — used in more places than \`neutral-700\` itself, despite never having been documented anywhere before this. **Corrected 2026-07-25**: Pagination, Side Nav Item, and Button Group were removed from this list — a real-code audit found none of the three actually uses it (see their own sections below for what they really use).

**Two new categories, promoted from a real-usage audit of all 5 codebases, not from Figma:**

- **\`request\`** (facilities/cashAdvance/room/pettyCash/procurement/businessTrip/coe) — real, needed design vocabulary for request-type status badges, previously defined identically in 4 of 5 apps' Tailwind configs but wired inconsistently: one app uses it correctly via real classes, two need the exact same colors but hardcode the hex instead, and one never needs it in practice. Promoted here so the class-based path becomes the actual path of least resistance instead of copy-pasting hex.
- **\`extended\`** (muted-blue-gray, dark-slate, charcoal, indigo-navy) — ratified 2026-07-25. Four hardcoded hex values that recur across 3+ of the 5 apps at real volume (6–60 instances each) serving a genuine, currently-untokenized need, mostly muted icon/chrome colors — none close enough to an existing \`neutral\` step to substitute without a visible shift, so each is kept as its own named tier rather than folded in. **A 5th, \`loader-blue\` (\`#30699D\`), was added the same day** from a real Loader-component audit — the default spinner color in a shared \`Loader.vue\`/\`LoaderScreen.vue\` pair across 4 of the 5 apps, distinct from \`primary-500\`. Unlike the other four, this one has a real, tokenized alternative already shipping (career-web's own Loader uses \`primary-500\` directly) — worth an explicit design decision on whether to migrate the other 4 apps to \`primary-500\` rather than keeping two blues.

**A structural gap, not just a discipline problem**: every app hardcodes token-matching hex values — most heavily \`primary-500\`, which in one app (client-web) is hardcoded *more often* (157×) than the actual Tailwind class is used (117×). Almost all of this "ghost usage" is inside inline SVG icon \`fill\`/\`stroke\` attributes, which can't take Tailwind classes directly. The fix is a token-aware icon component (a \`color\` prop that maps to the token set), not a reminder to "just use the class."

**Every semantic ramp now has a \`{ramp}-foreground\` pair** (\`primary-foreground\`, \`secondary-foreground\`, etc.) — following shadcn-vue's foreground-pairing convention: the guaranteed-accessible text color for when that ramp's 500 tone is used as a solid background (a filled button, a solid badge). Each was verified with real WCAG contrast math, not assumed:

| Ramp | Foreground | Contrast on {ramp}-500 |
|---|---|---|
| \`primary\` | white | 7.50:1 ✅ |
| \`secondary\` | neutral-900 | 12.65:1 ✅ (white fails at 1.46:1 — gold is too bright for white text) |
| \`neutral\` | neutral-900 | 8.89:1 ✅ (white fails at 2.07:1) |
| \`success\` | neutral-900 | 8.08:1 ✅ (white fails at 2.28:1) |
| \`warning\` | neutral-900 | 8.58:1 ✅ (white fails at 2.15:1) |
| \`destructive\` | neutral-900 | 4.90:1 ✅ |

**⚠️ That last row surfaced a second, independent contrast finding — now resolved as a decision, with a follow-up action item, not left open**: white on \`destructive-500\` measures 3.76:1 — it clears the 3:1 large/bold-text AA exception but fails the 4.5:1 normal-text minimum that applies to typical 14–16px Medium-weight button labels. Unlike \`button-primary-disabled\` (see Button below), which turns out to be WCAG-*exempt* rather than a real failure, this ramp's 500 tone is used on *active* components, where 1.4.3 genuinely applies — so \`destructive-foreground\` stays \`neutral-900\`, the fully-compliant choice, confirmed 2026-07-23. **Action item, not yet done**: audit Button/Badge's Destructive-filled variants across all 5 apps — white text is almost certainly what's actually shipped today, matching the white-text convention used everywhere else, and needs migrating to \`neutral-900\` wherever found.

## Typography

**Inter** is the typeface actually rendering across all 5 apps today — but historically it was applied only via a global CSS override (\`* { font-family: Inter !important }\`), never registered in Tailwind's own \`fontFamily\` config. That's fixed at the token level here: \`typography.fontFamily\` resolves to Inter with system fallbacks, and should be wired as Tailwind's \`fontFamily.sans\`, not a separate custom key.

The type scale below covers display sizes down to overline. Confirmed weights, sourced from either bound Figma variables or live design-context pulls against real components: \`heading-h2\` (Extrabold/800), \`heading-h3\` (Semibold/600, via Stat), \`heading-h4\` (Medium/500), \`paragraph-large\` (Regular/400, Medium/500, and Semibold/600 via Accordion), \`paragraph-medium\` (Medium/500, via Button), \`paragraph-small\` (Regular/400 and Medium/500, via Input Field and Button), \`paragraph-xsmall\` (Regular/400, via Tooltip — note its line-height is 16px, not the more common 20px), \`label-xsmall\` (Medium/500, a distinct 12/15 style used for small badges), and \`overline\` (Semibold/600, uppercase, 1px tracking, via Table Header). Every other weight is a proposed default — check \`build/tailwind/font-weights.json\` in the tokens repo for the live confirmed/proposed status before treating one as final.

**\`heading-h2\`'s Figma conflict is now resolved, 2026-07-25**: the Typography foundation page's own named Figma variable said Extrabold (800), while the Title component's live design context rendered the same 36/44 size as Bold (700) instead. Ratified: Extrabold (800), the foundation page's stated value — the Title component's Bold rendering is the thing that drifted and needs correcting in Figma/components, not this token. \`display-large\` (52px), previously an unconfirmed Bold/700 guess with zero confirmed instances anywhere in this file, was bumped to match at Extrabold (800) too, for the same reason — matching its now-resolved neighbors \`heading-h1\`/\`heading-h2\` rather than carrying a separate, never-proven weight tier.

**Every style is now emitted as a composite \`.text-{name}\` Tailwind class** (\`.text-heading-h2\`, \`.text-paragraph-small\`, etc.), bundling font-size, line-height, letter-spacing, and font-weight into one class, shipped via a plugin in the Tailwind preset — see \`build.mjs\` in the tokens repo. This is the fix for the \`heading-h2\`-style conflict above and for Figma-vs-code weight mismatches generally: Tailwind's own \`fontSize\` theme key can't carry font-weight, so a text style built from two separately-applied utilities (\`text-2xl\` + \`font-medium\`) can drift apart the moment either one changes independently. One class removes that failure mode.

**Two consolidations applied from real usage, following the same logic as the tokens themselves** (prefer the value with the most evidence): \`heading-h5\`/\`heading-h6\` moved from an unconfirmed Semibold(600) guess to Medium(500) — Medium is confirmed 5/5 times everywhere else it appears in this scale, the strongest evidence of any weight tier, versus Semibold's weaker 3/5. And \`display-small\` (44px) is **deprecated** in favor of \`heading-h1\` (40px): it was the weakest size in the entire scale (dead in 3 of 5 apps, a single low-volume use in the other 2) sitting close enough to the solidly-used \`heading-h1\` that the distinction looks accidental, not intentional. Its \`.text-display-small\` class still exists — rendering identically to \`.text-heading-h1\` via an explicit alias — so nothing already pointing at it breaks, but new work should reference \`heading-h1\` directly.

**13px is a real gap this scale doesn't cover, resolved rather than left open**: it recurs 116+ times across 3 of the 5 apps, sitting right between \`paragraph-xsmall\` (12px) and \`paragraph-small\` (14px). Not formalized as its own token — it's almost certainly Figma/rem-rounding drift (\`0.8125rem\` is an unusually precise, non-round value for a deliberate design choice), not an intentional size. Recommended fix at the code level: snap any \`text-[13px]\` usage to \`paragraph-small\` (14px), the single most dominant body size in every app, rather than manufacturing a permanent token to match an accident.

## Layout

The spacing scale (4px→192px) matches Tailwind's own default scale exactly at every step — adopting it requires no Tailwind config changes, only the discipline to stop reaching for arbitrary bracket values (\`px-[0.938rem]\`, \`w-[6.25rem]\`) that show up throughout all 5 codebases today.

**Breakpoints are ratified (2026-07-25), not just proposed.** Every app currently carries three parallel, conflicting breakpoint definitions (custom Tailwind \`screens\`, SCSS \`$breakpoint-*\` variables, and CSS custom properties) — but a 2026-07-23 audit found that regardless of what's configured, every single app already overwhelmingly uses standard Tailwind \`sm/md/lg/xl/2xl\` in real markup (217 to 2,844 instances per app), while the custom scheme sees only 0-46 instances per app, almost entirely confined to legacy Auth screens. Consolidating onto the standard scale isn't a risky migration into unfamiliar territory — it's formalizing what's already the dominant pattern in every codebase. \`tablet:768\` already equals \`md:768\`, so nothing is lost; the remaining work (updating the small number of legacy Auth-screen classes, wiring this scale into each app's actual Tailwind config) is mechanical, not a design question anymore.

## Elevation & Depth

A 6-step shadow scale, already identical across Figma and all 5 apps (a rare case with no conflict to resolve) — built on a single neutral shadow color (\`rgba(16,24,40,*)\`) at increasing offset/blur/spread. Use \`xsmall\` for subtle separation between adjacent surfaces (a card against its page background), \`small\`/\`medium\` for dropdowns and popovers, \`large\`/\`xlarge\` for modals and sheets, and reserve \`xxlarge\` for the single heaviest overlay in a given view. \`xsmall\` (Input Field, Button Group), \`small\` (Stat), \`large\` (Tooltip), and \`xlarge\` (Modal) are all now confirmed via named Figma variables on real components — only \`medium\` and \`xxlarge\` remain unconfirmed against a live component, and a real-usage audit found \`xxlarge\` dead as a class in every one of the 5 apps.

A 7th token, \`focus-ring\`, is now \`rgba(53, 61, 215, 0.12)\` at 3px with no blur — **replaced 2026-07-25**, real code over Figma: the previous value (\`#E1E1FE\`, a 4px solid ring, originally Figma-sourced) turned out to have zero real usage anywhere across all 5 apps, while this translucent primary-500 ring is a real, repeated, consistent implementation across 2 live apps (recruitment-portal: 4 files; client-web: 3 identical instances sharing the same Jobs feature) plus a near-variant in career-web using a different color at the same shape. Per this repo's own strategy, the never-shipped Figma value lost to the real one. Not every focused input gets a ring at all, either — a plain border-color-only focus swap, no shadow, is actually the single most-repeated focus treatment by file count (recruitment-portal's whole shared Form component library, 14 files) — a valid lighter-weight alternative, not a competing definition to reconcile.

**Every app also reaches for Tailwind's stock shadow classes (\`shadow-sm/md/lg/xl/2xl\`) alongside this named scale** — in some apps more than the named tokens are used at all. A CI lint blocking the stock classes in favor of these named ones would close a real, consistently observed gap.

**Motion is ratified too, as of 2026-07-25**, from the same kind of real-usage audit as everything else in this file — this time run against all 5 apps' actual CSS transitions rather than Figma, since motion has no Figma source at all. No app uses an animation library: no GSAP, Framer Motion, Lenis, or \`@vueuse/motion\` anywhere. \`motion.duration\` is a 3-step scale (\`fast\` 150ms, \`base\` 250ms, \`slow\` 500ms) — each value independently lands as a top-3 real value in all 5 codebases, despite the apps sharing no code. \`motion.easing.standard\` is \`ease-in-out\`: the real data splits roughly 3-to-2 across apps between plain \`ease\` and \`ease-in-out\` as each app's own top pick, so this was settled by explicit decision, not vote count. \`motion.easing.linear\` is reserved for continuous/looping motion only (spinners, marquees) — confirmed as a distinct, consistent real pattern, never used as a general transition easing anywhere in the data. **⚠️ A real, severe accessibility gap surfaced by the same audit**: \`prefers-reduced-motion\` is handled in only 1 of the 5 apps (career-web, 11 files) — client-web, client-dashboard, recruitment-portal, and dashboard have zero handling whatsoever. This is the motion equivalent of the contrast findings elsewhere in this file: a real, current, cross-app gap, not a token to define but a fix every app needs to ship.

## Shapes

\`sm\` (6px) and \`md\` (8px) are now confirmed directly against real components — \`sm\` on Button, Input Field, Modal, File Upload, Tab/Pill, and Side Nav Item; \`md\` on Button Group, Stat, and Tooltip. \`full\` is confirmed via Avatar, Badge, and Form Control Switch.

**⚠️ None of the 5 apps' Tailwind configs actually define a custom \`borderRadius\` at all** — this whole scale exists only in Figma and this tokens repo today. Every app relies on Tailwind's stock radius values (which don't match this scale at \`sm\`/\`md\`/\`lg\`) plus hand-rolled arbitrary \`rounded-[Npx]\` values to compensate — most heavily at \`10px\` (100+ combined instances across 4 apps, confirming \`lg\`) and, newly, at \`20px\` (80+ combined instances across 4 apps) — real, consistent enough evidence to add a **new \`3xl\` (20px) step** to this scale, on top of what Figma alone had shown. \`14px\` shows up too (strongest in client-web) with weaker, less consistent evidence — **resolved 2026-07-25**: snap to \`2xl\` (16px) rather than adding a 7th step, since client-web's own independent need for the larger \`3xl\` (20px) suggests that app trends toward more generous rounding overall. Wiring this scale into each app's actual Tailwind config is a Phase 3 prerequisite, not just documentation.

## Components

Not an exhaustive catalog — a shared vocabulary. Figma's real component library (audited directly) already documents a working set: Accordion, Avatar, Badge, Breadcrumb, Button, Button Group, Data Display, Date Picker, File Upload, Form Control, Inline Alert, Sticky Alert, Input Field, List Field, Loader, Modal, Pagination, Progress Bar, Progress Step, Side Navigation, Stat, Tab, Table, Title, and Tooltip. Those names are the shared vocabulary for what a "Button" or "Badge" means across the org, even though each app is free to implement its own. **As of 2026-07-25, every one of these 25 names now has either a real frontmatter entry, a documented real-code correction, or an explicit "not yet real, don't invent" note** — none are silently missing anymore, though several (List Field, Progress Step, Date Picker, Sticky Alert) are honestly thin or absent in real code today.

The composite tokens in this file's frontmatter (\`button-*\`, \`badge-filled-*\`, \`badge-outlined-*\`, \`badge-accent\`, \`input-field-*\`, \`modal-*\`, \`accordion\`, \`avatar\`, \`breadcrumb\`, \`alert-inline-*\`, \`tab-line\`, \`tab-pill\`, \`tab-active\`, \`table-header\`, \`progress-bar-track\`, \`tooltip\`, \`title\`, \`stat\`, \`button-group*\`, \`form-control-switch-*\`, \`file-upload*\`, \`pagination-active*\`, \`side-nav-active\`, \`loader*\`, \`data-display-*\`) are reference points for the primitives every app already reimplements independently — not a mandate to build a shared component package. Use them as a starting shape; diverge where a specific app's needs require it, as long as the underlying color/type/spacing/radius tokens are still the ones referenced above.

### Button — confirmed directly from Figma

Unlike the other components below, Button's tokens are pulled from live Figma design context (the actual selected component, not an inference) — checked against the full Size × Type × State matrix, not just one variant:

- **Radius is \`6px\` (\`rounded.sm\`) on every Button variant**, all 3 sizes, all 5 types (Primary/Secondary/Outlined/Tertiary/Link) — the first real confirmation for the \`rounded\` scale, which otherwise has no Figma source (see Shapes above).
- **Size drives height and padding**, consistently across every type: Large is \`48px\` height / \`12px 20px\` padding, Medium is \`40px\` / \`10px 16px\`, Small is \`28px\` / \`6px 12px\`. Icon size scales with it too: \`20px\` at Large/Medium, \`16px\` at Small.
- **State changes color only, never size**: Primary's Default (\`primary-500\` bg, white text) → Hover (\`primary-600\` bg) → Pressed (also \`primary-600\` bg, but text shifts to \`primary-200\` — a real, distinct state, not a duplicate of Hover) → Disabled (\`primary-400\` bg, white text — bumped up from Figma's literal \`primary-300\`, see below).
- **Disabled's Figma value is not actually a WCAG failure — it's exempt, and the earlier framing here overstated it**: white text on \`primary-300\` (\`#8D92EB\`) measures 2.82:1, below the 4.5:1 AA minimum, but WCAG 1.4.3 (Contrast Minimum) has a normative exception for text belonging to an *inactive* UI component — a disabled control has no contrast obligation at all, regardless of size or weight. Bumped anyway, 2026-07-25, purely for perceptual clarity (so "disabled" reads as legible-but-muted rather than washed-out), not compliance: \`primary-400\` (\`#555DE0\`) lands at 5.21:1, comfortably AA-passing as a side effect, not the goal. A deliberate, documented departure from Figma's literal value rather than a silent "fix."
- **Focus is a real, confirmed gap, not documentation lag**: a 2026-07-25 code audit found zero focus-visible styling anywhere on any of the 5 apps' shared Button components (0 matches for \`focus\`/\`focus-visible\`/\`focus:ring\` across all 6 real Button.vue files). The only \`focus:ring-*\` usage anywhere in the suite is on an unrelated notification-dismiss icon button. Recommendation: apply \`elevation.focus-ring\` (the same ring now used on Input Field) to Button's focus state going forward — reusing the just-reconciled real ring rather than inventing a second one.
- **Loading reuses Disabled's appearance, plus a spinner — it's not a fourth distinct color state**: real code across 4 of the 5 apps composes loading externally (consumer passes \`:disabled="isLoading"\` to Button, then renders a separate \`Loader\`/spinner alongside the label — label stays visible, no dimming or resizing). Only career-web's Button has a built-in \`loading\` prop doing the same thing internally (spinner + label both shown, \`disabled\` set). Recommendation: codify the real cross-app visual (spinner beside label, Disabled's color state, nothing dims or resizes) as canonical, and promote career-web's single-prop shape as the target API — not the 4-app pattern of every consumer wiring up its own external spinner.
- **Outlined and Tertiary both have a border** (\`primary-500\` and \`neutral-200\` respectively) that isn't representable in the frontmatter — checked 2026-07-25: \`component_sub_tokens\` (\`backgroundColor\`/\`textColor\`/\`typography\`/\`rounded\`/\`padding\`/\`size\`/\`height\`/\`width\`) is fixed by the \`@google/design.md\` spec itself, not something this repo's generator controls, and adding an unrecognized field (tested directly against the real lint CLI) produces a permanent "not a recognized component sub-token" warning on every future lint run rather than a clean pass. This is a durable spec limitation, not an unfinished gap in this file — border specs are correct and complete here in prose, just not machine-readable from the YAML. If you're implementing these types, add the border yourself from the values stated here.
- **Link has no background, border, or horizontal padding** — text and icons only, vertical padding matching the other types at its size.
- The lint warnings on \`button-outlined\`/\`button-link\`/\`input-field-line\`/\`badge-outlined-*\`/\`pagination-active\` about low contrast against a "transparent" background are a known linter limitation (it can't evaluate contrast with nothing behind it) — all of these sit on a white page in practice, where their text colors pass comfortably (confirmed by \`button-secondary\`'s identical primary-500 text passing against its primary-50 background, and neutral-900 being the standard body-text color used everywhere else in this file against white).

### Input Field — confirmed directly from Figma

Two visual styles, \`Box\` (bordered) and \`Line\` (bottom-border only), each across Default/Focused/Typing/Active/Disabled/Destructive states:

- **Both styles share the same type ramp**: label is \`paragraph-small-medium\` (14/20, Medium), value/placeholder/helper text is \`paragraph-small\` (14/20, Regular) — both now confirmed twice over (once via Button, once here).
- **\`Box\`**: white background, \`6px\` radius (\`rounded.sm\` — a third confirmation), \`8px 12px\` padding, 1px border that changes color by state (\`neutral-200\` default/active/disabled, \`primary-300\` focused/typing, \`destructive-300\` error) — border color isn't representable in the frontmatter, the same permanent spec limitation as Button's Outlined/Tertiary (see Button above). Carries the \`elevation.xsmall\` shadow at rest, which is **removed entirely when disabled**.
- **A focused or typing \`Box\` gets a focus ring** (\`elevation.focus-ring\`, now \`rgba(53, 61, 215, 0.12)\` at 3px — see Elevation & Depth above for why this replaced the original Figma-sourced value).
- **\`Line\` never gets that ring** — focus only changes its bottom-border color, same state-to-color mapping as \`Box\`. This is a real, deliberate difference between the two styles, not an inconsistency to fix.
- **Destructive state**: border shifts to \`destructive-300\`, and helper text shifts to \`destructive-500\` — the one part of the error state representable in the \`components\` schema (\`input-field-box-error\`).

### Modal — confirmed directly from Figma

- Shared across both alignment variants: white background, \`6px\` radius (\`rounded.sm\` — a third component now confirming this token, alongside Button and Input Field), \`24px\` padding all around, and the \`elevation.xlarge\` shadow — independently confirmed twice, once from a named Figma variable and once from this live design context pull.
- **Fixed width per alignment, not a token — a real content-driven size**: \`modal-horizontal\` is \`512px\`, \`modal-vertical\` is \`384px\`. \`32px\` gap separates the content block from the actions row.
- **Heading** uses \`paragraph-large-medium\` (18/28, Medium — now confirmed twice), **description** uses \`paragraph-small\` (14/20, Regular — now confirmed three times over across Button, Input, and Modal).
- A circular leading icon container (\`primary-50\` background, \`48px\`, fully rounded) is optional, as is the description and the top-right close icon.
- **Vertical modal's button-padding mismatch is resolved, 2026-07-25**: its action buttons combined Large button padding (\`20px 12px\`) with a hardcoded \`40px\` height — Medium's height paired with Large's padding, mixed together. Ratified fix: snap to Medium consistently (\`40px\` height / \`10px 16px\` padding, matching \`button-primary-medium\` exactly), since the height was already Medium's and Horizontal's buttons don't have this issue in the first place (Medium padding, Medium implied height) — Horizontal is the internally-consistent baseline, Vertical's padding is what needs correcting to match it, not the other way around.

### Badge — corrected from an earlier wrong guess, now with its full range confirmed by real code

The Large/Primary/Filled/Default variant is \`primary-500\` background with **white** text — not the \`primary-50\`/\`primary-700\` light-tint pairing this file guessed at in an earlier pass, before Badge itself had been audited directly. Padding is \`6px 16px\`, radius is fully rounded (\`24px\` on a \`32px\`-tall pill — deliberately over-rounded rather than exactly half the height), and the label uses \`paragraph-small-medium\`.

**The full type/variant range is now filled in, 2026-07-25, from a real-code audit** of a shared \`Badge.vue\` found byte-identical across 4 of the 5 apps (career-web has no Badge at all):
- **Filled Success/Warning** use their named ramps directly (\`success-500\`/\`warning-500\`, white text) — real and confirmed.
- **Filled Destructive** is real too, but its actual class in code is Tailwind's stock \`bg-red-500\`, not a \`destructive-*\` class — the same "ghost usage" pattern already documented for \`primary-500\`'s hardcoded hex elsewhere in this file, just via an unnamed stock class instead of a raw hex. Harmless here only because \`red-500\` (\`#EF4444\`) and \`destructive-500\` happen to be the exact same value — a coincidence, not a guarantee.
- **Filled Neutral** has no true solid-fill equivalent in real code. The closest real pattern, \`.badge-light\` (\`neutral-100\` background, \`neutral-900\` text), used for "Inactive"/draft states, is what \`badge-filled-neutral\` is modeled on.
- **Outlined** is real and load-bearing (\`CandidatesByJob.vue\`, \`TicketsReport.vue\`) for Primary, Success, and Destructive — a consistent \`border-200\`/\`text-500\` pattern per ramp. Warning and Neutral have **no real outlined styling anywhere** — not extrapolated here rather than guessed.
- **Accent** has no consistent real implementation — the closest real thing (\`.badge-light-blue\`) is inconsistently named with no success/warning/destructive equivalent anywhere in real markup. \`badge-accent\` is modeled instead on shadcn-vue's \`secondary\` badge convention (tinted \`*-100\` background, darker \`*-700\` text) — the fallback this repo uses when real evidence is too thin to extrapolate from directly.

### Accordion, Avatar, Breadcrumb — confirmed directly from Figma

- **Accordion**: white background, border-bottom only (\`neutral-200\`), an unusual asymmetric padding (\`26px\` vertical, \`16px\` horizontal — real, not a typo), \`16px\` gap. Title uses the newly-confirmed \`paragraph-large-semibold\` (neutral-800); description uses \`paragraph-small\` (\`neutral-750\`).
- **Avatar**: fully circular at every size (24px–128px), with a 1.5px white border for stacking (see Avatar Group's overlapping \`-12px\` negative margin). The Initials variant is \`primary-50\` background with \`primary-500\` text and \`paragraph-medium-medium\` — the same light-tint pairing seen on Secondary buttons and Alert Inline.
- **Breadcrumb**: \`paragraph-small\` in \`neutral-750\` for each crumb, with a \`neutral-300\` slash separator between them.

### Alert Inline, Tab, Table

- **Alert Inline** (originally Figma-confirmed for Primary only; the other 3 types confirmed 2026-07-25 by real code): \`primary-50\` background, \`primary-200\` border, title in \`primary-800\`, description in \`primary-700\` — a "bg-50 / border-200 / text-800(title)/text-700(body)" pattern. A real-code audit of \`SnackBar.vue\` (byte-identical across 4 of 5 apps) confirmed this same offset pattern holds for Success, Warning, and Destructive too — real, repeated, consistent evidence, not an assumption. **Neutral is the one exception**: the real "information" type in code is a fallback onto the Success ramp entirely (same bg/border/text classes, only the icon color differs) rather than a genuine neutral treatment — \`alert-inline-neutral\` in this file's frontmatter is therefore extrapolated onto the neutral ramp using the same confirmed offset logic, not copied from what's actually shipped, since nothing real exists to copy for that one case.
- **Tab**: real code (a shared \`Tabs.vue\` in 4 of 5 apps — career-web has no Tab component) shows the selected/active tab as a solid \`primary-500\` background with white text, swapping from inactive's \`neutral-750\` text at \`paragraph-small-medium\` — no border or underline anywhere. **⚠️ A real, unresolved discrepancy, not silently picked**: this file's \`Line\` style was originally documented (from Figma) as bottom-border-only, \`56px\` tall — but the 2026-07-25 code audit found zero evidence of any bottom-border/underline Tab treatment anywhere in real code; every real implementation uses the same solid-fill swap regardless of which named style it's meant to be. Either the bottom-border \`Line\` style genuinely isn't built anywhere yet (a real Figma-vs-code gap, not a conflict to resolve away), or it lives in a component these audits didn't find. \`tab-active\` in the frontmatter captures the one pattern that IS confirmed; the \`Line\`/\`Pill\` distinction stays as originally documented pending an actual look at whether \`Line\` exists anywhere. Also flagged: \`aria-selected\` is absent from every real Tab implementation — a real accessibility gap, not a token question (see Do's and Don'ts).
- **Table**: the Header cell uses the \`overline\` style (uppercase, \`neutral-750\`) that this same audit corrected. Leading and Content cells both run \`72px\` tall with \`24px\`/\`16px\` padding, and Content Cell's oddly-named \`State4\` variant turns out to be a fully populated row (avatars, badge, progress bar, rating, actions) — not a distinct visual state, just an unclear internal name worth renaming.

### Progress Bar, Tooltip, Title, Stat — confirmed directly from Figma

- **Progress Bar** is built from individual 1-unit-wide \`.Progress Bar / Block\` segments in a flex row on a \`neutral-100\` fully-rounded track, not a single scaling fill — filled segments are \`primary-500\`, unfilled ones render as a separate gray asset. Three sizes (Large/Medium/Small: \`88px\`/\`80px\`/\`72px\` tall) each carry a \`paragraph-medium-medium\` label and \`paragraph-small\` caption.
- **Tooltip**: white background, \`rounded.md\`, \`16px\` padding, the confirmed \`elevation.large\` shadow, title in \`paragraph-xsmall-medium\`-shaped text (12/15, matching \`label-xsmall\`) and description in the newly-corrected \`paragraph-xsmall\` (12/16, \`neutral-750\`).
- **Title**: the page-heading component, not a token — \`heading-h2\` for the title text (inheriting that token's H2 weight conflict directly), \`paragraph-small\` overline/description in \`neutral-500\`, a circular \`primary-50\` icon container, and an optional action pair (Secondary + Primary button, Medium size).
- **Stat**: white background, \`rounded.md\`, \`24px\` padding, the confirmed \`elevation.small\` shadow. The big number uses \`heading-h3\` (the style this audit corrected to Semibold/600), with an optional \`success-50\`/\`success-500\` percentage badge — the same bg-50/text-500 semantic pairing used elsewhere, now confirmed for the Success ramp specifically, not just Primary.

### Button Group, Switch — confirmed and corrected via real code, 2026-07-25

11 components named in Figma's real library had zero dedicated entry in this file until this pass — a real structural gap, not an oversight in how the file reads. Two are covered here:

- **Button Group**: the literal \`ButtonGroup.vue\` component found in code (present in 3 of 5 apps, only 2 real usage sites) turns out to be a bare, unstyled \`flex\` wrapper — no background, border, text color, or shadow of its own, and it groups *unrelated* action buttons (e.g. "Edit" + a dropdown chevron), not a true segmented control. The actual segmented/toggle behavior this file's \`radius.md\` and \`elevation.xsmall\` tokens were originally attributed to lives in a differently-named real component, \`ListViewToggle.vue\` (recruitment-portal only, 1 usage): an \`neutral-100\` track at \`radius.md\` (8px) with \`4px\` padding, individual segments at \`radius.sm\` (6px), and an active segment that's \`white\`/\`primary-600\`/\`shadow-sm\` (visually matching \`elevation.xsmall\`'s shape, though the real class used is Tailwind's generic \`shadow-sm\`, not the project's own named utility — a byte-level gap worth closing, not just a visual match). \`button-group\`/\`button-group-active\` in the frontmatter represent this real pattern, not the unstyled \`ButtonGroup.vue\`.
- **Form Control (Switch)**: a shared \`FormToggle.vue\` (4 of 5 apps, absent in career-web) confirms \`radius.full\` on both track and thumb — real and solid. Its "on" color, however, is a real, un-themed gap: every real copy uses Tailwind's stock \`bg-blue-600\`, never re-themed to \`primary-500\` — a copy-pasted third-party (Flowbite-style) snippet that was never wired to this design system's tokens. \`form-control-switch-on\` in the frontmatter is the **recommended** fix (\`primary-500\`), not a description of what's currently shipped — flagged explicitly so it isn't mistaken for an already-resolved gap.

### File Upload — confirmed via real code, corrects an earlier Figma-only claim

A shared \`FormUploadBox.vue\` (4 of 5 apps, ~11 real usage sites): white background, solid \`1px\` \`neutral-200\` border (not dashed, despite that being the more common convention elsewhere), and — **correcting this file's earlier claim that File Upload confirmed \`radius.sm\` (6px)** — every real copy uses an explicit \`20px\` (\`radius.3xl\`) radius, overriding Tailwind's own \`rounded-lg\` class also present in the same markup. Drag-over state (\`primary-50\` background, \`primary-300\` border) and a hover scale+shadow effect exist only in client-web's fullest copy; the other 3 real copies lack drag-state styling entirely. File-type icons are colored by extension (\`primary-500\` for docs, \`destructive-500\`-equivalent stock \`red-500\` for PDF/PPT, \`success-400\` for spreadsheets) — the same stock-class-matches-token-value pattern already flagged for Badge's Destructive variant.

### Pagination, Side Navigation — confirmed and corrected via real code, 2026-07-25

Both had existing claims in this file (via \`neutral-750\`, and a \`6px\` radius for Side Nav Item) that turned out to be **Figma-only — a real-code audit found neither is actually true**:

- **Pagination**: real inactive text is \`neutral-700\` (\`#4F4F4F\`) or \`neutral-500\`, never \`neutral-750\`. Two competing real active-page patterns exist, not one: an outline style (\`border-primary-500\`/\`text-primary-500\`, transparent fill) is the majority default across career-web, client-web, client-dashboard, and recruitment-portal's V1 — \`pagination-active\` in the frontmatter represents this. recruitment-portal's V2 diverges to a filled \`bg-primary-500\`/white-text variant (\`pagination-active-filled\`), documented as a real alternate, not the default. Prev/next arrows disable correctly at the first/last page in every implementation, recoloring to a muted neutral and reducing opacity.
- **Side Navigation**: real active state is \`bg-secondary-500\` at \`radius.md\` (8px, not 6px) with \`primary-500\` text — no neutral step involved at all, and no left-border indicator anywhere. Inactive is plain white text; hover shifts to \`secondary-500\` text with bold weight. No badge/count-indicator element exists in any real implementation either — the \`label-xsmall\` "Side Nav Item badge" claim in \`typography.json\` was also Figma-only and has been corrected. Collapsed/expanded rail behavior (V2 sidebars only) shows/hides labels with a 250ms delay and reveals a tooltip on hover — real, but not yet reflected as its own token.

### Loader — new, confirmed via real code

Two real, shared component families exist across the suite (evidence of parallel-but-uncoordinated builds, not one shared package): a \`Loader.vue\`/\`LoaderScreen.vue\` pair, byte-identical across client-web, client-dashboard, and recruitment-portal, plus career-web's own independent equivalent. Real, confirmed findings:

- **A genuine 5-step size scale**: \`xs\` (10px) / \`sm\` (20px) / \`md\` (40px, the default) / \`lg\` (60px) / \`xl\` (80px) — drawn from a fixed scale in code (\`constants.ts\`), not arbitrary per-usage pixel values.
- **Implementation**: a CSS border-spin circle (\`border-2\`-style ring with \`border-t-color: transparent\`), colored either white (on a filled button, matching the canonical spinner-beside-label Loading pattern documented under Button above) or a brand blue on light backgrounds — but which blue differs by app: career-web correctly uses \`primary-500\`, while the other 3 apps default to an un-themed, currently-untokenized \`#30699D\` (see the new \`extended.loader-blue\` color).
- **\`LoaderScreen\`** is the full-page overlay variant: \`neutral-100\`-equivalent backdrop at ~40% opacity, fixed and centered, wrapping the same Loader component at \`xl\` (80px) — not a separate component, just a size-plus-backdrop composition.
- **Rotation duration is \`1s\`, \`linear\`** — deliberately outside this file's \`fast\`/\`base\`/\`slow\` (150/250/500ms) motion scale, since no app overrides Tailwind's default \`spin\` keyframe. Consistent with the \`linear\` easing already reserved for spinners/marquees in \`motion.json\`, just a distinct duration for a distinct, continuous-rotation use case.

### Data Display — new, real but thin evidence

A real label/value display pattern exists in \`EmployeeDetails.vue\` (client-dashboard, 3 real usage sites) — the only clean match found across all 5 apps for a genuinely read-only (not editable, not tabular) field-display pattern. Label and value share the exact same text color (\`neutral-800\`), differentiated only by font-weight — regular for the label, **semibold** for the value, not this file's existing \`paragraph-small-medium\` (Medium/500) token, which is the closest real match but one weight-tier lighter than what's actually shipped. \`data-display-value\` uses \`paragraph-small-medium\` as the nearest existing token rather than inventing a new semibold-14px style for one source file's evidence — revisit if a second real usage of the exact semibold weight surfaces. Rows are separated by margin only (\`32px\`, no divider rule), with an empty-state fallback in \`neutral-500\`.

### Not yet real: List Field, Progress Step, Date Picker, Sticky Alert

Four names from Figma's real component library that a 2026-07-25 real-code audit found little-to-no real implementation for — documented here as genuinely open, not silently skipped or invented around:

- **List Field**: no component literally named this exists. The closest real pattern (dynamic recipient-row repeaters) uses the shared Button component's remove/add controls — its \`radius.sm\` (6px) is directly confirmed in recruitment-portal's own Button.vue, but dashboard-main's equivalent Button drifts to Tailwind's stock \`4px\` instead. This isn't a new token; it's the existing Button radius token, real in one app and drifted in another.
- **Progress Step**: no horizontal step-progress UI exists anywhere — only step-index logic (a ref that swaps which form is visible) with zero visual step indicator. A visually adjacent but functionally different pattern (numbered circular badges for approval-stage chains, no connecting lines) exists in one app but isn't the same component. Don't invent a token for a component that isn't built yet.
- **Date Picker**: two different third-party libraries are wrapped across the 5 apps (\`@vuepic/vue-datepicker\` in 2 apps, \`v-calendar\` in another), but neither has ANY custom theming applied to the calendar surface itself — only the trigger input is styled. This is a real theming gap, not evidence to build a token from; the calendar popup today is 100% library-default styling.
- **Sticky Alert**: distinct from the already-documented Alert Inline (a dismissable inline banner) — no persistent, viewport-anchored banner component exists anywhere in real code. The one fixed-position candidate found is a one-time full-page success splash, not a reusable announcement pattern.

## Do's and Don'ts

These are drawn directly from patterns found across all 5 production apps during the audit that produced this file — each one caused a real, shipped inconsistency. One exception, marked where it appears: an item surfaced by checking this file itself against general product-UI best practice, not the 5-app audit — used only where it identifies a concrete, checkable gap in this file, not as an excuse to import generic advice wholesale.

- **Do** reference a token (\`bg-primary-500\`, \`text-neutral-700\`) for any color, spacing, or radius value. **Don't** hand-type a hex or pixel value that happens to match one — that's exactly how \`destructive-800\` and \`destructive-900\` ended up identical in every app.
- **Do** use the shared spacing scale. **Don't** reach for an arbitrary bracket value (\`px-[0.938rem]\`) when a token already covers that exact pixel amount.
- **Do** register Inter as Tailwind's \`fontFamily.sans\`. **Don't** apply it via a global \`* { font-family: ... !important }\` override — it silently breaks any component that expects \`font-sans\` to resolve correctly.
- **Do** pick one icon theming contract per app (a \`color\` prop or a Tailwind-class prop) and use it consistently. **Don't** mix both within the same icon set, or within the same component.
- **Do** type a component's \`variant\` prop as a string-literal union. **Don't** leave it as a loose \`string\` once more than a couple of variants exist — it's how a 25-variant button with no compile-time safety happens.
- **Do** delete a superseded component version once its replacement has shipped and been verified. **Don't** leave "V1"/"V2" trees or "_Old"/"Legacy" files live in production indefinitely — several apps in this audit still had both.
- **Do** build components however best fits the app. **Don't** skip pulling from the shared token package even when building something fully bespoke — that's the one rule this file exists to support.
- **Do** check a component's real Figma design context before assuming a token's value. **Don't** trust a "reasonable-looking" inferred value once a real one is available — this file's own Badge entry was wrong (guessed \`primary-50\`/\`primary-700\`, real value is \`primary-500\`/white) until Badge itself was actually audited.
- **Do** treat a disagreement between two parts of Figma as a flag for an explicit design decision, not a silent pick — \`heading-h2\`'s Extrabold-vs-Bold conflict sat flagged for exactly that reason until it got one (resolved 2026-07-25: Extrabold, see Typography above). **Don't** move on as if a tiebreaker were the same thing as a resolution.
- **Do** check real class usage across all 5 apps before trusting what a Tailwind config file merely defines. **Don't** assume a color/radius/shadow is load-bearing just because it's configured — every app has ramp steps, breakpoints, and shadow tokens that are 100% dead in practice, and config alone can't tell you that.
- **Do** give icons a token-aware \`color\` prop that maps to this file's color tokens. **Don't** accept that SVG \`fill\`/\`stroke\` attributes "just can't use Tailwind classes" as a reason to hardcode hex — it's the single biggest source of token drift found in this audit (one app hardcodes \`primary-500\`'s hex more often than it uses the actual class).
- **Do** wire this file's radius and font-size scales into each app's actual Tailwind config. **Don't** leave them as documentation-only — none of the 5 apps currently configure a custom \`borderRadius\` or \`fontSize\` at all, which is exactly why arbitrary \`rounded-[10px]\`/\`text-[13px]\`-style values are everywhere.
- **Do** apply a text style as one composite class (\`.text-heading-h2\`). **Don't** hand-pair a size utility with a separate weight utility (\`text-2xl font-medium\`) — the two can be edited independently and drift apart, which is exactly how the \`heading-h2\` Extrabold-vs-Bold conflict happened in the first place.
- **Do** use a ramp's \`-foreground\` token whenever that ramp's 500 tone becomes a solid background. **Don't** assume white text always works — it fails outright on \`secondary\`/\`success\`/\`warning\`/\`neutral\` (all light or bright colors) and only marginally fails on \`destructive\` (3.76:1, just under the 4.5:1 minimum), the kind of near-miss this file's per-ramp contrast check exists to catch.
- **Do** check whether WCAG's inactive-component exception genuinely applies before treating a low-contrast disabled state as a compliance bug. **Don't** conflate "looks low-contrast" with "fails a real requirement" — \`button-primary-disabled\` has zero 1.4.3 obligation since disabled controls are exempt, though bumping it for perceptual clarity anyway (as done here) is still worth doing on its own merits.
- **Do** define every real interactive state for a component — default, hover, focus, active, disabled, loading, error, selected, as applicable. **Don't** stop at whichever states happened to get checked first — flagged 2026-07-25 against general product-UI state-coverage practice, then closed the same day by a real-code audit (not Figma): Button's missing Focus state was a genuine gap (zero real implementation anywhere), now resolved by reusing \`elevation.focus-ring\`; Loading was resolved as "Disabled's appearance plus a spinner," not a fourth color state; Tab's Selected state is now confirmed (\`tab-active\`) — though it surfaced a separate, still-open discrepancy between this file's Figma-sourced \`Line\` style and what real code actually builds (see the Tab section above).
- **Do** pair every real transition/animation with a \`prefers-reduced-motion\` fallback. **Don't** assume it's handled somewhere else in the app just because one app in the suite does it well — career-web handles it consistently across 11 files, but client-web, client-dashboard, recruitment-portal, and dashboard have zero handling between them, a real, current gap found by the 2026-07-25 motion audit, not a hypothetical.
- **Do** treat a matching *value* as a real token-drift signal even when the *class name* looks unrelated. **Don't** assume "it's not hardcoded, it's just a class" is automatically safe — Badge's real Destructive-filled variant uses Tailwind's stock \`bg-red-500\`, not a \`destructive-*\` class; it's only harmless because \`red-500\` and \`destructive-500\` happen to be the exact same hex today, a coincidence this file's audit had to verify, not something the class name itself guaranteed.
- **Do** add \`aria-selected\` (or the equivalent state attribute) to every real Tab implementation. **Don't** assume a working visual active-state means the interaction is accessible — the 2026-07-25 code audit found the selected/active tab is styled correctly and consistently everywhere it's built, but \`aria-selected\` is absent from every real Tab implementation across all 5 apps.
- **Do** treat an old Figma-sourced claim as provisional until real code actually confirms it. **Don't** assume a value survives just because it's already written down here — a single 2026-07-25 audit pass found three separate claims (File Upload's radius, Pagination's and Side Navigation's use of \`neutral-750\`, Side Navigation's badge text style) that were Figma-only and didn't survive contact with real code. Being written into this file once isn't the same as being confirmed; re-check when you touch a component that hasn't had a real-code pass yet.
- **Do** flag a copy-pasted, never-re-themed third-party snippet as a real gap, not a style choice. **Don't** assume every real, repeated pattern is intentional — Form Control Switch's "on" state is \`bg-blue-600\` (Tailwind stock blue) identically across all 4 real copies, but that's a Flowbite snippet that was never wired to \`primary-500\`, not a deliberate decision to use a second blue.
`.trim();

const output = `---\n${yamlStr}---\n\n${body}\n`;

writeFileSync('./DESIGN.md', output);
console.log('Wrote DESIGN.md (' + output.length + ' bytes)');
