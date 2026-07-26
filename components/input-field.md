# Input Field

Confirmed directly from live Figma design context. Both `Box` and `Line` styles share the same
type ramp: label is `paragraph-small-500`, value/placeholder/helper is `paragraph-small`.

## Usage

Try typing below — this is a real, functioning `<input>`, not a static mockup.

<div class="ds-demo">
  <InputField />
</div>

```vue
<InputField variant="box" label="Label" placeholder="Type something…" />
```

## Variants

<div class="ds-demo flex flex-wrap gap-8">
  <InputField variant="box" label="Box" />
  <InputField variant="line" label="Line" />
</div>

## States

<div class="ds-demo flex flex-wrap gap-8">
  <InputField label="With helper text" helper-text="We’ll never share this." />
  <InputField label="Error" error helper-text="This field is required." />
  <InputField label="Disabled" disabled model-value="Not editable" />
</div>

## When to use

- `Box` (bordered) as the default for standalone forms.
- `Line` (bottom-border only) where a lighter, denser look fits better — e.g. inside a table
  cell.

## When not to use

- Don't add a focus ring to `Line` — it's a real, deliberate difference from `Box`, not an
  inconsistency to fix. `Line` only changes its border color on focus.

## Known findings

- `Box`'s focus ring was reconciled 2026-07-25: the token now used (`elevation.focus-ring`, a
  translucent `primary-500` ring) replaced an earlier Figma-only value that had zero real usage
  anywhere in the 5 apps.
