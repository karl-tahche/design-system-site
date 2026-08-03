<script setup>
import { ref } from 'vue';
const props = defineProps({
  pages: { type: Number, default: 5 },
  variant: { type: String, default: 'outline', validator: (v) => ['outline', 'filled'].includes(v) },
});
const current = ref(1);
</script>

<template>
  <div class="flex items-center gap-1">
    <button type="button" :disabled="current === 1" @click="current--" class="px-2 text-neutral-700 disabled:text-neutral-300 dark:text-neutral-300 dark:disabled:text-neutral-600" aria-label="Previous page">‹</button>
    <button
      v-for="p in pages"
      :key="p"
      type="button"
      @click="current = p"
      :class="[
        'h-8 w-8 rounded-sm text-paragraph-small-500 transition-colors duration-fast ease-standard',
        current === p
          ? variant === 'filled'
            ? 'bg-primary-500 text-white'
            : 'border border-primary-500 text-primary-500 dark:border-primary-300 dark:text-primary-300'
          : 'text-neutral-700 dark:text-neutral-300',
      ]"
    >
      {{ p }}
    </button>
    <button type="button" :disabled="current === pages" @click="current++" class="px-2 text-neutral-700 disabled:text-neutral-300 dark:text-neutral-300 dark:disabled:text-neutral-600" aria-label="Next page">›</button>
  </div>
</template>
