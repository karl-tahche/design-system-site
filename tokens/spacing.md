<script setup>
import spacingTokens from 'tahche-design-tokens/tokens/spacing.json';

const steps = Object.entries(spacingTokens.spacing)
  .filter(([key]) => !key.startsWith('$'))
  .map(([key, token]) => ({ key, value: token.$value }));
</script>

# Spacing

Matches Tailwind's own default spacing scale exactly at every step — adopting it requires zero
Tailwind config changes, only the discipline to stop reaching for arbitrary bracket values
(`px-[0.938rem]`) that show up throughout all 5 apps today.

Values rendered directly from `tahche-design-tokens/tokens/spacing.json`.

<div class="flex flex-col gap-2">
  <div v-for="step in steps" :key="step.key" class="flex items-center gap-4">
    <span class="text-paragraph-small-medium w-10 text-neutral-900 dark:text-neutral-100">{{ step.key }}</span>
    <span class="text-paragraph-xsmall w-14 text-neutral-500">{{ step.value }}</span>
    <div class="h-4 bg-primary-500" :style="{ width: step.value }" />
  </div>
</div>
