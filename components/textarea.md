# Textarea

**Recommended — new.** Input Field (Box/Line) is fully documented for single-line entry, but
nothing here yet covers multi-line text (job descriptions, interview notes, rejection reasons) —
a real, frequent need across the recruitment and HR flows in all 5 apps.

## Usage

<div class="ds-demo">
  <Textarea />
</div>

```vue
<Textarea v-model="value" placeholder="Add a note…" :rows="4" />
```

## States

<div class="ds-demo flex flex-col gap-3">
  <Textarea placeholder="Default" />
  <Textarea placeholder="Disabled" disabled />
</div>

## When to use

- Any free-text entry longer than a single line — notes, descriptions, feedback.

## Why this is proposed, not confirmed

Modeled directly on Input Field Box's already-confirmed tokens (white background, `radius.sm`,
1px `neutral-200` border, `elevation.xsmall` shadow at rest, `elevation.focus-ring` on focus) —
extended to a resizable multi-line field rather than introducing a separate visual language.
Reusing Input Field's spec here means anything already themed correctly for one carries over
automatically to the other.
