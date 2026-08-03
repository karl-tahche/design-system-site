# Adoption — from documented to load-bearing

Everything else on this site describes what *should* happen. This page tracks what actually
consumes it — because a design system nobody's app depends on can't stop drift, no matter how
well it's documented.

## The gap this closes

Before this page existed, `tahche-design-tokens` had exactly one real consumer: this reference
site. All 5 product apps hand-maintained their own copy of the same color ramps directly inside
`tailwind.config.js` — correct today, with no mechanism to stay correct tomorrow.

## Pilot: career-web

**career-web** ([tahche-career-web-main](https://github.com/Tahche/tahche-career-web)) is the
first real app wired to the shared preset instead of a hand-copied ramp. It was chosen over the
other 4 apps by evidence, not preference: smallest codebase (96 Vue files vs. up to 832), and the
lowest hardcoded-hex footprint of the group at the time of the audit.

What changed, concretely:

- `package.json` — added `"tahche-design-tokens": "file:../Tahche Design System/tahche-design-tokens"`.
- `tailwind.config.js` — replaced the hand-copied `primary` / `secondary` / `success` / `warning` /
  `destructive` ramps and `boxShadow` scale with `presets: [require('tahche-design-tokens')]`.
  App-specific things that aren't in the token package — `fontFamily` (arial/sora/inter) and
  custom `screens` — stayed as local `theme.extend`.

**A real disagreement, found and flagged, not silently resolved:** career-web's ramp is named
`pneutral`, not `neutral`. Renaming ~53 real class usages (`text-pneutral-500`, `fill-pneutral-500`,
etc.) across the app is a separate, larger cleanup — not something to fold into a config swap
silently. For now, `pneutral` is kept as a direct alias pointing at the token package's `neutral`
ramp (not a second hardcoded copy, so it can't drift), with a comment marking it for removal once
markup is migrated. New work in this app should reach for `neutral-*` directly.

**A real bug the swap fixed:** career-web's hand-copied `destructive` ramp had `800` and `900` set
to the identical hex (`#7F1D1D`) — a copy-paste error. The token package's real value for `800` is
`#991b1b`, a distinct step. One place (`LoginForm.vue`, a hover text color) picked up this
correction automatically.

## CI lint: a ratchet, not a rewrite

Wiring the preset in doesn't stop new hardcoded hex from creeping back in — nothing was enforcing
that before, and documentation alone doesn't enforce anything either. `tahche-design-tokens` now
ships a lint script (`bin/check-token-usage.mjs`, exposed as the `tahche-tokens-lint` command) that
scans a directory for hex values matching a real token and fails if any are **new**.

It's a ratchet, deliberately, not a one-shot ban: career-web already had 334 pre-existing
hardcoded-hex hits when this was turned on (after excluding generic values like plain white, which
produced ~50 noisy false "use `primary-foreground`" suggestions in testing — plain white shows up
for reasons that have nothing to do with that specific token). Rewriting 334 existing call sites in
one pass wasn't the goal here; stopping the count from growing is. Those 334 are tracked in
`.token-lint-baseline.json` — checked into the repo, one entry per `file:line:hex`. The lint passes
if nothing new appears beyond that list, and fails the moment a PR introduces one more.

career-web's `package.json` now has:

```json
"lint:tokens": "tahche-tokens-lint src",
"lint:tokens:baseline": "tahche-tokens-lint src --update-baseline"
```

`yarn lint:tokens` runs in `.github/workflows/ci.yml`, right after the existing `yarn lint` step, in
all three jobs (PR checks, staging deploy, production deploy) — so it gates the same PRs the
existing lint already gates.

## What this doesn't do yet

- The other 4 apps (recruitment-portal, client-web, client-dashboard, dashboard) still hand-copy
  their own ramps. client-dashboard is the next-lowest-risk candidate if this pilot holds up in
  real use.
- The 334 baselined violations in career-web are tracked, not fixed. Paying that down is real
  design-engineer work, not something to do in the same pass as turning the lint on.
- `spacing` and `borderRadius` values from the preset are in px, not rem — the token package's own
  choice, inherited here. Worth a look if zoom/text-scaling accessibility becomes a concern.
