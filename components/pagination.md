# Pagination

**Existing** — real, but **two competing active-page patterns exist, not one**. Both corrected
here from earlier Figma-only claims that didn't survive a real-code audit.

## Usage

<div class="ds-demo">
  <Pagination />
</div>

```vue
<Pagination :pages="5" variant="outline" />
```

## Variants

<div class="ds-demo flex flex-col gap-4">
  <Pagination variant="outline" />
  <Pagination variant="filled" />
</div>

## When to use

- `outline` (transparent fill, `primary-500` border/text) is the **real majority default** —
  career-web, client-web, client-dashboard, and recruitment-portal's V1 all use it.
- `filled` (`primary-500` background, white text) is a real, documented alternate — used by
  recruitment-portal's V2 — not the default; use it only to match that specific surface.

## Known findings

- **Corrected**: inactive page text is real `neutral-700` or `neutral-500` — **not** `neutral-750`
  as an earlier pass claimed.
- Prev/next arrows disable correctly at the first/last page in every real implementation,
  recoloring to muted neutral with reduced opacity.
