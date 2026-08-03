<script setup>
import { ref } from 'vue';
defineProps({
  options: { type: Array, default: () => ['List', 'Board', 'Calendar'] },
});
const active = ref(0);
</script>

<template>
  <div class="inline-flex items-center gap-1 rounded-md bg-neutral-100 p-1 dark:bg-neutral-800">
    <button
      v-for="(opt, i) in options"
      :key="opt"
      type="button"
      @click="active = i"
      :class="[
        'rounded-sm px-3 py-1.5 text-paragraph-small-500 transition-colors duration-fast ease-standard',
        active === i ? 'bg-white text-primary-600 shadow-xsmall dark:bg-neutral-700 dark:text-primary-300' : 'text-neutral-700 dark:text-neutral-400',
      ]"
    >
      {{ opt }}
    </button>
  </div>
</template>
