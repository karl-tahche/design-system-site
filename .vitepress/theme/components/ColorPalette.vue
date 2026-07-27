<script setup>
import { ref } from 'vue';
import colorTokens from 'tahche-design-tokens/tokens/color.json';

const props = defineProps({
  group: { type: String, required: true },
});

const ramp = colorTokens.color[props.group];
const heading = props.group.charAt(0).toUpperCase() + props.group.slice(1);

function resolve(value) {
  const match = /^\{color\.([\w-]+)\.([\w-]+)\}$/.exec(value);
  if (!match) return value;
  return resolve(colorTokens.color[match[1]][match[2]].$value);
}

const steps = Object.entries(ramp)
  .filter(([key]) => !key.startsWith('$'))
  .map(([key, token]) => ({
    key,
    hex: resolve(token.$value),
    // -foreground tokens are meant to be used as text color, not a background —
    // showing the accurate prefix here instead of always defaulting to bg-.
    twClass: key === 'foreground' ? `text-${props.group}-${key}` : `bg-${props.group}-${key}`,
  }));

const copiedId = ref('');
function copy(id, text) {
  navigator.clipboard?.writeText(text);
  copiedId.value = id;
  setTimeout(() => {
    if (copiedId.value === id) copiedId.value = '';
  }, 1400);
}
</script>

<template>
  <div>
    <h3 class="text-h6 text-neutral-900 dark:text-neutral-100">{{ heading }}</h3>
    <div class="mt-6 flex flex-wrap gap-x-4 gap-y-8">
      <div v-for="step in steps" :key="step.key" class="flex w-36 flex-col gap-3">
        <div
          class="h-16 w-full rounded-sm border border-neutral-200 dark:border-neutral-700"
          :style="{ backgroundColor: step.hex }"
          role="img"
          :aria-label="`${heading} ${step.key}, ${step.hex}`"
        />
        <div class="flex flex-col gap-1">
          <span class="block w-full text-left text-paragraph-small-500 text-neutral-900 dark:text-neutral-100">{{ step.key }}</span>
          <div>
            <button
              type="button"
              class="block w-full text-left font-mono text-paragraph-xsmall text-neutral-500 transition-colors hover:text-primary-500 dark:text-neutral-400 dark:hover:text-primary-300"
              :title="`Copy ${step.hex}`"
              @click="copy(`${step.key}-hex`, step.hex)"
            >{{ copiedId === `${step.key}-hex` ? 'Copied!' : step.hex }}</button>
            <button
              type="button"
              class="block w-full text-left font-mono text-paragraph-xsmall text-neutral-500 transition-colors hover:text-primary-500 dark:text-neutral-400 dark:hover:text-primary-300"
              :title="`Copy ${step.twClass}`"
              @click="copy(`${step.key}-class`, step.twClass)"
            >{{ copiedId === `${step.key}-class` ? 'Copied!' : step.twClass }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
