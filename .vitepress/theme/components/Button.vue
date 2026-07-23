<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'outlined', 'tertiary', 'link'].includes(v),
  },
  size: {
    type: String,
    default: 'large',
    validator: (v) => ['large', 'medium', 'small'].includes(v),
  },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  label: { type: String, default: 'Button' },
});
</script>

<template>
  <button
    type="button"
    :disabled="disabled || loading"
    :class="[
      'inline-flex items-center justify-center gap-2 rounded-sm transition-colors duration-fast ease-standard focus-visible:outline-none focus-visible:shadow-focus-ring',
      size === 'large' && 'h-12 px-5 py-3 text-paragraph-medium-medium',
      size === 'medium' && 'h-10 px-4 py-2.5 text-paragraph-small-medium',
      size === 'small' && 'h-7 px-3 py-1.5 text-label-xsmall',
      variant === 'link' && 'h-auto py-3 px-0',
      variant === 'primary' && !disabled && !loading && 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-600 active:text-primary-200',
      variant === 'primary' && (disabled || loading) && 'bg-primary-400 text-white cursor-not-allowed',
      variant === 'secondary' && 'bg-primary-50 text-primary-500 disabled:opacity-50',
      variant === 'outlined' && 'border border-primary-500 bg-transparent text-primary-500 disabled:opacity-50',
      variant === 'tertiary' && 'border border-neutral-200 bg-white text-neutral-700 disabled:opacity-50',
      variant === 'link' && 'bg-transparent text-primary-500 disabled:opacity-50',
    ]"
  >
    <span
      v-if="loading"
      class="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
      aria-hidden="true"
    />
    <slot>{{ label }}</slot>
  </button>
</template>
