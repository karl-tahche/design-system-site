<script setup>
import { ref } from 'vue';
const items = ['Dashboard', 'Applicants', 'Job Openings', 'Reports'];
const active = ref(0);
</script>

<template>
  <!-- Item states (active/hover/inactive) are real and confirmed; the dark
       container chrome shown here is illustrative only, not itself audited. -->
  <nav class="flex w-56 flex-col gap-1 rounded-md bg-primary-900 p-2">
    <button
      v-for="(item, i) in items"
      :key="item"
      type="button"
      @click="active = i"
      :class="[
        'rounded-md px-3 py-2 text-left text-paragraph-small-500 transition-colors duration-fast ease-standard',
        active === i ? 'bg-secondary-500 text-primary-800' : 'text-white hover:font-semibold hover:text-secondary-300',
      ]"
    >
      {{ item }}
    </button>
  </nav>
</template>
