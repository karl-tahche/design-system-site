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
    <div v-for="style in styles" :key="style.key" class="flex items-baseline gap-4 border-b border-neutral-100 pb-4">
      <div class="w-48 shrink-0">
        <p class="text-paragraph-small-medium text-neutral-900">{{ style.key }}</p>
        <p class="text-paragraph-xsmall text-neutral-500">
          {{ style.value.fontSize }} / {{ style.value.fontWeight }}
        </p>
        <span
          :class="[
            'text-paragraph-xsmall mt-1 inline-block rounded-full px-2 py-0.5',
            style.deprecated ? 'bg-neutral-100 text-neutral-500' : style.confirmed ? 'bg-success-100 text-success-700' : 'bg-warning-100 text-warning-700',
          ]"
        >
          {{ style.deprecated ? 'deprecated' : style.confirmed ? 'confirmed' : 'proposed' }}
        </span>
      </div>
      <p :class="`text-${style.key} text-neutral-900`">Tahche Design System</p>
    </div>
  </div>
</template>
