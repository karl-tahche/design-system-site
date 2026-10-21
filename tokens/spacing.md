<script setup>
import spacingTokens from 'tahche-design-tokens/tokens/spacing.json';

const steps = Object.entries(spacingTokens.spacing)
  .filter(([key]) => !key.startsWith('$'))
  .map(([key, token]) => ({ key: key.replace('_', '.'), value: token.$value, mobile: token.mobile }));
</script>

# Spacing

Matches Tailwind's own default spacing scale exactly at every step (including the 2px `0.5` step, added 2026-10-21 from the Figma v2 file) — adopting it requires zero
Tailwind config changes, only the discipline to stop reaching for arbitrary bracket values
(`px-[0.938rem]`) that show up throughout all 5 apps today.

Values rendered directly from `tahche-design-tokens/tokens/spacing.json`.

**Theme-agnostic** — spacing doesn't change by theme; no dark-mode variant needed here.

**Mobile values.** The Figma v2 file's Spacing collection has a Mobile mode alongside Web: steps up
to `8` (32px) are identical, while the larger steps shrink — shown in the "Mobile" column below.
The Tailwind preset and `DESIGN.md` carry the Web values only; apply the Mobile value yourself below
the `md` breakpoint (767px and under) for section- and page-level gaps.

<div class="flex flex-col gap-2">
  <div v-for="step in steps" :key="step.key" class="flex items-center gap-4">
    <span class="text-paragraph-small-500 w-10 text-neutral-900 dark:text-neutral-100">{{ step.key }}</span>
    <span class="text-paragraph-xsmall w-14 text-neutral-500 dark:text-neutral-400">{{ step.value }}</span>
    <span class="text-paragraph-xsmall w-24 text-neutral-500 dark:text-neutral-400">{{ step.mobile ? 'Mobile ' + step.mobile : '' }}</span>
    <div class="h-4 bg-primary-500" :style="{ width: step.value }" />
  </div>
</div>
