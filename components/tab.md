# Tab

Confirmed 2026-07-25 via a real-code audit of a shared Tab implementation used across most of the
product suite.

## Usage

<div class="ds-demo">
  <Tab />
</div>

```vue
<Tab variant="pill" :tabs="['Overview', 'Activity', 'Settings']" />
```

## Variants

<div class="ds-demo flex flex-col gap-6">
  <Tab variant="pill" />
  <Tab variant="line" />
</div>

## When to use

- To switch between views of equivalent importance within the same context.

## When not to use

- Don't build a bottom-border-only "Line" style expecting it to match Figma's original
  documentation — a 2026-07-25 audit found **zero real evidence** of any bottom-border/underline
  Tab treatment anywhere in code. Every real implementation uses the same solid-fill swap
  regardless of which named style it's meant to be. This is a genuine, still-open discrepancy
  between Figma and code, not silently resolved.

## Known findings

- `aria-selected` is absent from every real Tab implementation across all 5 apps — a real
  accessibility gap, not a token question.
