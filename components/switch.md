# Switch (Form Control)

Confirmed 2026-07-25 via a real-code audit of a shared form-toggle implementation, present across
most of the product suite.

## Usage

<div class="ds-demo">
  <Switch />
</div>

```vue
<Switch v-model="enabled" />
```

## States

<div class="ds-demo flex flex-wrap items-center gap-6">
  <Switch />
  <Switch :model-value="true" />
  <Switch disabled />
</div>

## When to use

- For an immediate, self-contained on/off setting — no separate "Save" action needed.

## ⚠️ Known, un-resolved real finding

Every real copy of this component uses Tailwind's stock `bg-blue-600` for its "on" state — a
copy-pasted third-party (Flowbite-style) snippet that was **never re-themed** to this design
system's `primary-500`. **This reference component uses the recommended fix (`primary-500`),
not what's actually shipped today** — click the switch above to see the intended, corrected
behavior, and treat this as a real gap still to be fixed across the product suite, not an
already-resolved one.
