<script setup>
defineProps({
  variant: {
    type: String,
    default: 'filled',
    validator: (v) => ['filled', 'outlined', 'accent'].includes(v),
  },
  type: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'success', 'warning', 'destructive', 'neutral'].includes(v),
  },
  label: { type: String, default: 'Badge' },
});

// filled-neutral, outlined-warning, and outlined-neutral have no real evidence
// anywhere in the 5 apps (see DESIGN.md's Badge section) — shown here anyway for
// completeness, but flagged on this component's docs page, not silently presented
// as equally confirmed.
const filled = {
  primary: 'bg-primary-500 text-white',
  success: 'bg-success-500 text-success-foreground',
  warning: 'bg-warning-500 text-warning-foreground',
  destructive: 'bg-destructive-500 text-destructive-foreground',
  neutral: 'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100',
};
const outlined = {
  primary: 'border border-primary-200 text-primary-500 dark:border-primary-700 dark:text-primary-300',
  success: 'border border-success-200 text-success-500 dark:border-success-700 dark:text-success-300',
  warning: 'border border-neutral-200 text-neutral-800 dark:border-neutral-700 dark:text-neutral-200',
  destructive: 'border border-destructive-200 text-destructive-500 dark:border-destructive-700 dark:text-destructive-300',
  neutral: 'border border-neutral-200 text-neutral-800 dark:border-neutral-700 dark:text-neutral-200',
};
const accent = {
  primary: 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300',
  success: 'bg-success-100 text-success-700 dark:bg-success-900 dark:text-success-300',
  warning: 'bg-warning-100 text-warning-700 dark:bg-warning-900 dark:text-warning-300',
  destructive: 'bg-destructive-100 text-destructive-700 dark:bg-destructive-900 dark:text-destructive-300',
  neutral: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300',
};
</script>

<template>
  <span
    :class="[
      'inline-flex items-center rounded-full px-4 py-1.5 text-paragraph-small-500',
      variant === 'filled' && filled[type],
      variant === 'outlined' && outlined[type],
      variant === 'accent' && accent[type],
    ]"
  >
    <slot>{{ label }}</slot>
  </span>
</template>
