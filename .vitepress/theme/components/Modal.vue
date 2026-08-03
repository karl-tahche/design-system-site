<script setup>
import Button from './Button.vue';

defineProps({
  alignment: {
    type: String,
    default: 'horizontal',
    validator: (v) => ['horizontal', 'vertical'].includes(v),
  },
  heading: { type: String, default: 'Modal heading' },
  description: { type: String, default: 'A short description of what this modal is for.' },
  open: { type: Boolean, default: false },
});
defineEmits(['close']);
</script>

<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div
      :class="[
        'rounded-sm bg-white p-6 shadow-xlarge dark:bg-neutral-800 dark:border dark:border-neutral-700',
        alignment === 'horizontal' ? 'w-[512px]' : 'w-96',
      ]"
    >
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-3">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-500 dark:bg-primary-900 dark:text-primary-300">
            ●
          </div>
          <div>
            <div role="heading" aria-level="2" class="text-paragraph-large-500 text-neutral-900 dark:text-neutral-100">{{ heading }}</div>
            <span class="block text-paragraph-small text-neutral-700 dark:text-neutral-300">{{ description }}</span>
          </div>
        </div>
        <button type="button" class="text-neutral-500 dark:text-neutral-400" @click="$emit('close')" aria-label="Close">✕</button>
      </div>
      <div class="mt-8 flex justify-end gap-2">
        <Button variant="tertiary" size="medium" label="Cancel" @click="$emit('close')" />
        <Button variant="primary" size="medium" label="Confirm" @click="$emit('close')" />
      </div>
    </div>
  </div>
</template>
