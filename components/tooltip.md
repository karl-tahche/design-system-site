# Tooltip

**Existing** — confirmed directly from Figma design context.

## Usage

<div class="ds-demo">
  <Tooltip />
</div>

```vue
<Tooltip title="Applicant score" description="Calculated from resume match and assessment results.">
  <button>Hover me</button>
</Tooltip>
```

## When to use

- A short, supplemental explanation for an icon-only control or an unfamiliar term or metric.

## When not to use

- Don't put anything a user needs to act on inside a Tooltip — it disappears on mouse-out and
  isn't reliably reachable by keyboard or touch. Use Alert Inline or Modal instead.

## Known findings

- White background, `radius.md`, `16px` padding, the confirmed `elevation.large` shadow.
- Title uses a `paragraph-xsmall-medium`-shaped style (12/15, matching `label-xsmall`); description
  uses the corrected `paragraph-xsmall` (12/16, `neutral-750`) — note its line-height is 16px, not
  the more common 20px seen elsewhere in the type scale.
