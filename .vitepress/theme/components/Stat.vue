<script setup>
defineProps({
  label: { type: String, default: 'Active Applicants' },
  value: { type: String, default: '1,284' },
  delta: { type: String, default: '+12.4%' },
});
</script>

<template>
  <div class="w-64 rounded-md bg-white p-6 shadow-small dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:shadow-none">
    <p class="text-paragraph-small text-neutral-700 dark:text-neutral-300">{{ label }}</p>
    <div class="mt-2 flex items-end justify-between">
      <span class="text-h3 text-neutral-900 dark:text-neutral-100">{{ value }}</span>
      <span class="rounded-full bg-success-50 px-2 py-0.5 text-paragraph-xsmall text-success-500 dark:bg-success-900 dark:text-success-300">{{ delta }}</span>
    </div>
  </div>
</template>
