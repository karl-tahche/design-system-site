<script setup>
defineProps({
  modelValue: { type: Boolean, default: false },
  label: { type: String, default: 'Remember me' },
  disabled: { type: Boolean, default: false },
});
defineEmits(['update:modelValue']);
</script>

<template>
  <label :class="['inline-flex items-center gap-2 text-paragraph-small text-neutral-900 dark:text-neutral-100', disabled && 'cursor-not-allowed opacity-50']">
    <button
      type="button"
      role="checkbox"
      :aria-checked="modelValue"
      :disabled="disabled"
      @click="$emit('update:modelValue', !modelValue)"
      :class="[
        'flex h-5 w-5 items-center justify-center rounded-sm border transition-colors duration-fast ease-standard',
        modelValue ? 'border-primary-500 bg-primary-500 text-white' : 'border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-800',
      ]"
    >
      <span v-if="modelValue" class="text-[12px] leading-none">✓</span>
    </button>
    {{ label }}
  </label>
</template>
