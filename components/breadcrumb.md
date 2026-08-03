# Breadcrumb

**Existing** — confirmed directly from Figma design context. Real usage is broad (page headers
across all 5 apps) but no single shared `Breadcrumb.vue` was found in the 2026-07 code audit —
each app currently hand-rolls its own markup from the same visual pattern.

## Usage

<div class="ds-demo">
  <Breadcrumb />
</div>

```vue
<Breadcrumb :items="['Home', 'Recruitment', 'Job Openings']" />
```

## When to use

- At the top of any page nested more than one level deep in navigation.
- To let a user jump back to a parent list (e.g. from a candidate profile back to Applicants).

## When not to use

- Don't use on top-level pages (Dashboard, Login) with nothing to trace back to.

## Known findings

- Type is `paragraph-small` in `neutral-750`, with a `neutral-300` slash as the separator between
  crumbs — confirmed via Figma, not yet cross-checked against a single shared component since
  none exists in code today.
- **Gap worth closing**: since every app reimplements this from scratch, a shared `Breadcrumb.vue`
  built from these tokens would remove five slightly-different copies of the same 10 lines of
  markup.
