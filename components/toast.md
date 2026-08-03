# Toast

**Recommended — new.** Distinct from the already-documented [Alert Inline](/components/alert-inline)
(a persistent banner embedded in page flow) and the not-yet-built [Sticky Alert](/components/sticky-alert)
(a viewport-anchored, ongoing announcement). A Toast is a **transient, self-dismissing**
notification for the result of an action just taken (saved, sent, deleted, error) — the single
most common admin-tool notification pattern shadcn-vue and most systems like this one ship, and
one this system doesn't have a name for yet.

## Usage

<div class="ds-demo">
  <Toast />
</div>

```vue
<Toast type="success" title="Saved successfully" @dismiss="hide" />
```

## Types

<div class="ds-demo flex flex-col gap-3">
  <Toast type="success" title="Application submitted" />
  <Toast type="warning" title="Draft not yet published" description="Finish required fields to publish." />
  <Toast type="destructive" title="Failed to save changes" />
</div>

## When to use

- Confirming the result of a user-initiated action (save, send, delete) — brief, then auto-dismiss.

## When not to use

- Don't use for anything the user must read before proceeding — that blocks on a Modal instead.
- Don't use for a standing condition (e.g. "you're offline") — that's what Sticky Alert is for,
  once built.

## Why this is proposed, not confirmed

No dedicated toast/snackbar-position component exists in the 5 apps today — `SnackBar.vue` (the
real, shared component this system's Alert Inline spec is drawn from) is actually an inline
banner, not a floating transient toast, despite the name. This spec borrows Alert Inline's
confirmed color pairing and applies it to a floating, top-right-anchored container instead —
consistent color language, new position and lifecycle.
