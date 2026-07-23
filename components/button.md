# Button

Confirmed directly from live Figma design context, checked against the full Size × Type × State
matrix — not an inference. Radius is `6px` (`rounded.sm`) on every variant and size.

## Usage

<div class="ds-demo">
  <Button />
</div>

```vue
<Button variant="primary" size="large" label="Button" />
```

## Variants

<div class="ds-demo flex flex-wrap items-center gap-3">
  <Button variant="primary" label="Primary" />
  <Button variant="secondary" label="Secondary" />
  <Button variant="outlined" label="Outlined" />
  <Button variant="tertiary" label="Tertiary" />
  <Button variant="link" label="Link" />
</div>

## Sizes

<div class="ds-demo flex flex-wrap items-center gap-3">
  <Button size="large" label="Large" />
  <Button size="medium" label="Medium" />
  <Button size="small" label="Small" />
</div>

## States

<div class="ds-demo flex flex-wrap items-center gap-3">
  <Button disabled label="Disabled" />
  <Button loading label="Loading…" />
</div>

## When to use

- Primary, once per view for the single most important action.
- Secondary/Outlined/Tertiary for supporting actions alongside a Primary button.
- Link for the lowest-emphasis action — text and icon only, no background or border.

## When not to use

- Don't use more than one Primary button in the same view — it stops meaning "the" primary
  action.
- Don't hand-pair a size utility with a separate weight utility for the label; this design
  system ships composite `.text-{style}` classes specifically to prevent that kind of drift.

## Known findings

- Disabled uses `primary-400` background (bumped 2026-07-25 from Figma's literal `primary-300`
  for perceptual clarity — WCAG's inactive-component exception means this was never a compliance
  requirement, just a legibility improvement).
- Focus has zero real implementation in any of the 5 apps today — this reference applies
  `elevation.focus-ring` as the recommended fix.
- Loading reuses Disabled's appearance plus a spinner beside the label — it is not a fourth
  distinct color state.
