# Data Display

**Existing** — real but thin evidence: found in `EmployeeDetails.vue` (`tahche-client-dashboard`,
3 usage sites) — the only clean match anywhere in the 5 apps for a genuinely read-only
(not editable, not tabular) label/value field display.

## Usage

<div class="ds-demo">
  <DataDisplay />
</div>

```vue
<DataDisplay :rows="[{ label: 'Employee ID', value: 'TH-04821' }]" />
```

## When to use

- A read-only profile or record view (employee details, candidate summary) where fields aren't
  editable inline and don't need a table.

## When not to use

- Don't use for tabular, multi-row, sortable data — that's Table.
- Don't use where a field is directly editable — that calls for Input Field instead.

## Known findings

- Label and value share the **exact same text color** (`neutral-800`), differentiated only by
  font-weight — regular for the label, semibold for the value. `data-display-value` uses
  `paragraph-small-500` (Medium/500) as the nearest existing token, one weight-tier lighter than
  the true semibold seen in the one real source file — revisit if a second real usage surfaces.
- Rows are separated by margin only (`32px`) — no divider rule.
- Real empty-state fallback renders in `neutral-500`.
