<script setup>
defineProps({
  rows: {
    type: Array,
    default: () => [
      { label: 'Employee ID', value: 'TH-04821' },
      { label: 'Department', value: 'Talent Acquisition' },
      { label: 'Date Hired', value: 'March 3, 2024' },
    ],
  },
});
</script>

<template>
  <dl class="flex w-80 flex-col gap-8">
    <div v-for="row in rows" :key="row.label" class="flex items-baseline justify-between gap-6">
      <dt class="text-paragraph-small text-neutral-800 dark:text-neutral-200">{{ row.label }}</dt>
      <dd class="text-paragraph-small-500 text-neutral-800 dark:text-neutral-200">{{ row.value }}</dd>
    </div>
  </dl>
</template>
