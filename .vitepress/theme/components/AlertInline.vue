<script setup>
defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'success', 'warning', 'destructive', 'neutral'].includes(v),
  },
  title: { type: String, default: 'Alert title' },
  description: { type: String, default: 'A short supporting description goes here.' },
});

// Destructive's body text is confirmed at -500, not -700 like the others — a real
// asymmetry found in shared alert code across most of the suite, not a typo. Neutral
// has no real implementation to copy (the real "information" type falls back onto
// Success) — extrapolated onto the neutral ramp using the same offset pattern instead.
const styles = {
  primary: { bg: 'bg-primary-50 dark:bg-primary-900', border: 'border-primary-200 dark:border-primary-700', title: 'text-primary-800 dark:text-primary-200', body: 'text-primary-700 dark:text-primary-300' },
  success: { bg: 'bg-success-50 dark:bg-success-900', border: 'border-success-200 dark:border-success-700', title: 'text-success-800 dark:text-success-200', body: 'text-success-700 dark:text-success-300' },
  warning: { bg: 'bg-warning-50 dark:bg-warning-900', border: 'border-warning-200 dark:border-warning-700', title: 'text-warning-800 dark:text-warning-200', body: 'text-warning-700 dark:text-warning-300' },
  destructive: { bg: 'bg-destructive-50 dark:bg-destructive-900', border: 'border-destructive-200 dark:border-destructive-700', title: 'text-destructive-800 dark:text-destructive-200', body: 'text-destructive-500 dark:text-destructive-300' },
  neutral: { bg: 'bg-neutral-50 dark:bg-neutral-800', border: 'border-neutral-200 dark:border-neutral-700', title: 'text-neutral-800 dark:text-neutral-200', body: 'text-neutral-700 dark:text-neutral-300' },
};
</script>

<template>
  <div :class="['w-96 rounded-sm border px-5 py-3', styles[type].bg, styles[type].border]">
    <p :class="['text-paragraph-small-500', styles[type].title]">{{ title }}</p>
    <p :class="['text-paragraph-small mt-1', styles[type].body]">{{ description }}</p>
  </div>
</template>
