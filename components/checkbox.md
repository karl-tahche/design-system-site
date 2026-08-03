# Checkbox

**Recommended — new.** Not a named component in Figma's library and not documented in
`DESIGN.md` today, despite every form in all 5 apps needing one somewhere (consent checkboxes,
bulk-select in tables, multi-select filters). Modeled on shadcn-vue's Checkbox, built from tokens
already in this system rather than a new color or shape.

## Usage

<div class="ds-demo">
  <Checkbox />
</div>

```vue
<Checkbox v-model="checked" label="Remember me" />
```

## States

<div class="ds-demo flex flex-col gap-3">
  <Checkbox :model-value="false" label="Unchecked" />
  <Checkbox :model-value="true" label="Checked" />
  <Checkbox :model-value="true" disabled label="Disabled, checked" />
</div>

## When to use

- Any binary, independent choice — consent, "select all", a single filter toggle.
- Multi-select in a table or list (bulk actions).

## When not to use

- Don't use for a single on/off *setting* that takes effect immediately — that's Switch (Form
  Control), already documented.
- Don't use for mutually-exclusive choices — that's Radio Group.

## Why this is proposed, not confirmed

No shared `Checkbox.vue` was found anywhere in the 2026-07 code audit — every checkbox in
production today is either a native `<input type="checkbox">` with ad hoc classes, or built inline
per-form. This spec exists so the next one built pulls from `primary-500` (checked state) and
`radius.sm` rather than reinventing both.
