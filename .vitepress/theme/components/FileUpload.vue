<script setup>
import { ref } from 'vue';
const dragOver = ref(false);
</script>

<template>
  <div
    @dragover.prevent="dragOver = true"
    @dragleave.prevent="dragOver = false"
    @drop.prevent="dragOver = false"
    :class="[
      'flex w-96 flex-col items-center gap-2 rounded-3xl border border-solid p-6 text-center transition-colors duration-fast ease-standard',
      dragOver ? 'border-primary-300 bg-primary-50 dark:border-primary-700 dark:bg-primary-900' : 'border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800',
    ]"
  >
    <span class="text-paragraph-small-500 text-neutral-700 dark:text-neutral-300">Drag & drop a file, or click to browse</span>
    <span class="text-paragraph-xsmall text-neutral-500 dark:text-neutral-400">PDF, DOCX up to 10MB</span>
  </div>
</template>
