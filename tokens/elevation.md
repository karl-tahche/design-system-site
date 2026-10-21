<script setup>
import elevationTokens from 'tahche-design-tokens/tokens/elevation.json';

const steps = Object.entries(elevationTokens.elevation)
  .filter(([key]) => !key.startsWith('$'))
  .map(([key, token]) => ({ key, value: token.$value }));
</script>

# Elevation

A 6-step shadow scale (`xsmall` through `xxlarge`) that **is the stock Tailwind v3 shadow scale**,
standardized 2026-10-21 so Figma, code and these docs carry identical values — plus a separate
`focus-ring` token below (a ring, not a drop shadow — shown alongside the scale in
the swatches below for convenience). Use `xsmall` for subtle separation between adjacent surfaces,
`small`/`medium` for dropdowns and popovers, `large`/`xlarge` for modals and sheets, and reserve
`xxlarge` for the single heaviest overlay in a view (real-usage audit found it dead as a class in
every app — kept for scale completeness only).

## Focus ring

`focus-ring` was **replaced 2026-10-21** with Tailwind's classic offset ring (`ring-2 ring-offset-2`):
a 2px gap in the surface color, then a 2px solid `primary-500` ring, drawn as a box-shadow so it
follows `border-radius` and never shifts layout. The old 3px ring at 12% alpha measured about
**1.2:1** against white (the Figma halo about 1.3:1) — too faint to carry focus on its own. The new
ring is **7.5:1**, past the 3:1 non-text contrast minimum, and its 2px thickness meets the perimeter
rule in WCAG 2.2's Focus Appearance (2.4.13, AAA). Use it with `focus-visible`, not `focus`.

| Token | Ring color | On | Contrast |
|---|---|---|---|
| `focus-ring` | `primary-500` `#353DD7` | white | 7.5:1 |
| `focus-ring-dark` | `primary-300` `#8D92EB` | `neutral-900` | 6.5:1 |
| `focus-ring-destructive` | `destructive-600` `#DC2626` | white | 4.8:1 |
| `focus-ring-success` | `success-600` `#16A34A` | white | 3.3:1 |
| `focus-ring-warning` | `warning-600` `#D97706` | white | 3.2:1 |

The gap color is the CSS variable `--focus-ring-offset` (falls back to white; `#141414` in
`focus-ring-dark`). Set it on any surface that isn't plain white so the gap matches the background.
The state variants are for fields in an error, success or warning state — one ring in the state's
color instead of a separate tinted halo.

Values rendered directly from `tahche-design-tokens/tokens/elevation.json`.

## Mapping to Tailwind

Same offsets, blurs, spreads and alphas as Tailwind v3's defaults. The one deliberate difference is
color: the slate `rgb(16 24 40)` (already the `extended.dark-slate` token) instead of pure black, so
shadows read cool against Tahche's blue-tinted neutrals. The Tailwind preset defines both
spellings, so `shadow-md` and `shadow-medium` render identically.

| Token | Tailwind class | CSS |
|---|---|---|
| `xsmall` | `shadow-sm` | `0 1px 2px rgb(16 24 40 / 0.05)` |
| `small` | `shadow` | `0 1px 3px rgb(16 24 40 / 0.1), 0 1px 2px -1px rgb(16 24 40 / 0.1)` |
| `medium` | `shadow-md` | `0 4px 6px -1px rgb(16 24 40 / 0.1), 0 2px 4px -2px rgb(16 24 40 / 0.1)` |
| `large` | `shadow-lg` | `0 10px 15px -3px rgb(16 24 40 / 0.1), 0 4px 6px -4px rgb(16 24 40 / 0.1)` |
| `xlarge` | `shadow-xl` | `0 20px 25px -5px rgb(16 24 40 / 0.1), 0 8px 10px -6px rgb(16 24 40 / 0.1)` |
| `xxlarge` | `shadow-2xl` | `0 25px 50px -12px rgb(16 24 40 / 0.25)` |

The Figma file's `Drop shadow/*` effect styles use the same values (rewritten 2026-10-21; they had
drifted, including layers with negative y offsets that cast shadows upward).

<div class="flex flex-wrap gap-8 p-4">
  <div v-for="step in steps" :key="step.key" class="text-center">
    <div class="h-20 w-32 rounded-sm bg-white dark:bg-neutral-800 dark:border dark:border-neutral-700" :style="{ boxShadow: step.value }" />
    <p class="text-paragraph-small-500 mt-3 text-neutral-900 dark:text-neutral-100">{{ step.key }}</p>
  </div>
</div>

## Dark mode — a real adjustment, not just a color swap

Toggle the site's theme and look at the swatches above again: every one of these shadows is built
from a fixed, low-opacity black (`rgba(16,24,40,*)`) — the same value regardless of theme. That
value was tuned to separate a white surface from a light page; against a `neutral-900` page it
barely registers, because there's very little luminance difference left for a shadow to darken
further.

**Recommended fix, not yet needed anywhere since no app has dark mode yet**: don't try to fix this
by increasing shadow opacity — a shadow that's strong enough to read on black gets harsh on white.
Communicate elevation on dark surfaces the way the swatches above now do: a **lighter surface
step** (`neutral-800` card on a `neutral-900` page, one step apart) plus a **1px `neutral-700`
border**, with the named shadow token kept as a secondary cue rather than the primary one. This
is the same pattern most dark-UI systems converge on for the same physical reason — shadows read
as "darker," and there isn't room to go much darker than a near-black page.
