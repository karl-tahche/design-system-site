<script setup>
defineProps({
  modelValue: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
});
defineEmits(['update:modelValue']);

// The real, shared FormToggle.vue (4 of 5 apps) uses an un-themed stock `bg-blue-600`
// for the "on" state — a copy-pasted Flowbite snippet never wired to this design
// system. This reference component uses the RECOMMENDED fix (primary-500) rather
// than reproducing that gap — see the Storybook docs block for the real finding.
</script>

<template>
  <button
    type="button"
    role="switch"
    :aria-checked="modelValue"
    :disabled="disabled"
    @click="$emit('update:modelValue', !modelValue)"
    :class="[
      'relative h-6 w-11 rounded-full transition-colors duration-fast ease-standard disabled:cursor-not-allowed disabled:opacity-50',
      modelValue ? 'bg-primary-500' : 'bg-neutral-200',
    ]"
  >
    <span
      :class="[
        'absolute top-0.5 h-5 w-5 rounded-full border border-neutral-300 bg-white transition-transform duration-fast ease-standard',
        modelValue ? 'translate-x-[22px]' : 'translate-x-0.5',
      ]"
    />
  </button>
</template>
