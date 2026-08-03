# Progress Step

**Not yet built** — a name from Figma's real component library with no matching real
implementation.

## What exists today

No horizontal step-progress UI exists anywhere in the 5 apps — only step-*index* logic (a ref
that swaps which form is visible), with zero visual step indicator alongside it. A visually
adjacent but functionally different pattern — numbered circular badges for approval-stage chains,
no connecting lines — exists in one app, but it isn't the same component and shouldn't be
mistaken for it.

**Don't invent a token for a component that isn't built yet.**

## Recommended shape

Given the recruitment portal's own multi-step flows (job posting wizard, applicant stage
progression), a real Progress Step primitive is a reasonable near-term addition: numbered circles
(`primary-500` fill + white text for completed/current, `neutral-200` for upcoming) connected by a
`neutral-200` line, each with a `paragraph-small-500` label beneath. All colors and type already
exist as tokens — only the connecting-line layout is new.

```vue
<!-- illustrative only — not yet implemented anywhere -->
<ProgressStep :steps="['Details', 'Requirements', 'Review', 'Publish']" :current="2" />
```

## Status

Open. Prototype against the job-posting wizard first, since it's the clearest real candidate use
case, then promote to a shared component if it proves out.
