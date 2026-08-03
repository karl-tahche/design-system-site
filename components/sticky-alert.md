# Sticky Alert

**Not yet built** — distinct from the already-documented [Alert Inline](/components/alert-inline)
(a dismissable *inline* banner). No persistent, viewport-anchored announcement banner exists
anywhere in real code today.

## What exists today

The one fixed-position candidate found in the 2026-07 audit is a one-time full-page success
splash — not a reusable announcement pattern, and not evidence to model a token set on.

## Recommended shape

A Sticky Alert should reuse Alert Inline's confirmed color pairing (`bg-{ramp}-50` /
`border-{ramp}-200` / `text-{ramp}-800`) but anchor to the top of the viewport (`fixed`, full
width, above the app header) with a dismiss control, for things like a scheduled-maintenance
notice or an org-wide announcement that shouldn't be missed by scrolling past it once.

```vue
<!-- illustrative only — not yet implemented anywhere -->
<StickyAlert type="warning" title="Scheduled maintenance"
  description="The portal will be unavailable Sunday 2–4 AM PHT." dismissible />
```

## Status

Open. Low real urgency today (no current use case surfaced one), but worth a token-correct
reference component if a real announcement need comes up, rather than building it from scratch
under time pressure then.
