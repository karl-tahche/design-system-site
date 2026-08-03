<script setup>
defineProps({
  type: { type: String, default: 'success', validator: (v) => ['primary', 'success', 'warning', 'destructive'].includes(v) },
  title: { type: String, default: 'Saved successfully' },
  description: { type: String, default: '' },
});
defineEmits(['dismiss']);
const iconColor = {
  primary: 'text-primary-500 dark:text-primary-300',
  success: 'text-success-500 dark:text-success-300',
  warning: 'text-warning-500 dark:text-warning-300',
  destructive: 'text-destructive-500 dark:text-destructive-300',
};
</script>

<template>
  <div class="flex w-80 items-start gap-3 rounded-md bg-white p-4 shadow-large dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:shadow-none">
    <span :class="['mt-0.5 text-paragraph-medium-500', iconColor[type]]">●</span>
    <div class="flex-1">
      <p class="text-paragraph-small-500 text-neutral-900 dark:text-neutral-100">{{ title }}</p>
      <p v-if="description" class="mt-0.5 text-paragraph-xsmall text-neutral-700 dark:text-neutral-300">{{ description }}</p>
    </div>
    <button type="button" class="text-neutral-500 dark:text-neutral-400" @click="$emit('dismiss')" aria-label="Dismiss">✕</button>
  </div>
</template>
