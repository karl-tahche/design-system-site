<script setup>
import Button from './Button.vue';
defineProps({
  title: { type: String, default: 'No applicants yet' },
  description: { type: String, default: "Once candidates apply to this job, they'll show up here." },
  actionLabel: { type: String, default: 'Share job posting' },
});
</script>

<template>
  <div class="flex w-96 flex-col items-center gap-3 rounded-md border border-dashed border-neutral-200 p-10 text-center dark:border-neutral-700">
    <div class="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">—</div>
    <p class="text-paragraph-medium-500 text-neutral-900 dark:text-neutral-100">{{ title }}</p>
    <p class="text-paragraph-small text-neutral-700 dark:text-neutral-300">{{ description }}</p>
    <Button variant="secondary" size="medium" :label="actionLabel" />
  </div>
</template>
