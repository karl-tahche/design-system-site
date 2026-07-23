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
// asymmetry found in SnackBar.vue across 4 apps, not a typo. Neutral has no real
// implementation to copy (the real "information" type falls back onto Success) —
// extrapolated onto the neutral ramp using the same offset pattern instead.
const styles = {
  primary: { bg: 'bg-primary-50', border: 'border-primary-200', title: 'text-primary-800', body: 'text-primary-700' },
  success: { bg: 'bg-success-50', border: 'border-success-200', title: 'text-success-800', body: 'text-success-700' },
  warning: { bg: 'bg-warning-50', border: 'border-warning-200', title: 'text-warning-800', body: 'text-warning-700' },
  destructive: { bg: 'bg-destructive-50', border: 'border-destructive-200', title: 'text-destructive-800', body: 'text-destructive-500' },
  neutral: { bg: 'bg-neutral-50', border: 'border-neutral-200', title: 'text-neutral-800', body: 'text-neutral-700' },
};
</script>

<template>
  <div :class="['w-96 rounded-sm border px-5 py-3', styles[type].bg, styles[type].border]">
    <p :class="['text-paragraph-small-medium', styles[type].title]">{{ title }}</p>
    <p :class="['text-paragraph-small mt-1', styles[type].body]">{{ description }}</p>
  </div>
</template>
