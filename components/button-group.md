# Button Group

**Existing** — real segmented-control behavior confirmed via `ListViewToggle.vue`
(`tahche-recruitment-portal`, 1 usage site). The literally-named `ButtonGroup.vue` component
found in 3 of 5 apps is **not** this pattern — it's a bare, unstyled `flex` wrapper for grouping
*unrelated* action buttons (e.g. "Edit" + a dropdown chevron), with no background, border, or
shadow of its own.

## Usage

<div class="ds-demo">
  <ButtonGroup />
</div>

```vue
<ButtonGroup :options="['List', 'Board', 'Calendar']" />
```

## When to use

- A segmented toggle between mutually-exclusive views of the same data (List/Board/Calendar,
  Day/Week/Month).

## When not to use

- Don't reach for this when grouping *unrelated* actions side by side — that's what the real,
  literal `ButtonGroup.vue` (a plain layout wrapper) already covers; it needs no token spec of
  its own since it has no visual identity.

## Known findings

- Track: `neutral-100` background, `radius.md` (8px), `4px` padding — real and confirmed.
- Active segment: white background, `primary-600` text, `radius.sm` (6px), visually matching
  `elevation.xsmall`'s shape — though the real class used in code is Tailwind's generic
  `shadow-sm`, not this project's own named `shadow-xsmall` utility. A byte-level gap worth
  closing, not just a visual coincidence.
