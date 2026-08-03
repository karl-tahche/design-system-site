<script setup>
import { ref } from 'vue';

defineProps({
  title: { type: String, default: 'Accordion title' },
  description: {
    type: String,
    default: 'Expanded content goes here — a paragraph of supporting detail.',
  },
});

const expanded = ref(false);
</script>

<template>
  <div class="w-96 border-b border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800">
    <button
      type="button"
      class="flex w-full items-center justify-between px-4 py-[26px] text-left"
      @click="expanded = !expanded"
    >
      <span class="text-paragraph-large-600 text-neutral-800 dark:text-neutral-200">{{ title }}</span>
      <span class="text-neutral-500 dark:text-neutral-400">{{ expanded ? '−' : '+' }}</span>
    </button>
    <p v-if="expanded" class="text-paragraph-small px-4 pb-4 text-neutral-750 dark:text-neutral-300">
      {{ description }}
    </p>
  </div>
</template>
