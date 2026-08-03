<script setup>
import elevationTokens from 'tahche-design-tokens/tokens/elevation.json';

const steps = Object.entries(elevationTokens.elevation)
  .filter(([key]) => !key.startsWith('$'))
  .map(([key, token]) => ({ key, value: token.$value }));
</script>

# Elevation

A 6-step shadow scale, already identical across Figma and all 5 apps. Use `xsmall` for subtle
separation between adjacent surfaces, `small`/`medium` for dropdowns and popovers, `large`/`xlarge`
for modals and sheets, and reserve `xxlarge` for the single heaviest overlay in a view
(real-usage audit found it dead as a class in every app — kept for scale completeness only).

`focus-ring` was **replaced 2026-07-25**, real code over Figma: the original `#E1E1FE` solid
ring had zero real usage anywhere; the translucent `primary-500`-at-12%-alpha ring shown here is
a real, repeated pattern across multiple apps in the product suite.

Values rendered directly from `tahche-design-tokens/tokens/elevation.json`.

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
