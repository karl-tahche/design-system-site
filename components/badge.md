# Badge

Confirmed via a shared `Badge.vue` found byte-identical across 4 of the 5 apps.

## Usage

<div class="ds-demo">
  <Badge />
</div>

```vue
<Badge variant="filled" type="primary" label="Badge" />
```

## Filled

<div class="ds-demo flex flex-wrap items-center gap-3">
  <Badge type="primary" label="Primary" />
  <Badge type="success" label="Success" />
  <Badge type="warning" label="Warning" />
  <Badge type="destructive" label="Destructive" />
  <Badge type="neutral" label="Neutral" />
</div>

## Outlined

<div class="ds-demo flex flex-wrap items-center gap-3">
  <Badge variant="outlined" type="primary" label="Primary" />
  <Badge variant="outlined" type="success" label="Success" />
  <Badge variant="outlined" type="destructive" label="Destructive" />
</div>

## Accent

<div class="ds-demo flex flex-wrap items-center gap-3">
  <Badge variant="accent" type="primary" label="Primary" />
  <Badge variant="accent" type="success" label="Success" />
</div>

## When to use

- Filled, for a status that needs the most visual weight (an active state, a count).
- Outlined, for a secondary-emphasis tag alongside other content (real and load-bearing for
  Primary/Success/Destructive).
- Accent, for a quieter tint when a solid fill would be too loud.

## When not to use

- Don't reach for `Outlined` on Warning or Neutral — no real implementation of either exists in
  any of the 5 apps; this reference extrapolates them from the same pattern rather than
  presenting them as equally confirmed.
- Don't assume Destructive's real class is `destructive-*` — the shipped code actually uses
  Tailwind's stock `bg-red-500`. Harmless only because `red-500` and `destructive-500` are the
  same value today, not a guarantee.

## Known findings

- Filled Success/Warning/Destructive originally used white text in this reference too, then
  corrected — white fails contrast on all three (2.15–3.76:1); they use each ramp's own
  `-foreground` token instead.
- Accent has no consistent real implementation anywhere — modeled on shadcn-vue's `secondary`
  badge convention (tinted background, darker text) instead of guessed from thin evidence.
