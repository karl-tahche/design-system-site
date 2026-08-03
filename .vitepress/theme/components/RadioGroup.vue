<script setup>
import { ref } from 'vue';
const props = defineProps({
  options: { type: Array, default: () => ['Full-time', 'Part-time', 'Contract'] },
});
const selected = ref(props.options[0]);
</script>

<template>
  <div class="flex flex-col gap-3">
    <label v-for="opt in options" :key="opt" class="inline-flex items-center gap-2 text-paragraph-small text-neutral-900 dark:text-neutral-100">
      <button
        type="button"
        role="radio"
        :aria-checked="selected === opt"
        @click="selected = opt"
        :class="[
          'flex h-5 w-5 items-center justify-center rounded-full border transition-colors duration-fast ease-standard',
          selected === opt ? 'border-primary-500 dark:border-primary-300' : 'border-neutral-300 dark:border-neutral-600',
        ]"
      >
        <span v-if="selected === opt" class="h-2.5 w-2.5 rounded-full bg-primary-500 dark:bg-primary-300" />
      </button>
      {{ opt }}
    </label>
  </div>
</template>
