<script setup>
defineProps({
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: 'Add a note…' },
  disabled: { type: Boolean, default: false },
  rows: { type: Number, default: 4 },
});
defineEmits(['update:modelValue']);
</script>

<template>
  <textarea
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
    :disabled="disabled"
    :rows="rows"
    class="w-80 rounded-sm border border-neutral-200 bg-white p-3 text-paragraph-small text-neutral-900 shadow-xsmall transition-colors duration-fast ease-standard placeholder:text-neutral-500 focus:border-primary-300 focus:shadow-focus-ring focus:outline-none disabled:bg-neutral-100 disabled:text-neutral-400 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:shadow-none dark:placeholder:text-neutral-500 dark:focus:border-primary-400 dark:disabled:bg-neutral-900 dark:disabled:text-neutral-600"
  />
</template>
