<script setup>
import colorTokens from 'tahche-design-tokens/tokens/color.json';

const props = defineProps({
  group: { type: String, required: true },
});

const ramp = colorTokens.color[props.group];

function resolve(value) {
  const match = /^\{color\.([\w-]+)\.([\w-]+)\}$/.exec(value);
  if (!match) return value;
  return resolve(colorTokens.color[match[1]][match[2]].$value);
}

const steps = Object.entries(ramp)
  .filter(([key]) => !key.startsWith('$'))
  .map(([key, token]) => ({ key, hex: resolve(token.$value) }));
</script>

<template>
  <div>
    <h3 class="text-heading-h6 mb-3 text-neutral-900">{{ group }}</h3>
    <div class="flex flex-wrap gap-3">
      <div v-for="step in steps" :key="step.key" class="w-28">
        <div
          class="h-16 w-full rounded-sm border border-neutral-200"
          :style="{ backgroundColor: step.hex }"
        />
        <p class="text-paragraph-small-medium mt-1 text-neutral-900">{{ step.key }}</p>
        <p class="text-paragraph-xsmall text-neutral-500">{{ step.hex }}</p>
      </div>
    </div>
  </div>
</template>
