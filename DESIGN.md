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
  neutral-50: "#F7F9FF"
  neutral-100: "#F5F6FC"
  neutral-200: "#EDEEF2"
  neutral-300: "#DDDEE3"
  neutral-400: "#CCCDD1"
  neutral-500: "#B3B4B8"
  neutral-600: "#737375"
  neutral-700: "#4F4F4F"
  neutral-800: "#2E2E2E"
  neutral-900: "#141414"
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
  brand-blue: "#2232D7"
  brand-gold: "#FBD24D"
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
    fontWeight: 700
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
    fontWeight: 700
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
    fontWeight: 600
    lineHeight: 32px
    letterSpacing: -0.02em
  heading-h6:
    fontFamily: Inter, Arial, Helvetica, sans-serif
    fontSize: 20px
    fontWeight: 600
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
    lineHeight: 20px
  label-xsmall:
    fontFamily: Inter, Arial, Helvetica, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 15px
  overline:
    fontFamily: Inter, Arial, Helvetica, sans-serif
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  none: 0px
  sm: 6px
  md: 8px
  lg: 10px
  xl: 12px
  2xl: 16px
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
    backgroundColor: "{colors.primary-300}"
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
  badge:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-700}"
    typography: "{typography.paragraph-xsmall}"
    rounded: "{rounded.full}"
    padding: 2px 8px
  input-field:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.neutral-900}"
    typography: "{typography.paragraph-medium}"
    rounded: "{rounded.md}"
    height: 40px
    padding: 0 12px
  input-field-error:
    textColor: "{colors.destructive-500}"
  modal:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.xl}"
    padding: 24px
---

## Overview

Tahche's product suite is a set of internal operational tools — HR, recruitment, client and employee dashboards, asset management — used daily by staff and clients, not a consumer marketing surface. The UI should feel calm, efficient, and trustworthy rather than decorative: dense information handled legibly, clear affordances, no gimmicks. This carries the brand's voice (warm but professional, confident, employee-first, client-focused, action-oriented — see the brand guide) into product terms: helpful and direct, never cold or over-designed.

