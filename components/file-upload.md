# File Upload

**Existing** — confirmed via `FormUploadBox.vue`, shared across 4 of 5 apps (~11 real usage
sites).

## Usage

<div class="ds-demo">
  <FileUpload />
</div>

```vue
<FileUpload />
<!-- drag a file over the demo above to see the drag-over state -->
```

## When to use

- Resume/document upload, attachment fields on a form.

## When not to use

- Don't use `radius.sm` for this component — see Known findings below; every real copy uses a
  much larger radius than this file originally claimed.

## Known findings

- **Corrects an earlier Figma-only claim**: this component does **not** confirm `radius.sm` (6px)
  as previously documented — every real copy uses an explicit `20px` (`radius.3xl`), overriding
  Tailwind's own `rounded-lg` class present in the same markup.
- White background, solid `1px` `neutral-200` border — **not dashed**, despite that being the
  more common convention elsewhere.
- Drag-over state (`primary-50` background, `primary-300` border) exists only in client-web's
  fullest copy; the other 3 real copies have no drag-state styling at all.
- File-type icons are colored by extension (`primary-500` for docs, a stock `red-500` — same
  value as `destructive-500` — for PDF/PPT, `success-400` for spreadsheets) — the same
  stock-class-matches-token-value pattern already flagged for Badge's Destructive variant.
