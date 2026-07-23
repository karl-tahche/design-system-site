---
version: alpha
name: Tahche
description: Design system for Tahche's internal product suite — 5 Vue 3 + Tailwind apps, moving toward a shared PWA.
colors:
  primary-50: "#F2F3FF"
  primary-100: "#E0E2FF"
  primary-200: "#BCBFF5"
  primary-300: "#8D92EB"
  primary-400: "#555DE0"
  primary-500: "#353DD7"
  primary-600: "#272EB8"
  primary-700: "#1E248F"
  primary-800: "#0C1166"
  primary-900: "#060945"
  primary-foreground: "#FFFFFF"
  secondary-50: "#FFFAEB"
  secondary-100: "#FFF4D1"
  secondary-200: "#FFEBA8"
  secondary-300: "#FFE07A"
  secondary-400: "#FFD857"
  secondary-500: "#FBD249"
  secondary-600: "#E8BF35"
  secondary-700: "#D1A81F"
  secondary-800: "#B58D09"
  secondary-900: "#997500"
  secondary-foreground: "#141414"
  neutral-50: "#F7F9FF"
  neutral-100: "#F5F6FC"
  neutral-200: "#EDEEF2"
  neutral-300: "#DDDEE3"
  neutral-400: "#CCCDD1"
  neutral-500: "#B3B4B8"
  neutral-600: "#737375"
  neutral-700: "#4F4F4F"
  neutral-750: "#3F3F3F"
  neutral-800: "#2E2E2E"
  neutral-900: "#141414"
  neutral-foreground: "#141414"
  success-50: "#F0FDF4"
  success-100: "#DCFCE7"
  success-200: "#BBF7D0"
  success-300: "#86EFAC"
  success-400: "#4ADE80"
  success-500: "#22C55E"
  success-600: "#16A34A"
  success-700: "#15803D"
  success-800: "#166534"
  success-900: "#14532D"
  success-foreground: "#141414"
  warning-50: "#FFFBEB"
  warning-100: "#FEF3C7"
  warning-200: "#FDE68A"
  warning-300: "#FCD34D"
  warning-400: "#FBBF24"
  warning-500: "#F59E0B"
  warning-600: "#D97706"
  warning-700: "#B45309"
  warning-800: "#92400E"
  warning-900: "#78350F"
  warning-foreground: "#141414"
  destructive-50: "#FEF2F2"
  destructive-100: "#FEE2E2"
  destructive-200: "#FECACA"
  destructive-300: "#FCA5A5"
  destructive-400: "#F87171"
  destructive-500: "#EF4444"
  destructive-600: "#DC2626"
  destructive-700: "#B91C1C"
  destructive-800: "#991B1B"
  destructive-900: "#7F1D1D"
  destructive-foreground: "#141414"
  brand-blue: "#2232D7"
  brand-gold: "#FBD24D"
  request-facilities: "#EF9A49"
  request-cashAdvance: "#A954B7"
  request-room: "#EF7D7C"
  request-pettyCash: "#E255AC"
  request-procurement: "#8277BB"
  request-businessTrip: "#6BBFAF"
  request-coe: "#D1A81F"
  extended-muted-blue-gray: "#667085"
  extended-dark-slate: "#101828"
  extended-charcoal: "#2F3537"
  extended-indigo-navy: "#393960"
  primary: "{colors.primary-500}"
  secondary: "{colors.secondary-500}"
  neutral: "{colors.neutral-500}"
  success: "{colors.success-500}"
  warning: "{colors.warning-500}"
  destructive: "{colors.destructive-500}"
typography:
  display-large:
    fontFamily: Inter, Arial, Helvetica, sans-serif
    fontSize: 52px
    fontWeight: 800
    lineHeight: 56px
    letterSpacing: -0.02em
  display-small:
    fontFamily: Inter, Arial, Helvetica, sans-serif
    fontSize: 44px
    fontWeight: 700
    lineHeight: 48px
    letterSpacing: -0.02em
  heading-h1:
    fontFamily: Inter, Arial, Helvetica, sans-serif
    fontSize: 40px
    fontWeight: 800
    lineHeight: 48px
    letterSpacing: -0.02em
  heading-h2:
    fontFamily: Inter, Arial, Helvetica, sans-serif
    fontSize: 36px
    fontWeight: 800
    lineHeight: 44px
    letterSpacing: -0.02em
  heading-h3:
    fontFamily: Inter, Arial, Helvetica, sans-serif
    fontSize: 32px
    fontWeight: 600
    lineHeight: 40px
    letterSpacing: -0.02em
  heading-h4:
    fontFamily: Inter, Arial, Helvetica, sans-serif
    fontSize: 28px
    fontWeight: 500
    lineHeight: 36px
    letterSpacing: -0.02em
  heading-h5:
    fontFamily: Inter, Arial, Helvetica, sans-serif
    fontSize: 24px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: -0.02em
  heading-h6:
    fontFamily: Inter, Arial, Helvetica, sans-serif
    fontSize: 20px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: -0.02em
  paragraph-large-regular:
    fontFamily: Inter, Arial, Helvetica, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  paragraph-large-medium:
    fontFamily: Inter, Arial, Helvetica, sans-serif
    fontSize: 18px
    fontWeight: 500
    lineHeight: 28px
  paragraph-large-semibold:
    fontFamily: Inter, Arial, Helvetica, sans-serif
    fontSize: 18px
    fontWeight: 600
    lineHeight: 28px
  paragraph-medium:
    fontFamily: Inter, Arial, Helvetica, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  paragraph-medium-medium:
    fontFamily: Inter, Arial, Helvetica, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  paragraph-small:
    fontFamily: Inter, Arial, Helvetica, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  paragraph-small-medium:
    fontFamily: Inter, Arial, Helvetica, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  paragraph-xsmall:
    fontFamily: Inter, Arial, Helvetica, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  label-xsmall:
    fontFamily: Inter, Arial, Helvetica, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 15px
  overline:
    fontFamily: Inter, Arial, Helvetica, sans-serif
    fontSize: 12px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 1px
