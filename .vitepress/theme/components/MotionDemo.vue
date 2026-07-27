<script setup>
import { ref } from 'vue';
import motionTokens from 'tahche-design-tokens/tokens/motion.json';

// motion.duration/motion.easing both carry a $description metadata key
// alongside the real steps — filter it out or it renders as a bogus 4th row.
const durations = Object.fromEntries(
  Object.entries(motionTokens.motion.duration).filter(([key]) => !key.startsWith('$'))
);
const easings = Object.fromEntries(
  Object.entries(motionTokens.motion.easing).filter(([key]) => !key.startsWith('$'))
);

const runId = ref(0);

function replay() {
  runId.value += 1;
}
</script>

<template>
  <div class="flex flex-col gap-8">
    <div>
      <p class="text-paragraph-small-500 mb-3 text-neutral-900 dark:text-neutral-100">
        Duration + easing — click Replay, watch the dot cross the track
      </p>
      <button
        type="button"
        class="text-paragraph-small-500 mb-4 rounded-sm bg-primary-500 px-4 py-2 text-white"
        @click="replay"
      >
        Replay
      </button>
      <div class="flex flex-col gap-4">
        <div
          v-for="(duration, name) in durations"
          :key="name"
          class="flex items-center gap-4"
        >
          <span class="text-paragraph-small w-40 text-neutral-700 dark:text-neutral-300">
            {{ name }} ({{ duration.$value }}, {{ easings.standard.$value }})
          </span>
          <div class="relative h-3 w-64 rounded-full bg-neutral-100 dark:bg-neutral-800">
            <div
              :key="runId"
              class="absolute left-0 top-0 h-3 w-3 rounded-full bg-primary-500 motion-run"
              :style="{
                animationDuration: duration.$value,
                animationTimingFunction: easings.standard.$value,
              }"
            />
          </div>
        </div>
      </div>
    </div>

    <div>
      <p class="text-paragraph-small-500 mb-3 text-neutral-900 dark:text-neutral-100">
        Loader rotation — 1s, {{ easings.linear.$value }} (a duration deliberately
        outside the fast/base/slow scale above)
      </p>
      <div class="h-10 w-10 animate-spin rounded-full border-4 border-primary-200 border-t-primary-500" />
    </div>
  </div>
</template>

<style scoped>
@keyframes motion-run-keyframes {
  from {
    left: 0;
  }
  to {
    left: calc(100% - 0.75rem);
  }
}
.motion-run {
  animation-name: motion-run-keyframes;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
</style>
