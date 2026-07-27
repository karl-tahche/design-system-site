<script setup>
import typographyTokens from 'tahche-design-tokens/tokens/typography.json';

const styles = Object.entries(typographyTokens.typography)
  .filter(([key]) => key !== 'fontFamily' && !key.startsWith('$'))
  .map(([key, token]) => ({
    key,
    value: token.$value,
    confirmed: token.$confirmed === true,
    deprecated: token.$deprecated === true,
  }));
</script>

<template>
  <div class="flex flex-col gap-5">
    <div v-for="style in styles" :key="style.key" class="flex items-baseline gap-4 border-b border-neutral-100 pb-4 dark:border-neutral-800">
      <div class="w-48 shrink-0">
        <div class="text-paragraph-small-500 text-neutral-900 dark:text-neutral-100">{{ style.key }}</div>
        <div class="text-paragraph-xsmall text-neutral-500 dark:text-neutral-400">
          {{ style.value.fontSize }} / {{ style.value.fontWeight }}
        </div>
        <span
          :class="[
            'text-paragraph-xsmall mt-1 inline-block rounded-full px-2 py-0.5',
            style.deprecated ? 'bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400' : style.confirmed ? 'bg-success-100 text-success-700 dark:bg-success-900 dark:text-success-300' : 'bg-warning-100 text-warning-700 dark:bg-warning-900 dark:text-warning-300',
          ]"
        >
          {{ style.deprecated ? 'deprecated' : style.confirmed ? 'confirmed' : 'proposed' }}
        </span>
      </div>
      <div :class="`text-${style.key} text-neutral-900 dark:text-neutral-100`">Tahche Design System</div>
    </div>
  </div>
</template>
