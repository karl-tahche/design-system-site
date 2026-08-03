<script setup>
defineProps({
  value: { type: Number, default: 6 },
  total: { type: Number, default: 10 },
  label: { type: String, default: 'Profile completion' },
});
</script>

<template>
  <div class="w-72">
    <div class="mb-1 flex items-center justify-between">
      <span class="text-paragraph-medium-500 text-neutral-900 dark:text-neutral-100">{{ label }}</span>
      <span class="text-paragraph-small text-neutral-700 dark:text-neutral-300">{{ value }}/{{ total }}</span>
    </div>
    <div class="flex h-2 gap-0.5 overflow-hidden rounded-full bg-neutral-100 p-0.5 dark:bg-neutral-800">
      <span v-for="n in total" :key="n" :class="['flex-1 rounded-full', n <= value ? 'bg-primary-500' : 'bg-neutral-200 dark:bg-neutral-700']" />
    </div>
  </div>
</template>
