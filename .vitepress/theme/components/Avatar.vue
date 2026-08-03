<script setup>
defineProps({
  size: { type: Number, default: 40 },
  initials: { type: String, default: '' },
  src: { type: String, default: '' },
});
</script>

<template>
  <div
    :style="{ width: size + 'px', height: size + 'px' }"
    class="flex shrink-0 items-center justify-center overflow-hidden rounded-full border-[1.5px] border-white dark:border-neutral-900"
    :class="initials || !src ? 'bg-primary-50 text-primary-500 dark:bg-primary-900 dark:text-primary-300' : 'bg-neutral-100 dark:bg-neutral-800'"
  >
    <img v-if="src" :src="src" class="h-full w-full object-cover" alt="" />
    <span v-else-if="initials" class="text-paragraph-medium-500">{{ initials }}</span>
  </div>
</template>
