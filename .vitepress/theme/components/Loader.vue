<script setup>
defineProps({
  size: { type: String, default: 'md', validator: (v) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(v) },
  // 'primary' = career-web's re-themed spinner; 'legacy' = the untokenized
  // extended-loader-blue used by the other 3 apps today. See docs page.
  color: { type: String, default: 'primary', validator: (v) => ['primary', 'legacy'].includes(v) },
});
const sizes = { xs: 'h-2.5 w-2.5', sm: 'h-5 w-5', md: 'h-10 w-10', lg: 'h-[60px] w-[60px]', xl: 'h-20 w-20' };
</script>

<template>
  <span
    role="status"
    aria-label="Loading"
    :class="[
      'inline-block animate-spin rounded-full border-2 border-t-transparent',
      sizes[size],
      color === 'primary' ? 'border-primary-500 dark:border-primary-300' : 'border-extended-loader-blue',
    ]"
  />
</template>
