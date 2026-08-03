<script setup>
defineProps({
  items: { type: Array, default: () => ['Home', 'Recruitment', 'Job Openings'] },
});
</script>

<template>
  <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-paragraph-small text-neutral-750 dark:text-neutral-300">
    <template v-for="(item, i) in items" :key="item">
      <span :class="i === items.length - 1 ? 'text-neutral-900 dark:text-neutral-100' : ''">{{ item }}</span>
      <span v-if="i < items.length - 1" class="text-neutral-300 dark:text-neutral-600">/</span>
    </template>
  </nav>
</template>
