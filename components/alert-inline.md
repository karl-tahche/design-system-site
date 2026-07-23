# Alert Inline

Originally Figma-confirmed for Primary only; the other 4 types confirmed 2026-07-25 by real
code.

## Usage

<div class="ds-demo">
  <AlertInline />
</div>

```vue
<AlertInline type="primary" title="Alert title" description="A short supporting description." />
```

## Types

<div class="ds-demo flex flex-col gap-4">
  <AlertInline type="primary" />
  <AlertInline type="success" title="Changes saved" description="Your updates were saved successfully." />
  <AlertInline type="warning" title="Heads up" description="This action can’t be undone." />
  <AlertInline type="destructive" title="Something went wrong" description="Please try again or contact support." />
  <AlertInline type="neutral" title="For your information" description="A neutral, non-urgent notice." />
</div>

## When to use

- Inline, contextual messaging tied to the surface it appears on (a form validation summary, a
  page-level notice).

## When not to use

- Don't use Destructive for anything less than a real failure — its body text is confirmed one
  shade darker than Success/Warning (`destructive-500` vs. `-700`), a real asymmetry, not a
  typo, worth respecting rather than "fixing" to match.
- Don't copy real code's "information" pattern for Neutral — it's actually a fallback onto the
  Success ramp in the shipped apps, not a genuine neutral treatment. This reference extrapolates
  a real neutral version instead of reproducing that fallback.

## Known findings

- The bg-50/border-200/text-800(title)/text-700(body) pattern holds consistently for Success,
  Warning, and Destructive — real, repeated evidence via `SnackBar.vue`, identical across 4
  independent codebases.