rounded:
  none: 0px
  sm: 6px
  md: 8px
  lg: 10px
  xl: 12px
  2xl: 16px
  3xl: 20px
  full: 9999px
spacing:
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "5": 20px
  "6": 24px
  "7": 28px
  "8": 32px
  "10": 40px
  "12": 48px
  "16": 64px
  "20": 80px
  "24": 96px
  "32": 128px
  "40": 160px
  "48": 192px
motion:
  duration:
    fast: 150ms
    base: 250ms
    slow: 500ms
  easing:
    standard: ease-in-out
    linear: linear
components:
  button-primary:
    backgroundColor: "{colors.primary-500}"
    textColor: "#FFFFFF"
    typography: "{typography.paragraph-medium-medium}"
    rounded: "{rounded.sm}"
    height: 48px
    padding: 12px 20px
  button-primary-hover:
    backgroundColor: "{colors.primary-600}"
  button-primary-pressed:
    backgroundColor: "{colors.primary-600}"
    textColor: "{colors.primary-200}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-400}"
    textColor: "#FFFFFF"
  button-primary-medium:
    height: 40px
    padding: 10px 16px
    typography: "{typography.paragraph-small-medium}"
  button-primary-small:
    height: 28px
    padding: 6px 12px
    typography: "{typography.label-xsmall}"
  button-secondary:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-500}"
    typography: "{typography.paragraph-medium-medium}"
    rounded: "{rounded.sm}"
    height: 48px
    padding: 12px 20px
  button-outlined:
    backgroundColor: transparent
    textColor: "{colors.primary-500}"
    typography: "{typography.paragraph-medium-medium}"
    rounded: "{rounded.sm}"
    height: 48px
    padding: 12px 20px
  button-tertiary:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.neutral-700}"
    typography: "{typography.paragraph-medium-medium}"
    rounded: "{rounded.sm}"
    height: 48px
    padding: 12px 20px
  button-link:
    backgroundColor: transparent
    textColor: "{colors.primary-500}"
    typography: "{typography.paragraph-medium-medium}"
    padding: 12px 0
  badge-filled-primary:
    backgroundColor: "{colors.primary-500}"
    textColor: "#FFFFFF"
    typography: "{typography.paragraph-small-medium}"
    rounded: "{rounded.full}"
    padding: 6px 16px
  badge-filled-success:
    backgroundColor: "{colors.success-500}"
    textColor: "{colors.success-foreground}"
    typography: "{typography.paragraph-small-medium}"
    rounded: "{rounded.full}"
    padding: 6px 16px
  badge-filled-warning:
    backgroundColor: "{colors.warning-500}"
    textColor: "{colors.warning-foreground}"
    typography: "{typography.paragraph-small-medium}"
    rounded: "{rounded.full}"
    padding: 6px 16px
  badge-filled-destructive:
    backgroundColor: "{colors.destructive-500}"
    textColor: "{colors.destructive-foreground}"
    typography: "{typography.paragraph-small-medium}"
    rounded: "{rounded.full}"
    padding: 6px 16px
  badge-filled-neutral:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.neutral-900}"
    typography: "{typography.paragraph-small-medium}"
    rounded: "{rounded.full}"
    padding: 6px 16px
  badge-outlined-primary:
    backgroundColor: transparent
    textColor: "{colors.primary-500}"
    typography: "{typography.paragraph-small-medium}"
    rounded: "{rounded.full}"
    padding: 6px 16px
  badge-outlined-success:
    backgroundColor: transparent
    textColor: "{colors.success-500}"
    typography: "{typography.paragraph-small-medium}"
    rounded: "{rounded.full}"
    padding: 6px 16px
  badge-outlined-destructive:
    backgroundColor: transparent
    textColor: "{colors.destructive-500}"
    typography: "{typography.paragraph-small-medium}"
    rounded: "{rounded.full}"
    padding: 6px 16px
  badge-accent:
    backgroundColor: "{colors.primary-100}"
    textColor: "{colors.primary-700}"
    typography: "{typography.paragraph-small-medium}"
    rounded: "{rounded.full}"
    padding: 6px 16px
  accordion:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.neutral-800}"
    typography: "{typography.paragraph-large-semibold}"
    padding: 26px 16px
  avatar:
    backgroundColor: "{colors.neutral-100}"
    rounded: "{rounded.full}"
    size: 40px
  avatar-initials:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-500}"
  breadcrumb:
    textColor: "{colors.neutral-750}"
    typography: "{typography.paragraph-small}"
  alert-inline-primary:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-800}"
    rounded: "{rounded.sm}"
    padding: 12px 20px
  alert-inline-success:
    backgroundColor: "{colors.success-50}"
    textColor: "{colors.success-800}"
    rounded: "{rounded.sm}"
    padding: 12px 20px
  alert-inline-warning:
    backgroundColor: "{colors.warning-50}"
    textColor: "{colors.warning-800}"
    rounded: "{rounded.sm}"
    padding: 12px 20px
  alert-inline-destructive:
    backgroundColor: "{colors.destructive-50}"
    textColor: "{colors.destructive-800}"
    rounded: "{rounded.sm}"
    padding: 12px 20px
  alert-inline-neutral:
    backgroundColor: "{colors.neutral-50}"
    textColor: "{colors.neutral-800}"
    rounded: "{rounded.sm}"
    padding: 12px 20px
  tab-line:
    textColor: "{colors.neutral-750}"
    typography: "{typography.paragraph-small-medium}"
    padding: 16px
  tab-pill:
    textColor: "{colors.neutral-750}"
    typography: "{typography.paragraph-small-medium}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  tab-active:
    backgroundColor: "{colors.primary-500}"
    textColor: "#FFFFFF"
    typography: "{typography.paragraph-small-medium}"
  table-header:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.neutral-750}"
    typography: "{typography.overline}"
    padding: 12px 24px
  progress-bar-track:
    backgroundColor: "{colors.neutral-100}"
    rounded: "{rounded.full}"
  tooltip:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.md}"
    padding: 16px
  title:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.neutral-900}"
    typography: "{typography.heading-h2}"
    padding: 24px 0
  stat:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: 24px
  input-field-box:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.neutral-900}"
    typography: "{typography.paragraph-small}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  input-field-box-disabled:
    textColor: "{colors.neutral-400}"
  input-field-box-error:
    textColor: "{colors.destructive-500}"
  input-field-line:
    backgroundColor: transparent
    textColor: "{colors.neutral-900}"
    typography: "{typography.paragraph-small}"
    padding: 10px 0
  input-field-line-disabled:
    textColor: "{colors.neutral-400}"
  modal:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: 24px
  modal-horizontal:
    width: 512px
  modal-vertical:
    width: 384px
