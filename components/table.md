# Table

**Existing** — confirmed directly from Figma design context.

## Usage

<div class="ds-demo">
  <Table />
</div>

```vue
<Table />
```

## When to use

- Any multi-row, multi-column dataset a user scans or sorts (applicants, tickets, employees).

## When not to use

- Don't use for a single read-only record — that's Data Display.

## Known findings

- Header cell uses the `overline` style (uppercase, `neutral-750`) — the same style this audit
  corrected elsewhere (Table Header).
- Leading and Content cells both run `72px` tall with `24px`/`16px` padding.
- Content Cell's oddly-named `State4` Figma variant turns out to be a **fully populated row**
  (avatars, badge, progress bar, rating, actions) — not a distinct visual state, just an unclear
  internal name worth renaming in the source file.
