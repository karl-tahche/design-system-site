<script setup>
import { ref } from 'vue';
defineProps({
  title: { type: String, default: 'Applicant score' },
  description: { type: String, default: 'Calculated from resume match and assessment results.' },
});
const show = ref(false);
</script>

<template>
  <span class="relative inline-block" @mouseenter="show = true" @mouseleave="show = false">
    <slot>
      <button type="button" class="h-5 w-5 rounded-full border border-neutral-300 text-paragraph-xsmall text-neutral-700 dark:border-neutral-600 dark:text-neutral-300">i</button>
    </slot>
    <div v-if="show" class="absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded-md bg-white p-4 text-left shadow-large dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:shadow-none">
      <p class="text-label-xsmall text-neutral-900 dark:text-neutral-100">{{ title }}</p>
      <p class="mt-1 text-paragraph-xsmall text-neutral-750 dark:text-neutral-300">{{ description }}</p>
    </div>
  </span>
</template>