---

## Overview

Tahche's product suite is a set of internal operational tools — HR, recruitment, client and employee dashboards, asset management — used daily by staff and clients, not a consumer marketing surface. The UI should feel calm, efficient, and trustworthy rather than decorative: dense information handled legibly, clear affordances, no gimmicks. This carries the brand's voice (warm but professional, confident, employee-first, client-focused, action-oriented — see the brand guide) into product terms: helpful and direct, never cold or over-designed.

This file is **generated** from [`tahche-design-tokens`](https://github.com/karl-tahche/tahche-design-tokens) — the token JSON is the actual source of truth (and what Figma's Variables sync against via Tokens Studio). Regenerate this file when tokens change; don't hand-edit the frontmatter.

Component *structure* is deliberately not standardized here. Each of the 5 apps builds its own components in whatever shape suits it — that flexibility is intentional, confirmed with the dev team directly. What this file (and the token package behind it) exists to make consistent is the token layer: color, type, spacing, elevation, shape. A component can be built any way a developer likes, as long as its values come from these tokens rather than a hand-typed hex or pixel value.

Figma is a design reference here, not the final source of truth — the strategy is to find the token set that actually fits this Vue 3 + Tailwind codebase, evolve components in code first, and round-trip proven changes back to Figma afterward. A 2026-07-23 audit grepped real class usage across all 5 apps (not just what's in `tailwind.config.js`) specifically to check this file's tokens against what's genuinely load-bearing versus what only exists in Figma or config. Findings from that pass are noted inline below wherever they changed or reinforced something.

## Colors

Two tiers, deliberately kept separate:

- **Product colors** (`primary`, `secondary`, `neutral`, `success`, `warning`, `destructive`) — for UI. `primary` is `#353DD7`, the value already live across all 5 apps; kept as-is rather than migrated, since re-theming five production apps for a color that was only ever a brand-guide value, never a shipped one, wasn't worth the churn.
- **Brand colors** (`brand-blue` `#2232D7`, `brand-gold` `#FBD24D`) — for marketing/document contexts only (matches the brand guide exactly). Do not use these in product UI; that's what `primary`/`secondary` are for, even though they're visually close.

Each semantic ramp (`success`/`warning`/`destructive`) runs 50→900 and should only be used for state communication — a destructive action, a warning banner, a success toast — never as a decorative accent. Within any ramp: 50/100 for tinted backgrounds and hover fills, 500 for the primary interactive tone, 700–900 for high-contrast text or dark-surface contexts.

**`neutral-750` (`#3F3F3F`) is new** — not a Figma foundation-page color, but a real, heavily-used gray discovered by auditing live components directly. It's the actual secondary/body text color in Breadcrumb, Tab, Table Header, Table Content Cell, Pagination, Side Nav Item, Tooltip, Button Group, Button Tertiary, and Accordion — used in more places than `neutral-700` itself, despite never having been documented anywhere before this.

**Two new categories, promoted from a real-usage audit of all 5 codebases, not from Figma:**

- **`request`** (facilities/cashAdvance/room/pettyCash/procurement/businessTrip/coe) — real, needed design vocabulary for request-type status badges, previously defined identically in 4 of 5 apps' Tailwind configs but wired inconsistently: one app uses it correctly via real classes, two need the exact same colors but hardcode the hex instead, and one never needs it in practice. Promoted here so the class-based path becomes the actual path of least resistance instead of copy-pasting hex.
- **`extended`** (muted-blue-gray, dark-slate, charcoal, indigo-navy) — ratified 2026-07-25. Four hardcoded hex values that recur across 3+ of the 5 apps at real volume (6–60 instances each) serving a genuine, currently-untokenized need, mostly muted icon/chrome colors — none close enough to an existing `neutral` step to substitute without a visible shift, so each is kept as its own named tier rather than folded in.

**A structural gap, not just a discipline problem**: every app hardcodes token-matching hex values — most heavily `primary-500`, which in one app (client-web) is hardcoded *more often* (157×) than the actual Tailwind class is used (117×). Almost all of this "ghost usage" is inside inline SVG icon `fill`/`stroke` attributes, which can't take Tailwind classes directly. The fix is a token-aware icon component (a `color` prop that maps to the token set), not a reminder to "just use the class."

**Every semantic ramp now has a `{ramp}-foreground` pair** (`primary-foreground`, `secondary-foreground`, etc.) — following shadcn-vue's foreground-pairing convention: the guaranteed-accessible text color for when that ramp's 500 tone is used as a solid background (a filled button, a solid badge). Each was verified with real WCAG contrast math, not assumed:

| Ramp | Foreground | Contrast on {ramp}-500 |
|---|---|---|
| `primary` | white | 7.50:1 ✅ |
| `secondary` | neutral-900 | 12.65:1 ✅ (white fails at 1.46:1 — gold is too bright for white text) |
| `neutral` | neutral-900 | 8.89:1 ✅ (white fails at 2.07:1) |
| `success` | neutral-900 | 8.08:1 ✅ (white fails at 2.28:1) |
| `warning` | neutral-900 | 8.58:1 ✅ (white fails at 2.15:1) |
| `destructive` | neutral-900 | 4.90:1 ✅ |

**⚠️ That last row surfaced a second, independent contrast finding — now resolved as a decision, with a follow-up action item, not left open**: white on `destructive-500` measures 3.76:1 — it clears the 3:1 large/bold-text AA exception but fails the 4.5:1 normal-text minimum that applies to typical 14–16px Medium-weight button labels. Unlike `button-primary-disabled` (see Button below), which turns out to be WCAG-*exempt* rather than a real failure, this ramp's 500 tone is used on *active* components, where 1.4.3 genuinely applies — so `destructive-foreground` stays `neutral-900`, the fully-compliant choice, confirmed 2026-07-23. **Action item, not yet done**: audit Button/Badge's Destructive-filled variants across all 5 apps — white text is almost certainly what's actually shipped today, matching the white-text convention used everywhere else, and needs migrating to `neutral-900` wherever found.

## Typography

**Inter** is the typeface actually rendering across all 5 apps today — but historically it was applied only via a global CSS override (`* { font-family: Inter !important }`), never registered in Tailwind's own `fontFamily` config. That's fixed at the token level here: `typography.fontFamily` resolves to Inter with system fallbacks, and should be wired as Tailwind's `fontFamily.sans`, not a separate custom key.

The type scale below covers display sizes down to overline. Confirmed weights, sourced from either bound Figma variables or live design-context pulls against real components: `heading-h2` (Extrabold/800), `heading-h3` (Semibold/600, via Stat), `heading-h4` (Medium/500), `paragraph-large` (Regular/400, Medium/500, and Semibold/600 via Accordion), `paragraph-medium` (Medium/500, via Button), `paragraph-small` (Regular/400 and Medium/500, via Input Field and Button), `paragraph-xsmall` (Regular/400, via Tooltip — note its line-height is 16px, not the more common 20px), `label-xsmall` (Medium/500, a distinct 12/15 style used for small badges), and `overline` (Semibold/600, uppercase, 1px tracking, via Table Header). Every other weight is a proposed default — check `build/tailwind/font-weights.json` in the tokens repo for the live confirmed/proposed status before treating one as final.

**`heading-h2`'s Figma conflict is now resolved, 2026-07-25**: the Typography foundation page's own named Figma variable said Extrabold (800), while the Title component's live design context rendered the same 36/44 size as Bold (700) instead. Ratified: Extrabold (800), the foundation page's stated value — the Title component's Bold rendering is the thing that drifted and needs correcting in Figma/components, not this token. `display-large` (52px), previously an unconfirmed Bold/700 guess with zero confirmed instances anywhere in this file, was bumped to match at Extrabold (800) too, for the same reason — matching its now-resolved neighbors `heading-h1`/`heading-h2` rather than carrying a separate, never-proven weight tier.

**Every style is now emitted as a composite `.text-{name}` Tailwind class** (`.text-heading-h2`, `.text-paragraph-small`, etc.), bundling font-size, line-height, letter-spacing, and font-weight into one class, shipped via a plugin in the Tailwind preset — see `build.mjs` in the tokens repo. This is the fix for the `heading-h2`-style conflict above and for Figma-vs-code weight mismatches generally: Tailwind's own `fontSize` theme key can't carry font-weight, so a text style built from two separately-applied utilities (`text-2xl` + `font-medium`) can drift apart the moment either one changes independently. One class removes that failure mode.

**Two consolidations applied from real usage, following the same logic as the tokens themselves** (prefer the value with the most evidence): `heading-h5`/`heading-h6` moved from an unconfirmed Semibold(600) guess to Medium(500) — Medium is confirmed 5/5 times everywhere else it appears in this scale, the strongest evidence of any weight tier, versus Semibold's weaker 3/5. And `display-small` (44px) is **deprecated** in favor of `heading-h1` (40px): it was the weakest size in the entire scale (dead in 3 of 5 apps, a single low-volume use in the other 2) sitting close enough to the solidly-used `heading-h1` that the distinction looks accidental, not intentional. Its `.text-display-small` class still exists — rendering identically to `.text-heading-h1` via an explicit alias — so nothing already pointing at it breaks, but new work should reference `heading-h1` directly.

**13px is a real gap this scale doesn't cover, resolved rather than left open**: it recurs 116+ times across 3 of the 5 apps, sitting right between `paragraph-xsmall` (12px) and `paragraph-small` (14px). Not formalized as its own token — it's almost certainly Figma/rem-rounding drift (`0.8125rem` is an unusually precise, non-round value for a deliberate design choice), not an intentional size. Recommended fix at the code level: snap any `text-[13px]` usage to `paragraph-small` (14px), the single most dominant body size in every app, rather than manufacturing a permanent token to match an accident.

## Layout

The spacing scale (4px→192px) matches Tailwind's own default scale exactly at every step — adopting it requires no Tailwind config changes, only the discipline to stop reaching for arbitrary bracket values (`px-[0.938rem]`, `w-[6.25rem]`) that show up throughout all 5 codebases today.

**Breakpoints are ratified (2026-07-25), not just proposed.** Every app currently carries three parallel, conflicting breakpoint definitions (custom Tailwind `screens`, SCSS `$breakpoint-*` variables, and CSS custom properties) — but a 2026-07-23 audit found that regardless of what's configured, every single app already overwhelmingly uses standard Tailwind `sm/md/lg/xl/2xl` in real markup (217 to 2,844 instances per app), while the custom scheme sees only 0-46 instances per app, almost entirely confined to legacy Auth screens. Consolidating onto the standard scale isn't a risky migration into unfamiliar territory — it's formalizing what's already the dominant pattern in every codebase. `tablet:768` already equals `md:768`, so nothing is lost; the remaining work (updating the small number of legacy Auth-screen classes, wiring this scale into each app's actual Tailwind config) is mechanical, not a design question anymore.

## Elevation & Depth

A 6-step shadow scale, already identical across Figma and all 5 apps (a rare case with no conflict to resolve) — built on a single neutral shadow color (`rgba(16,24,40,*)`) at increasing offset/blur/spread. Use `xsmall` for subtle separation between adjacent surfaces (a card against its page background), `small`/`medium` for dropdowns and popovers, `large`/`xlarge` for modals and sheets, and reserve `xxlarge` for the single heaviest overlay in a given view. `xsmall` (Input Field, Button Group), `small` (Stat), `large` (Tooltip), and `xlarge` (Modal) are all now confirmed via named Figma variables on real components — only `medium` and `xxlarge` remain unconfirmed against a live component, and a real-usage audit found `xxlarge` dead as a class in every one of the 5 apps.

A 7th token, `focus-ring`, is now `rgba(53, 61, 215, 0.12)` at 3px with no blur — **replaced 2026-07-25**, real code over Figma: the previous value (`#E1E1FE`, a 4px solid ring, originally Figma-sourced) turned out to have zero real usage anywhere across all 5 apps, while this translucent primary-500 ring is a real, repeated, consistent implementation across 2 live apps (recruitment-portal: 4 files; client-web: 3 identical instances sharing the same Jobs feature) plus a near-variant in career-web using a different color at the same shape. Per this repo's own strategy, the never-shipped Figma value lost to the real one. Not every focused input gets a ring at all, either — a plain border-color-only focus swap, no shadow, is actually the single most-repeated focus treatment by file count (recruitment-portal's whole shared Form component library, 14 files) — a valid lighter-weight alternative, not a competing definition to reconcile.

**Every app also reaches for Tailwind's stock shadow classes (`shadow-sm/md/lg/xl/2xl`) alongside this named scale** — in some apps more than the named tokens are used at all. A CI lint blocking the stock classes in favor of these named ones would close a real, consistently observed gap.

**Motion is ratified too, as of 2026-07-25**, from the same kind of real-usage audit as everything else in this file — this time run against all 5 apps' actual CSS transitions rather than Figma, since motion has no Figma source at all. No app uses an animation library: no GSAP, Framer Motion, Lenis, or `@vueuse/motion` anywhere. `motion.duration` is a 3-step scale (`fast` 150ms, `base` 250ms, `slow` 500ms) — each value independently lands as a top-3 real value in all 5 codebases, despite the apps sharing no code. `motion.easing.standard` is `ease-in-out`: the real data splits roughly 3-to-2 across apps between plain `ease` and `ease-in-out` as each app's own top pick, so this was settled by explicit decision, not vote count. `motion.easing.linear` is reserved for continuous/looping motion only (spinners, marquees) — confirmed as a distinct, consistent real pattern, never used as a general transition easing anywhere in the data. **⚠️ A real, severe accessibility gap surfaced by the same audit**: `prefers-reduced-motion` is handled in only 1 of the 5 apps (career-web, 11 files) — client-web, client-dashboard, recruitment-portal, and dashboard have zero handling whatsoever. This is the motion equivalent of the contrast findings elsewhere in this file: a real, current, cross-app gap, not a token to define but a fix every app needs to ship.

## Shapes

`sm` (6px) and `md` (8px) are now confirmed directly against real components — `sm` on Button, Input Field, Modal, File Upload, Tab/Pill, and Side Nav Item; `md` on Button Group, Stat, and Tooltip. `full` is confirmed via Avatar, Badge, and Form Control Switch.

**⚠️ None of the 5 apps' Tailwind configs actually define a custom `borderRadius` at all** — this whole scale exists only in Figma and this tokens repo today. Every app relies on Tailwind's stock radius values (which don't match this scale at `sm`/`md`/`lg`) plus hand-rolled arbitrary `rounded-[Npx]` values to compensate — most heavily at `10px` (100+ combined instances across 4 apps, confirming `lg`) and, newly, at `20px` (80+ combined instances across 4 apps) — real, consistent enough evidence to add a **new `3xl` (20px) step** to this scale, on top of what Figma alone had shown. `14px` shows up too (strongest in client-web) with weaker, less consistent evidence — **resolved 2026-07-25**: snap to `2xl` (16px) rather than adding a 7th step, since client-web's own independent need for the larger `3xl` (20px) suggests that app trends toward more generous rounding overall. Wiring this scale into each app's actual Tailwind config is a Phase 3 prerequisite, not just documentation.

## Components

Not an exhaustive catalog — a shared vocabulary. Figma's real component library (audited directly) already documents a working set: Accordion, Avatar, Badge, Breadcrumb, Button, Button Group, Data Display, Date Picker, File Upload, Form Control, Inline Alert, Sticky Alert, Input Field, List Field, Loader, Modal, Pagination, Progress Bar, Progress Step, Side Navigation, Stat, Tab, Table, Title, and Tooltip. Those names are the shared vocabulary for what a "Button" or "Badge" means across the org, even though each app is free to implement its own.

The composite tokens in this file's frontmatter (`button-*`, `badge-filled-*`, `badge-outlined-*`, `badge-accent`, `input-field-*`, `modal-*`, `accordion`, `avatar`, `breadcrumb`, `alert-inline-*`, `tab-line`, `tab-pill`, `tab-active`, `table-header`, `progress-bar-track`, `tooltip`, `title`, `stat`) are reference points for the primitives every app already reimplements independently — not a mandate to build a shared component package. Use them as a starting shape; diverge where a specific app's needs require it, as long as the underlying color/type/spacing/radius tokens are still the ones referenced above.

### Button — confirmed directly from Figma

Unlike the other components below, Button's tokens are pulled from live Figma design context (the actual selected component, not an inference) — checked against the full Size × Type × State matrix, not just one variant:

- **Radius is `6px` (`rounded.sm`) on every Button variant**, all 3 sizes, all 5 types (Primary/Secondary/Outlined/Tertiary/Link) — the first real confirmation for the `rounded` scale, which otherwise has no Figma source (see Shapes above).
- **Size drives height and padding**, consistently across every type: Large is `48px` height / `12px 20px` padding, Medium is `40px` / `10px 16px`, Small is `28px` / `6px 12px`. Icon size scales with it too: `20px` at Large/Medium, `16px` at Small.
- **State changes color only, never size**: Primary's Default (`primary-500` bg, white text) → Hover (`primary-600` bg) → Pressed (also `primary-600` bg, but text shifts to `primary-200` — a real, distinct state, not a duplicate of Hover) → Disabled (`primary-400` bg, white text — bumped up from Figma's literal `primary-300`, see below).
- **Disabled's Figma value is not actually a WCAG failure — it's exempt, and the earlier framing here overstated it**: white text on `primary-300` (`#8D92EB`) measures 2.82:1, below the 4.5:1 AA minimum, but WCAG 1.4.3 (Contrast Minimum) has a normative exception for text belonging to an *inactive* UI component — a disabled control has no contrast obligation at all, regardless of size or weight. Bumped anyway, 2026-07-25, purely for perceptual clarity (so "disabled" reads as legible-but-muted rather than washed-out), not compliance: `primary-400` (`#555DE0`) lands at 5.21:1, comfortably AA-passing as a side effect, not the goal. A deliberate, documented departure from Figma's literal value rather than a silent "fix."
- **Focus is a real, confirmed gap, not documentation lag**: a 2026-07-25 code audit found zero focus-visible styling anywhere on any of the 5 apps' shared Button components (0 matches for `focus`/`focus-visible`/`focus:ring` across all 6 real Button.vue files). The only `focus:ring-*` usage anywhere in the suite is on an unrelated notification-dismiss icon button. Recommendation: apply `elevation.focus-ring` (the same ring now used on Input Field) to Button's focus state going forward — reusing the just-reconciled real ring rather than inventing a second one.
- **Loading reuses Disabled's appearance, plus a spinner — it's not a fourth distinct color state**: real code across 4 of the 5 apps composes loading externally (consumer passes `:disabled="isLoading"` to Button, then renders a separate `Loader`/spinner alongside the label — label stays visible, no dimming or resizing). Only career-web's Button has a built-in `loading` prop doing the same thing internally (spinner + label both shown, `disabled` set). Recommendation: codify the real cross-app visual (spinner beside label, Disabled's color state, nothing dims or resizes) as canonical, and promote career-web's single-prop shape as the target API — not the 4-app pattern of every consumer wiring up its own external spinner.
- **Outlined and Tertiary both have a border** (`primary-500` and `neutral-200` respectively) that isn't representable in the frontmatter — checked 2026-07-25: `component_sub_tokens` (`backgroundColor`/`textColor`/`typography`/`rounded`/`padding`/`size`/`height`/`width`) is fixed by the `@google/design.md` spec itself, not something this repo's generator controls, and adding an unrecognized field (tested directly against the real lint CLI) produces a permanent "not a recognized component sub-token" warning on every future lint run rather than a clean pass. This is a durable spec limitation, not an unfinished gap in this file — border specs are correct and complete here in prose, just not machine-readable from the YAML. If you're implementing these types, add the border yourself from the values stated here.
- **Link has no background, border, or horizontal padding** — text and icons only, vertical padding matching the other types at its size.
- The lint warnings on `button-outlined`/`button-link`/`input-field-line`/`badge-outlined-*` about low contrast against a "transparent" background are a known linter limitation (it can't evaluate contrast with nothing behind it) — all of these sit on a white page in practice, where their text colors pass comfortably (confirmed by `button-secondary`'s identical primary-500 text passing against its primary-50 background, and neutral-900 being the standard body-text color used everywhere else in this file against white).

### Input Field — confirmed directly from Figma

Two visual styles, `Box` (bordered) and `Line` (bottom-border only), each across Default/Focused/Typing/Active/Disabled/Destructive states:

- **Both styles share the same type ramp**: label is `paragraph-small-medium` (14/20, Medium), value/placeholder/helper text is `paragraph-small` (14/20, Regular) — both now confirmed twice over (once via Button, once here).
- **`Box`**: white background, `6px` radius (`rounded.sm` — a third confirmation), `8px 12px` padding, 1px border that changes color by state (`neutral-200` default/active/disabled, `primary-300` focused/typing, `destructive-300` error) — border color isn't representable in the frontmatter, the same permanent spec limitation as Button's Outlined/Tertiary (see Button above). Carries the `elevation.xsmall` shadow at rest, which is **removed entirely when disabled**.
- **A focused or typing `Box` gets a focus ring** (`elevation.focus-ring`, now `rgba(53, 61, 215, 0.12)` at 3px — see Elevation & Depth above for why this replaced the original Figma-sourced value).
- **`Line` never gets that ring** — focus only changes its bottom-border color, same state-to-color mapping as `Box`. This is a real, deliberate difference between the two styles, not an inconsistency to fix.
- **Destructive state**: border shifts to `destructive-300`, and helper text shifts to `destructive-500` — the one part of the error state representable in the `components` schema (`input-field-box-error`).

### Modal — confirmed directly from Figma

- Shared across both alignment variants: white background, `6px` radius (`rounded.sm` — a third component now confirming this token, alongside Button and Input Field), `24px` padding all around, and the `elevation.xlarge` shadow — independently confirmed twice, once from a named Figma variable and once from this live design context pull.
- **Fixed width per alignment, not a token — a real content-driven size**: `modal-horizontal` is `512px`, `modal-vertical` is `384px`. `32px` gap separates the content block from the actions row.
- **Heading** uses `paragraph-large-medium` (18/28, Medium — now confirmed twice), **description** uses `paragraph-small` (14/20, Regular — now confirmed three times over across Button, Input, and Modal).
- A circular leading icon container (`primary-50` background, `48px`, fully rounded) is optional, as is the description and the top-right close icon.
- **Vertical modal's button-padding mismatch is resolved, 2026-07-25**: its action buttons combined Large button padding (`20px 12px`) with a hardcoded `40px` height — Medium's height paired with Large's padding, mixed together. Ratified fix: snap to Medium consistently (`40px` height / `10px 16px` padding, matching `button-primary-medium` exactly), since the height was already Medium's and Horizontal's buttons don't have this issue in the first place (Medium padding, Medium implied height) — Horizontal is the internally-consistent baseline, Vertical's padding is what needs correcting to match it, not the other way around.

### Badge — corrected from an earlier wrong guess, now with its full range confirmed by real code

The Large/Primary/Filled/Default variant is `primary-500` background with **white** text — not the `primary-50`/`primary-700` light-tint pairing this file guessed at in an earlier pass, before Badge itself had been audited directly. Padding is `6px 16px`, radius is fully rounded (`24px` on a `32px`-tall pill — deliberately over-rounded rather than exactly half the height), and the label uses `paragraph-small-medium`.

**The full type/variant range is now filled in, 2026-07-25, from a real-code audit** of a shared `Badge.vue` found byte-identical across 4 of the 5 apps (career-web has no Badge at all):
- **Filled Success/Warning** use their named ramps directly (`success-500`/`warning-500`, white text) — real and confirmed.
- **Filled Destructive** is real too, but its actual class in code is Tailwind's stock `bg-red-500`, not a `destructive-*` class — the same "ghost usage" pattern already documented for `primary-500`'s hardcoded hex elsewhere in this file, just via an unnamed stock class instead of a raw hex. Harmless here only because `red-500` (`#EF4444`) and `destructive-500` happen to be the exact same value — a coincidence, not a guarantee.
- **Filled Neutral** has no true solid-fill equivalent in real code. The closest real pattern, `.badge-light` (`neutral-100` background, `neutral-900` text), used for "Inactive"/draft states, is what `badge-filled-neutral` is modeled on.
- **Outlined** is real and load-bearing (`CandidatesByJob.vue`, `TicketsReport.vue`) for Primary, Success, and Destructive — a consistent `border-200`/`text-500` pattern per ramp. Warning and Neutral have **no real outlined styling anywhere** — not extrapolated here rather than guessed.
- **Accent** has no consistent real implementation — the closest real thing (`.badge-light-blue`) is inconsistently named with no success/warning/destructive equivalent anywhere in real markup. `badge-accent` is modeled instead on shadcn-vue's `secondary` badge convention (tinted `*-100` background, darker `*-700` text) — the fallback this repo uses when real evidence is too thin to extrapolate from directly.

### Accordion, Avatar, Breadcrumb — confirmed directly from Figma

- **Accordion**: white background, border-bottom only (`neutral-200`), an unusual asymmetric padding (`26px` vertical, `16px` horizontal — real, not a typo), `16px` gap. Title uses the newly-confirmed `paragraph-large-semibold` (neutral-800); description uses `paragraph-small` (`neutral-750`).
- **Avatar**: fully circular at every size (24px–128px), with a 1.5px white border for stacking (see Avatar Group's overlapping `-12px` negative margin). The Initials variant is `primary-50` background with `primary-500` text and `paragraph-medium-medium` — the same light-tint pairing seen on Secondary buttons and Alert Inline.
- **Breadcrumb**: `paragraph-small` in `neutral-750` for each crumb, with a `neutral-300` slash separator between them.

### Alert Inline, Tab, Table

- **Alert Inline** (originally Figma-confirmed for Primary only; the other 3 types confirmed 2026-07-25 by real code): `primary-50` background, `primary-200` border, title in `primary-800`, description in `primary-700` — a "bg-50 / border-200 / text-800(title)/text-700(body)" pattern. A real-code audit of `SnackBar.vue` (byte-identical across 4 of 5 apps) confirmed this same offset pattern holds for Success, Warning, and Destructive too — real, repeated, consistent evidence, not an assumption. **Neutral is the one exception**: the real "information" type in code is a fallback onto the Success ramp entirely (same bg/border/text classes, only the icon color differs) rather than a genuine neutral treatment — `alert-inline-neutral` in this file's frontmatter is therefore extrapolated onto the neutral ramp using the same confirmed offset logic, not copied from what's actually shipped, since nothing real exists to copy for that one case.
- **Tab**: real code (a shared `Tabs.vue` in 4 of 5 apps — career-web has no Tab component) shows the selected/active tab as a solid `primary-500` background with white text, swapping from inactive's `neutral-750` text at `paragraph-small-medium` — no border or underline anywhere. **⚠️ A real, unresolved discrepancy, not silently picked**: this file's `Line` style was originally documented (from Figma) as bottom-border-only, `56px` tall — but the 2026-07-25 code audit found zero evidence of any bottom-border/underline Tab treatment anywhere in real code; every real implementation uses the same solid-fill swap regardless of which named style it's meant to be. Either the bottom-border `Line` style genuinely isn't built anywhere yet (a real Figma-vs-code gap, not a conflict to resolve away), or it lives in a component these audits didn't find. `tab-active` in the frontmatter captures the one pattern that IS confirmed; the `Line`/`Pill` distinction stays as originally documented pending an actual look at whether `Line` exists anywhere. Also flagged: `aria-selected` is absent from every real Tab implementation — a real accessibility gap, not a token question (see Do's and Don'ts).
- **Table**: the Header cell uses the `overline` style (uppercase, `neutral-750`) that this same audit corrected. Leading and Content cells both run `72px` tall with `24px`/`16px` padding, and Content Cell's oddly-named `State4` variant turns out to be a fully populated row (avatars, badge, progress bar, rating, actions) — not a distinct visual state, just an unclear internal name worth renaming.

### Progress Bar, Tooltip, Title, Stat — confirmed directly from Figma

- **Progress Bar** is built from individual 1-unit-wide `.Progress Bar / Block` segments in a flex row on a `neutral-100` fully-rounded track, not a single scaling fill — filled segments are `primary-500`, unfilled ones render as a separate gray asset. Three sizes (Large/Medium/Small: `88px`/`80px`/`72px` tall) each carry a `paragraph-medium-medium` label and `paragraph-small` caption.
- **Tooltip**: white background, `rounded.md`, `16px` padding, the confirmed `elevation.large` shadow, title in `paragraph-xsmall-medium`-shaped text (12/15, matching `label-xsmall`) and description in the newly-corrected `paragraph-xsmall` (12/16, `neutral-750`).
- **Title**: the page-heading component, not a token — `heading-h2` for the title text (inheriting that token's H2 weight conflict directly), `paragraph-small` overline/description in `neutral-500`, a circular `primary-50` icon container, and an optional action pair (Secondary + Primary button, Medium size).
- **Stat**: white background, `rounded.md`, `24px` padding, the confirmed `elevation.small` shadow. The big number uses `heading-h3` (the style this audit corrected to Semibold/600), with an optional `success-50`/`success-500` percentage badge — the same bg-50/text-500 semantic pairing used elsewhere, now confirmed for the Success ramp specifically, not just Primary.

## Do's and Don'ts

These are drawn directly from patterns found across all 5 production apps during the audit that produced this file — each one caused a real, shipped inconsistency. One exception, marked where it appears: an item surfaced by checking this file itself against general product-UI best practice, not the 5-app audit — used only where it identifies a concrete, checkable gap in this file, not as an excuse to import generic advice wholesale.

- **Do** reference a token (`bg-primary-500`, `text-neutral-700`) for any color, spacing, or radius value. **Don't** hand-type a hex or pixel value that happens to match one — that's exactly how `destructive-800` and `destructive-900` ended up identical in every app.
- **Do** use the shared spacing scale. **Don't** reach for an arbitrary bracket value (`px-[0.938rem]`) when a token already covers that exact pixel amount.
- **Do** register Inter as Tailwind's `fontFamily.sans`. **Don't** apply it via a global `* { font-family: ... !important }` override — it silently breaks any component that expects `font-sans` to resolve correctly.
- **Do** pick one icon theming contract per app (a `color` prop or a Tailwind-class prop) and use it consistently. **Don't** mix both within the same icon set, or within the same component.
- **Do** type a component's `variant` prop as a string-literal union. **Don't** leave it as a loose `string` once more than a couple of variants exist — it's how a 25-variant button with no compile-time safety happens.
- **Do** delete a superseded component version once its replacement has shipped and been verified. **Don't** leave "V1"/"V2" trees or "_Old"/"Legacy" files live in production indefinitely — several apps in this audit still had both.
- **Do** build components however best fits the app. **Don't** skip pulling from the shared token package even when building something fully bespoke — that's the one rule this file exists to support.
- **Do** check a component's real Figma design context before assuming a token's value. **Don't** trust a "reasonable-looking" inferred value once a real one is available — this file's own Badge entry was wrong (guessed `primary-50`/`primary-700`, real value is `primary-500`/white) until Badge itself was actually audited.
- **Do** treat a disagreement between two parts of Figma as a flag for an explicit design decision, not a silent pick — `heading-h2`'s Extrabold-vs-Bold conflict sat flagged for exactly that reason until it got one (resolved 2026-07-25: Extrabold, see Typography above). **Don't** move on as if a tiebreaker were the same thing as a resolution.
- **Do** check real class usage across all 5 apps before trusting what a Tailwind config file merely defines. **Don't** assume a color/radius/shadow is load-bearing just because it's configured — every app has ramp steps, breakpoints, and shadow tokens that are 100% dead in practice, and config alone can't tell you that.
- **Do** give icons a token-aware `color` prop that maps to this file's color tokens. **Don't** accept that SVG `fill`/`stroke` attributes "just can't use Tailwind classes" as a reason to hardcode hex — it's the single biggest source of token drift found in this audit (one app hardcodes `primary-500`'s hex more often than it uses the actual class).
- **Do** wire this file's radius and font-size scales into each app's actual Tailwind config. **Don't** leave them as documentation-only — none of the 5 apps currently configure a custom `borderRadius` or `fontSize` at all, which is exactly why arbitrary `rounded-[10px]`/`text-[13px]`-style values are everywhere.
- **Do** apply a text style as one composite class (`.text-heading-h2`). **Don't** hand-pair a size utility with a separate weight utility (`text-2xl font-medium`) — the two can be edited independently and drift apart, which is exactly how the `heading-h2` Extrabold-vs-Bold conflict happened in the first place.
- **Do** use a ramp's `-foreground` token whenever that ramp's 500 tone becomes a solid background. **Don't** assume white text always works — it fails outright on `secondary`/`success`/`warning`/`neutral` (all light or bright colors) and only marginally fails on `destructive` (3.76:1, just under the 4.5:1 minimum), the kind of near-miss this file's per-ramp contrast check exists to catch.
- **Do** check whether WCAG's inactive-component exception genuinely applies before treating a low-contrast disabled state as a compliance bug. **Don't** conflate "looks low-contrast" with "fails a real requirement" — `button-primary-disabled` has zero 1.4.3 obligation since disabled controls are exempt, though bumping it for perceptual clarity anyway (as done here) is still worth doing on its own merits.
- **Do** define every real interactive state for a component — default, hover, focus, active, disabled, loading, error, selected, as applicable. **Don't** stop at whichever states happened to get checked first — flagged 2026-07-25 against general product-UI state-coverage practice, then closed the same day by a real-code audit (not Figma): Button's missing Focus state was a genuine gap (zero real implementation anywhere), now resolved by reusing `elevation.focus-ring`; Loading was resolved as "Disabled's appearance plus a spinner," not a fourth color state; Tab's Selected state is now confirmed (`tab-active`) — though it surfaced a separate, still-open discrepancy between this file's Figma-sourced `Line` style and what real code actually builds (see the Tab section above).
- **Do** pair every real transition/animation with a `prefers-reduced-motion` fallback. **Don't** assume it's handled somewhere else in the app just because one app in the suite does it well — career-web handles it consistently across 11 files, but client-web, client-dashboard, recruitment-portal, and dashboard have zero handling between them, a real, current gap found by the 2026-07-25 motion audit, not a hypothetical.
- **Do** treat a matching *value* as a real token-drift signal even when the *class name* looks unrelated. **Don't** assume "it's not hardcoded, it's just a class" is automatically safe — Badge's real Destructive-filled variant uses Tailwind's stock `bg-red-500`, not a `destructive-*` class; it's only harmless because `red-500` and `destructive-500` happen to be the exact same hex today, a coincidence this file's audit had to verify, not something the class name itself guaranteed.
- **Do** add `aria-selected` (or the equivalent state attribute) to every real Tab implementation. **Don't** assume a working visual active-state means the interaction is accessible — the 2026-07-25 code audit found the selected/active tab is styled correctly and consistently everywhere it's built, but `aria-selected` is absent from every real Tab implementation across all 5 apps.
