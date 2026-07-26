<script setup>
import { ref } from 'vue';

// `variant`, not `style` — `style` collides with Vue's reserved inline-style
// attribute and silently never reaches the component as a prop. See
// InputField.vue for the full story.
const props = defineProps({
  variant: {
    type: String,
    default: 'pill',
    validator: (v) => ['line', 'pill'].includes(v),
  },
  tabs: {
    type: Array,
    default: () => ['Overview', 'Activity', 'Settings'],
  },
});

const active = ref(0);
</script>

<template>
  <div class="inline-flex gap-1">
    <button
      v-for="(tab, i) in tabs"
      :key="tab"
      type="button"
      @click="active = i"
      :class="[
        'text-paragraph-small-500 transition-colors duration-fast ease-standard',
        variant === 'line' && 'border-b-2 px-4 py-2',
        variant === 'line' && (active === i ? 'border-primary-500' : 'border-transparent'),
        variant === 'pill' && 'rounded-sm px-3 py-2',
        active === i ? 'bg-primary-500 text-white' : 'text-neutral-750 hover:bg-primary-50',
      ]"
    >
      {{ tab }}
    </button>
  </div>
</template>
