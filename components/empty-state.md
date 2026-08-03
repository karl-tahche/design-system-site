# Empty State

**Recommended — new.** Every list/table view in these apps eventually renders zero rows — a new
job with no applicants yet, a filter with no matches — but no shared, token-correct empty-state
component was found in the 2026-07 audit. Each app either shows nothing, or a plain unstyled
line of text.

## Usage

<div class="ds-demo">
  <EmptyState />
</div>

```vue
<EmptyState
  title="No applicants yet"
  description="Once candidates apply to this job, they'll show up here."
  action-label="Share job posting"
/>
```

## When to use

- Any list, table, or dashboard section that can legitimately have zero items — as the replacement
  for that area's normal content, not an error message.

## When not to use

- Don't use this for an actual failure (a failed request) — that's Alert Inline or Toast,
  depending on whether it's page-level or action-level.

## Why this is proposed, not confirmed

Built from Data Display's confirmed `neutral-500` empty-state text color plus a Secondary button
(already fully confirmed) for the recovery action — a dashed `neutral-200` border distinguishes it
as a placeholder region rather than real content, a convention borrowed from shadcn-vue's own
empty/placeholder patterns since nothing real exists in these 5 apps to copy instead.
