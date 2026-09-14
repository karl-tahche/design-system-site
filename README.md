# Tahche Design System

A single repo for Tahche's design tokens, generated `DESIGN.md`, and the docs site that
documents them — built with [VitePress](https://vitepress.dev) for the site: sidebar navigation,
prose-first pages, live component demos embedded directly inline, in the spirit of
[ui.nuxt.com/docs](https://ui.nuxt.com/docs).

Previously two repos (`tahche-design-tokens` was private, this site was public). They're merged
here as of the "Merge tahche-design-tokens repo into this repo as a subdirectory" commit — full
history of both preserved — because a private repo can't build a public-plan GitHub Pages site,
which meant CI needed a personal access token to check out the private repo as a sibling, and
that token expiring is what broke deploys. One public repo removes that dependency entirely.

**This is a reference-implementation site, not any of the 5 apps' real code.**
`tahche-design-tokens/` deliberately does not standardize component structure — each app in the
product suite builds its own. The
Vue components under `.vitepress/theme/components/` are small, fresh implementations built
specifically for this site, styled purely from the tokens package's Tailwind preset, so there's
something real and interactive to demonstrate each token against. They are explicitly **not** a
claim about what any specific app looks like — see each component page's "Known findings" for the
real-code evidence behind it (and where a real app's implementation is known to differ or have a
gap).

## Structure

```
tahche-design-tokens/  canonical tokens (tokens/*.json), the Style Dictionary build, and the
                        generated DESIGN.md — see its own README for details
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

## Run it

```bash
cd tahche-design-tokens && npm ci && npm run build && cd ..
npm install
npm run docs:dev
```

Opens at `http://localhost:5173` (or the next free port).

## Keeping this in sync with `tahche-design-tokens/`

This site depends on `tahche-design-tokens` as a local package path (`file:./tahche-design-tokens`)
— now a folder in this same repo rather than a sibling repo. When tokens change:

```bash
cd tahche-design-tokens && npm run build && npm run design-md && cd ..
npm install   # picks up the local package's latest build/ output
```

**Important**: the token *values* rendered on the Foundations pages are pulled live from
`tahche-design-tokens/tokens/*.json` — they can't drift, by construction. The **prose** in each
component page and in `guidelines/dos-and-donts.md`, however, is hand-authored from
`tahche-design-tokens/DESIGN.md` and *can* drift if `DESIGN.md` changes without updating this repo.

## Using the tokens in an app

See [`tahche-design-tokens/README.md`](./tahche-design-tokens/README.md) for the full token
package docs (ratification status, the round-trip strategy with Figma, adoption status across the
5 apps).

**Note on installing from here:** `npm install github:owner/repo` always installs from the
target repo's *root* `package.json` — it has no built-in way to install just a subdirectory of a
monorepo. Now that `tahche-design-tokens` lives inside this repo instead of being its own repo
root, the old `npm install github:karl-tahche/tahche-design-tokens#main` install path no longer
resolves the way it used to. Two real options, not yet decided:

1. Publish `tahche-design-tokens` to the public npm registry as a real versioned package
   (`npm install tahche-design-tokens` or a scoped name) — the standard fix, matches this
   package's own semver policy already written in its README, and sidesteps this problem
   entirely. Needs an npm account/org and a publish step in CI.
2. Keep using a `file:` dependency path for apps developed alongside this folder (what
   career-web already does) — no registry needed, but only works for local/monorepo-adjacent
   development, not a clean install for an arbitrary machine.

career-web's existing dependency (`file:../Tahche Design System/tahche-design-tokens`) points at
the old standalone folder, which still exists and still works for now — but is no longer the
canonical copy. Update that path once a direction above is chosen.

## Related

- `design-system-docs` — an earlier Storybook-based attempt at this same goal. This VitePress
  site replaced it as the primary docs site; it has since been archived/moved out of the
  `Tahche Design System/` folder and is not required by this site (no runtime or build
  dependency on it — the components above were a one-time copy).
