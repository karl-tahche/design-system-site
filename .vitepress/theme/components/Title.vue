<script setup>
import Button from './Button.vue';
defineProps({
  overline: { type: String, default: 'Recruitment' },
  heading: { type: String, default: 'Job Openings' },
});
</script>

<template>
  <div class="flex items-center justify-between border-b border-neutral-200 py-6 dark:border-neutral-700">
    <div class="flex items-center gap-3">
      <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-500 dark:bg-primary-900 dark:text-primary-300">●</div>
      <div>
        <p class="text-paragraph-small text-neutral-500 dark:text-neutral-400">{{ overline }}</p>
        <h2 class="text-h2 text-neutral-900 dark:text-neutral-100">{{ heading }}</h2>
      </div>
    </div>
    <div class="flex gap-2">
      <Button variant="secondary" size="medium" label="Export" />
      <Button variant="primary" size="medium" label="New Job" />
    </div>
  </div>
</template>