This file is **generated** from [`tahche-design-tokens`](https://github.com/karl-tahche/tahche-design-tokens) — the token JSON is the actual source of truth (and what Figma's Variables sync against via Tokens Studio). Regenerate this file when tokens change; don't hand-edit the frontmatter.

Component *structure* is deliberately not standardized here. Each of the 5 apps builds its own components in whatever shape suits it — that flexibility is intentional, confirmed with the dev team directly. What this file (and the token package behind it) exists to make consistent is the token layer: color, type, spacing, elevation, shape. A component can be built any way a developer likes, as long as its values come from these tokens rather than a hand-typed hex or pixel value.

## Colors

Two tiers, deliberately kept separate:

- **Product colors** (`primary`, `secondary`, `neutral`, `success`, `warning`, `destructive`) — for UI. `primary` is `#353DD7`, the value already live across all 5 apps; kept as-is rather than migrated, since re-theming five production apps for a color that was only ever a brand-guide value, never a shipped one, wasn't worth the churn.
- **Brand colors** (`brand-blue` `#2232D7`, `brand-gold` `#FBD24D`) — for marketing/document contexts only (matches the brand guide exactly). Do not use these in product UI; that's what `primary`/`secondary` are for, even though they're visually close.

Each semantic ramp (`success`/`warning`/`destructive`) runs 50→900 and should only be used for state communication — a destructive action, a warning banner, a success toast — never as a decorative accent. Within any ramp: 50/100 for tinted backgrounds and hover fills, 500 for the primary interactive tone, 700–900 for high-contrast text or dark-surface contexts.

## Typography

**Inter** is the typeface actually rendering across all 5 apps today — but historically it was applied only via a global CSS override (`* { font-family: Inter !important }`), never registered in Tailwind's own `fontFamily` config. That's fixed at the token level here: `typography.fontFamily` resolves to Inter with system fallbacks, and should be wired as Tailwind's `fontFamily.sans`, not a separate custom key.

The type scale below covers display sizes down to overline. Not every weight is equally certain: `heading-h2` (Extrabold/800), `heading-h4` (Medium/500), and `paragraph-large` (Regular/400 and Medium/500) came from bound Figma variables and are confirmed. Every other weight is a proposed default — check `build/tailwind/font-weights.json` in the tokens repo for the live confirmed/proposed status before treating one as final.

## Layout

The spacing scale (4px→192px) matches Tailwind's own default scale exactly at every step — adopting it requires no Tailwind config changes, only the discipline to stop reaching for arbitrary bracket values (`px-[0.938rem]`, `w-[6.25rem]`) that show up throughout all 5 codebases today.

Breakpoints are a proposed change, not yet ratified: every app currently carries three parallel, conflicting breakpoint definitions (custom Tailwind `screens`, SCSS `$breakpoint-*` variables, and CSS custom properties), often mixed in the same file. The recommendation is to drop the custom names entirely and standardize on Tailwind's own `sm/md/lg/xl/2xl` — nothing is lost (`tablet:768` already equals `md:768`) but it is a breaking change to existing markup, and needs explicit design+dev sign-off given the shift toward a PWA makes responsive behavior more load-bearing, not less.

## Elevation & Depth

A 6-step shadow scale, already identical across Figma and all 5 apps (a rare case with no conflict to resolve) — built on a single neutral shadow color (`rgba(16,24,40,*)`) at increasing offset/blur/spread. Use `xsmall` for subtle separation between adjacent surfaces (a card against its page background), `small`/`medium` for dropdowns and popovers, `large`/`xlarge` for modals and sheets, and reserve `xxlarge` for the single heaviest overlay in a given view.

## Shapes

Radius is a proposed scale, not a ratified one — no Figma foundation page for border-radius existed anywhere in the audit that produced this file, so these values are inferred from the arbitrary `rounded-[Npx]` values already scattered across the 5 codebases. Treat this section as a starting proposal for a design decision, not a settled fact. Suggested usage once ratified: `sm` for inputs and small controls, `lg`/`xl` for cards and modals, `full` for pills, avatars, and badges.

## Components

Not an exhaustive catalog — a shared vocabulary. Figma's real component library (audited directly) already documents a working set: Accordion, Avatar, Badge, Breadcrumb, Button, Button Group, Data Display, Date Picker, File Upload, Form Control, Inline Alert, Sticky Alert, Input Field, List Field, Loader, Modal, Pagination, Progress Bar, Progress Step, Side Navigation, Stat, Tab, Table, Title, and Tooltip. Those names are the shared vocabulary for what a "Button" or "Badge" means across the org, even though each app is free to implement its own.

The composite tokens in this file's frontmatter (`button-*`, `badge`, `input-field`, `modal`, and their state variants) are reference points for the handful of primitives every app already reimplements independently — not a mandate to build a shared component package. Use them as a starting shape; diverge where a specific app's needs require it, as long as the underlying color/type/spacing/radius tokens are still the ones referenced above.

### Button — confirmed directly from Figma

Unlike the other components below, Button's tokens are pulled from live Figma design context (the actual selected component, not an inference) — checked against the full Size × Type × State matrix, not just one variant:

- **Radius is `6px` (`rounded.sm`) on every Button variant**, all 3 sizes, all 5 types (Primary/Secondary/Outlined/Tertiary/Link) — the first real confirmation for the `rounded` scale, which otherwise has no Figma source (see Shapes above).
- **Size drives height and padding**, consistently across every type: Large is `48px` height / `12px 20px` padding, Medium is `40px` / `10px 16px`, Small is `28px` / `6px 12px`. Icon size scales with it too: `20px` at Large/Medium, `16px` at Small.
- **State changes color only, never size**: Primary's Default (`primary-500` bg, white text) → Hover (`primary-600` bg) → Pressed (also `primary-600` bg, but text shifts to `primary-200` — a real, distinct state, not a duplicate of Hover) → Disabled (`primary-300` bg, white text).
- **⚠️ The Disabled state is a confirmed WCAG failure, not a placeholder**: white text on `primary-300` (`#8D92EB`) measures 2.82:1, below the 4.5:1 AA minimum. This is what's actually in Figma today — flagged here for a design decision, not silently corrected to something that "looks right."
- **Outlined and Tertiary both have a border** (`primary-500` and `neutral-200` respectively) that isn't representable in this file's `components` schema — it only supports `backgroundColor`/`textColor`/`typography`/`rounded`/`padding`/`size`/`height`/`width`, no border token. If you're implementing these types, add the border yourself; it's real, just not encodable here.
- **Link has no background, border, or horizontal padding** — text and icons only, vertical padding matching the other types at its size.
- The lint warnings on `button-outlined`/`button-link` about low contrast against a "transparent" background are a known linter limitation (it can't evaluate contrast with nothing behind it) — both sit on a white page in practice, where `primary-500` text passes comfortably (confirmed by `button-secondary`'s identical text color passing against its `primary-50` background).

## Do's and Don'ts

These are drawn directly from patterns found across all 5 production apps during the audit that produced this file — each one caused a real, shipped inconsistency.

- **Do** reference a token (`bg-primary-500`, `text-neutral-700`) for any color, spacing, or radius value. **Don't** hand-type a hex or pixel value that happens to match one — that's exactly how `destructive-800` and `destructive-900` ended up identical in every app.
- **Do** use the shared spacing scale. **Don't** reach for an arbitrary bracket value (`px-[0.938rem]`) when a token already covers that exact pixel amount.
- **Do** register Inter as Tailwind's `fontFamily.sans`. **Don't** apply it via a global `* { font-family: ... !important }` override — it silently breaks any component that expects `font-sans` to resolve correctly.
- **Do** pick one icon theming contract per app (a `color` prop or a Tailwind-class prop) and use it consistently. **Don't** mix both within the same icon set, or within the same component.
- **Do** type a component's `variant` prop as a string-literal union. **Don't** leave it as a loose `string` once more than a couple of variants exist — it's how a 25-variant button with no compile-time safety happens.
- **Do** delete a superseded component version once its replacement has shipped and been verified. **Don't** leave "V1"/"V2" trees or "_Old"/"Legacy" files live in production indefinitely — several apps in this audit still had both.
- **Do** build components however best fits the app. **Don't** skip pulling from the shared token package even when building something fully bespoke — that's the one rule this file exists to support.
