# tahche-design-tokens

The canonical source of truth for Tahche's design tokens — colors, typography, spacing, elevation, radius, breakpoints, and motion. This repo exists so Figma and code stop editing each other directly (which is how three different "primary blue" values ended up live at once). Both sides now read from, and propose changes to, this repo instead.

Component structure is intentionally **not** covered here — each app keeps building components however it likes. The one rule this repo exists to support: pull colors, spacing, and type from these tokens instead of hand-typing a value.

This repo also generates [`DESIGN.md`](./DESIGN.md) — a spec-compliant [design.md](https://github.com/google-labs-code/design.md) file, meant to be read directly by AI coding agents and human developers alike. It's a build output, not a second source of truth: same tokens, same ratification status, just packaged into the format the design.md spec expects (YAML frontmatter + 8-section prose).

## What's in here

```
tokens/                  source of truth — hand-edited, DTCG-format JSON
  color.json             primary, secondary, neutral, success, warning, destructive, brand
  typography.json        font family + the full type scale (display/heading/paragraph/overline)
  spacing.json           4–192px scale
  elevation.json         6-step shadow scale
  radius.json            PARTIAL — see Status below
  breakpoints.json       RATIFIED 2026-07-25 — see Status below
  motion.json            RATIFIED 2026-07-25 — duration scale + easing, see Status below

build/                   generated — do not hand-edit, run `npm run build`
  tailwind/preset.cjs     drop-in Tailwind preset
  css/tokens.css          CSS custom properties
  json/tokens.json        flattened token tree (for tooling / Tokens Studio import)

DESIGN.md                generated — do not hand-edit, run `npm run design-md`
build.mjs                 Style Dictionary config that produces everything in build/
generate-design-md.mjs    assembles DESIGN.md from the same tokens/*.json
```

## DESIGN.md

Validated against the real [`@google/design.md`](https://www.npmjs.com/package/@google/design.md) lint CLI (a devDependency here) — 0 errors. The only warnings are expected: most ramp steps (e.g. `primary-200`, `success-700`) aren't referenced by the small representative component set in the frontmatter, since components stay intentionally uncatalogued here — see the file's own "Components" section for why.

```bash
npm run design-md        # regenerate DESIGN.md from tokens/*.json
npm run lint:design-md    # validate it against the spec
```

Regenerate it any time a token changes — never hand-edit `DESIGN.md`'s frontmatter directly, or it'll drift from `tokens/*.json` the same way Figma and code drifted from each other.

## Using it in an app

```bash
npm install github:Tahche/tahche-design-tokens#main
```

(Same pattern the apps already use for `tahche-job-post-ai` — no new tooling to learn.)

```js
// tailwind.config.js
module.exports = {
  presets: [require('tahche-design-tokens')],
  // app-specific overrides/extensions go here, on top of the shared preset
};
```

That gives every app `bg-primary-500`, `text-neutral-700`, `shadow-medium`, `text-[length:--tw-...]`-free `text-heading-h2`, `rounded-lg`, `p-6`, etc. — all resolving to the same values everywhere.

Typography tokens carry `fontSize`, `lineHeight`, and `letterSpacing` (Tailwind's `fontSize` tuple format), but **not** `fontWeight` — Tailwind doesn't support weight in that tuple, so pair a heading utility with a weight utility explicitly, e.g. `text-heading-h2 font-extrabold`. Use `build/tailwind/font-weights.json` to look up which weight goes with which style, and whether it's confirmed or proposed.

## Status: what's ratified vs. proposed

Ratified 2026-07-23, from the Figma + 5-codebase + brand-guide audit (updated 2026-07-25 with contrast-decision and breakpoint sign-off):

| Category | Status |
|---|---|
| Colors | ✅ Ratified — primary stays `#353DD7` (code), brand blue kept separately as `#2232D7` |
| Elevation | ✅ Ratified — already identical across Figma and all 5 apps |
| Spacing | ✅ Ratified — matches Tailwind's own default scale exactly, zero app-side migration needed beyond dropping arbitrary values |
| Typography sizes | ✅ Ratified — from the Figma Typography page |
| Typography weights | ⚠️ Partial — `heading-h2`/`display-large` (Extrabold/800, resolved 2026-07-25 — see below), `heading-h4` (Medium/500), and `paragraph-large` (Regular/400, Medium/500) are confirmed via bound Figma variables. Every other weight in `typography.json` is a proposed default (`$description` says so on each token) and needs design sign-off before Phase 3 rollout. |
| Radius | ⚠️ Partial — `sm`/`md`/`full` confirmed directly against real components (Button, Input Field, Modal, Button Group, Stat, Tooltip, Avatar, Badge). `lg`/`xl`/`2xl`/`3xl` are inferred from arbitrary `rounded-[Npx]` values in the codebases, not from an approved Figma spec — no dedicated border-radius foundation page exists. `xl`'s bordering 14px gap is resolved (2026-07-25): snap to `2xl` (16px), not a new 7th step — see radius.json. |
| Breakpoints | ✅ Ratified 2026-07-25 — every app already overwhelmingly uses standard Tailwind `sm/md/lg/xl/2xl` in real markup (217–2,844 instances/app) over the custom `mobile375`/`mobile`/`mobilesmall`/`tablet`/`desktop` scheme (0–46 instances/app, almost entirely legacy Auth screens). `tablet:768` already equals `md:768`, so nothing is lost. Remaining work (updating legacy Auth-screen classes, wiring into each app's Tailwind config) is mechanical, not a design question. |
| Motion | ✅ Ratified 2026-07-25 — from a real-usage audit of all 5 apps' CSS transitions (no Figma source exists for motion at all). No app uses an animation library. `duration` (150/250/500ms) and `easing.standard` (`ease-in-out`) are backed by real cross-app clustering; `easing.linear` is reserved for spinners/marquees only. Also surfaced a real accessibility gap: `prefers-reduced-motion` is handled in only 1 of 5 apps — not a token question, but worth fixing app-side. |

## The round-trip (how this stays in sync)

A closed loop that starts and ends in code — not a symmetric "either side can propose a change" relationship. Component-level decisions (new states, variants, specs) flow through all three steps in order; only raw token *values* get a lighter-weight, either-direction sync via Tokens Studio (see below).

1. **Build/decide in Claude Code first.** New components, states, or unconfirmed token values get resolved from real usage — grep the 5 apps' actual code, check shadcn-vue's own conventions where real evidence is thin — before anything touches Figma. Figma is not where new decisions originate.
2. **Bring it into Figma to actually refine the Design System.** Once a shape exists in code, a designer takes it into Figma to improve on it — spacing, motion, detail work a code-first pass won't catch. This is a real, active design step, not a mechanical sync; Figma's job here is refinement, not record-keeping.
3. **Feed the refined result back** into `tokens/*.json`, regenerate `build/` and `DESIGN.md`, and from there back into the 5 apps.

- **Token values specifically** still sync in either direction via the Tokens Studio plugin (a value tweak in Figma opens a PR here; a value tweak here pushes back to Figma Variables) — reviewed by one designer + one dev, merged, then `npm run build` regenerates `build/`.
- **Drift check**: a quarterly re-crawl of Figma's actual Variable values against this repo (same method used for the original audit), plus a CI lint in each app that flags hardcoded hex/px values matching a token 1:1.

## Versioning

Semver. Bump minor for new tokens, major for any renamed/removed token or a changed value on an already-ratified (not proposed) token. Each app pins a version and upgrades deliberately, same as any other dependency.
