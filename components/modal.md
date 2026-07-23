<script setup>
import { ref } from 'vue';

const openHorizontal = ref(false);
const openVertical = ref(false);
</script>

# Modal

Confirmed directly from live Figma design context, both alignment variants.

## Usage

<div class="ds-demo">
  <Button label="Open modal" @click="openHorizontal = true" />
  <Modal alignment="horizontal" heading="Modal heading" description="A short description of what this modal is for." :open="openHorizontal" @close="openHorizontal = false" />
</div>

```vue
<Modal alignment="horizontal" heading="Modal heading" description="…" :open="open" @close="open = false" />
```

## Vertical

<div class="ds-demo">
  <Button label="Open vertical modal" @click="openVertical = true" />
  <Modal alignment="vertical" heading="Modal heading" description="A short description of what this modal is for." :open="openVertical" @close="openVertical = false" />
</div>

## When to use

- For a focused task or confirmation that needs the user's full attention before continuing.

## When not to use

- Don't reach for a Modal as a first instinct for every interruption — it's usually the lazy
  answer. Exhaust inline or progressive-disclosure alternatives first.

## Known findings

- Vertical's action buttons were resolved 2026-07-25: they previously mixed Large button padding
  with Medium's height. Snapped to Medium consistently, matching Horizontal's already-correct
  pattern.
