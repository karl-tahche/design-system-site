# Tahche Design System — Docs Site

A documentation website for
[`tahche-design-tokens`](https://github.com/karl-tahche/tahche-design-tokens), built with
[VitePress](https://vitepress.dev) — sidebar navigation, prose-first pages, live component demos
embedded directly inline, in the spirit of [ui.nuxt.com/docs](https://ui.nuxt.com/docs).

**This is a reference-implementation site, not any of the 5 apps' real code.**
`tahche-design-tokens` deliberately does not standardize component structure — each app in the
product suite builds its own. The
Vue components under `.vitepress/theme/components/` are small, fresh implementations built
specifically for this site, styled purely from the tokens package's Tailwind preset, so there's
something real and interactive to demonstrate each token against. They are explicitly **not** a
claim about what any specific app looks like — see each component page's "Known findings" for the
real-code evidence behind it (and where a real app's implementation is known to differ or have a
gap).

## Run it

```bash
npm install
npm run docs:dev
```

Opens at `http://localhost:5173` (or the next free port).

## Structure

```
.vitepress/
  config.mts        nav + sidebar config
  theme/
    index.ts          registers every component globally (usable in any .md with no import)
    custom.css          @tailwind base/components/utilities
    components/         reference Vue components, copied from an earlier Storybook attempt
                         (design-system-docs, since archived — see Related below) — Button,
                         Badge, InputField, AlertInline, Tab, Modal, Accordion, Avatar, Switch,
                         plus ColorPalette/TypeScale/MotionDemo for rendering token values live
guide/               Introduction
tokens/              Colors, Typography, Spacing, Elevation, Radius, Motion — each renders real
                     values imported directly from tahche-design-tokens/tokens/*.json
components/          one page per reference component: live demo + code snippet + When-to-use/
                     When-not-to-use + Known findings
guidelines/          Do's and Don'ts, transcribed from DESIGN.md
```

## Keeping this in sync with `tahche-design-tokens`

This repo depends on `tahche-design-tokens` as a local package path for development. When tokens
change:

```bash
npm install   # picks up the linked package's latest build/ output
```

For production, pin this to a versioned release of `tahche-design-tokens` instead of a local
path, and bump it deliberately like any other dependency.

**Important**: the token *values* rendered on the Foundations pages are pulled live from
`tahche-design-tokens/tokens/*.json` — they can't drift, by construction. The **prose** in each
component page and in `guidelines/dos-and-donts.md`, however, is hand-authored from `DESIGN.md`
and *can* drift if `DESIGN.md` changes without updating this repo.

## Related

- [`tahche-design-tokens`](https://github.com/karl-tahche/tahche-design-tokens) — the token
  package this site documents.
- `design-system-docs` — an earlier Storybook-based attempt at this same goal. This VitePress
  site replaced it as the primary docs site; it has since been archived/moved out of the
  `Tahche Design System/` folder and is not required by this site (no runtime or build
  dependency on it — the components above were a one-time copy).
