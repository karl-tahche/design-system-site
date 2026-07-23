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
    class="flex shrink-0 items-center justify-center overflow-hidden rounded-full border-[1.5px] border-white"
    :class="initials || !src ? 'bg-primary-50 text-primary-500' : 'bg-neutral-100'"
  >
    <img v-if="src" :src="src" class="h-full w-full object-cover" alt="" />
    <span v-else-if="initials" class="text-paragraph-medium-medium">{{ initials }}</span>
  </div>
</template>
