<script setup>
// NOTE: this prop is intentionally named `variant`, not `style` — `style` is a
// reserved special attribute in Vue (inline CSS), and naming a prop that
// collides with it silently breaks: v-bind="args" routes the value to the
// DOM style attribute instead of the component prop, so the class bindings
// below never see it. Found the hard way while verifying this component in
// Storybook.
const props = defineProps({
  variant: {
    type: String,
    default: 'box',
    validator: (v) => ['box', 'line'].includes(v),
  },
  label: { type: String, default: 'Label' },
  placeholder: { type: String, default: 'Type something…' },
  helperText: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  error: { type: Boolean, default: false },
  modelValue: { type: String, default: '' },
});
defineEmits(['update:modelValue']);
</script>

<template>
  <label class="flex w-64 flex-col gap-1.5">
    <span class="text-paragraph-small-500 text-neutral-900 dark:text-neutral-100">{{ label }}</span>
    <input
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="[
        'text-paragraph-small text-neutral-900 outline-none transition-colors duration-fast ease-standard placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:text-neutral-400 dark:text-neutral-100 dark:placeholder:text-neutral-600 dark:disabled:text-neutral-600',
        variant === 'box' && 'rounded-sm border bg-white px-3 py-2 shadow-xsmall disabled:shadow-none focus:shadow-focus-ring dark:bg-neutral-800 dark:shadow-none',
        variant === 'box' && !error && 'border-neutral-200 focus:border-primary-300 dark:border-neutral-700 dark:focus:border-primary-400',
        variant === 'box' && error && 'border-destructive-300 dark:border-destructive-700',
        variant === 'line' && 'border-b bg-transparent px-0 py-2.5',
        variant === 'line' && !error && 'border-neutral-200 focus:border-primary-300 dark:border-neutral-700 dark:focus:border-primary-400',
        variant === 'line' && error && 'border-destructive-300 dark:border-destructive-700',
      ]"
    />
    <span
      v-if="helperText"
      :class="['text-paragraph-small', error ? 'text-destructive-500 dark:text-destructive-400' : 'text-neutral-500 dark:text-neutral-400']"
    >
      {{ helperText }}
    </span>
  </label>
</template>
