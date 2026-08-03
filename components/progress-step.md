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
<!-- illustrative only — not yet implemented in any of the 5 real apps -->
<ProgressStep :steps="['Details', 'Requirements', 'Review', 'Publish']" :current="2" />
```

## Status

Prototyped — not yet in any of the 5 real apps. The first real, working implementation lives in
`tahche-interview-prep-demo` (`src/components/ProgressStep.vue`), a standalone test app built to
exercise the design system end to end (see [Adoption](/philosophies/adoption)), using the exact
shape recommended above. `current` there is 0-based, matching typical JS convention — worth
carrying that convention forward if this gets promoted into any of the 5 real apps, to avoid the
1-based-vs-0-based ambiguity the original illustrative example above left open.

Still open: promoting this from "prototyped in a test app" to "Existing" needs a real candidate
inside one of the 5 apps — the job-posting wizard remains the clearest fit, since it's a genuine
multi-step flow with no visual step indicator today.
