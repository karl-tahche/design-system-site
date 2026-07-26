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
    <div class="h-20 w-32 rounded-sm bg-white" :style="{ boxShadow: step.value }" />
    <p class="text-paragraph-small-500 mt-3 text-neutral-900 dark:text-neutral-100">{{ step.key }}</p>
  </div>
</div>
