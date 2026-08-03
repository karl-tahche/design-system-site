<script setup>
import radiusTokens from 'tahche-design-tokens/tokens/radius.json';

const steps = Object.entries(radiusTokens.radius)
  .filter(([key]) => !key.startsWith('$'))
  .map(([key, token]) => ({ key, value: token.$value }));
</script>

# Radius

`sm`/`md`/`full` are confirmed directly against real components (Button, Input Field, Modal,
Stat, Tooltip, Avatar, Badge, Side Navigation, File Upload). `lg`/`xl`/`2xl`/`3xl` are inferred
from real, high-volume arbitrary `rounded-[Npx]` usage in the 5 codebases rather than a Figma
spec — no dedicated border-radius foundation page exists there.

**Two real corrections, 2026-07-25**: File Upload was originally claimed to confirm `sm` (6px) —
a real-code audit found every real copy actually uses `3xl` (20px). Side Navigation's active item
was claimed at `sm` — real code uses `md` (8px).

None of the 5 apps' Tailwind configs define a custom `borderRadius` today — wiring this scale in
is a real prerequisite for adoption, not just documentation.

Values rendered directly from `tahche-design-tokens/tokens/radius.json`.

**Theme-agnostic** — a corner radius doesn't change by theme; no dark-mode variant needed here.

<div class="flex flex-wrap gap-6">
  <div v-for="step in steps" :key="step.key" class="text-center">
    <div class="h-20 w-20 bg-primary-100" :style="{ borderRadius: step.value }" />
    <p class="text-paragraph-small-500 mt-2 text-neutral-900 dark:text-neutral-100">{{ step.key }}</p>
    <p class="text-paragraph-xsmall text-neutral-500 dark:text-neutral-400">{{ step.value }}</p>
  </div>
</div>
