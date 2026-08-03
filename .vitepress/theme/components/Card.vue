<script setup>
defineProps({
  heading: { type: String, default: 'Card heading' },
  description: { type: String, default: 'Supporting description for this card.' },
});
</script>

<template>
  <div class="w-80 rounded-md border border-neutral-200 bg-white p-6 shadow-xsmall dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-none">
    <h3 class="text-paragraph-large-600 text-neutral-900 dark:text-neutral-100">{{ heading }}</h3>
    <p class="mt-2 text-paragraph-small text-neutral-700 dark:text-neutral-300">{{ description }}</p>
    <div class="mt-4">
      <slot />
    </div>
  </div>
</template>
