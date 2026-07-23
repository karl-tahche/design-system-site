# Accordion

Confirmed directly from live Figma design context.

## Usage

<div class="ds-demo">
  <Accordion />
</div>

```vue
<Accordion title="Accordion title" description="Expanded content goes here." />
```

## When to use

- To let a user progressively disclose supporting detail without leaving the page.

## Known findings

- Padding is a real, unusual asymmetry — `26px` vertical, `16px` horizontal — confirmed as real,
  not a typo.
- Title uses `paragraph-large-semibold` (`neutral-800`); description uses `paragraph-small`
  (`neutral-750`) — the same undocumented gray this whole audit surfaced, used more often than
  `neutral-700` itself.
