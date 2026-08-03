# List Field

**Not yet built** — a name from Figma's real component library with no matching real
implementation. Not silently skipped or invented around; documented here as a genuine, open gap.

## What exists today

No component literally named "List Field" exists in any of the 5 apps. The closest real pattern —
dynamic recipient-row repeaters (add/remove a row of inputs) — is assembled ad hoc from the shared
Button component's remove/add controls. Its `radius.sm` (6px) is directly confirmed in
recruitment-portal's own `Button.vue`, but dashboard-main's equivalent Button drifts to Tailwind's
stock `4px` instead.

**This isn't a new token to invent — it's the existing Button radius token, real in one app and
drifted in another.**

## Recommended shape

A List Field should be a repeatable row (one or more Input Fields plus a remove icon-button),
with an "Add another" Link-style button beneath the last row — built entirely from already-shipped
tokens (Input Field, Button/Link, `spacing.3` between rows). Nothing new needs designing at the
token layer; what's missing is a single shared component wrapping the pattern.

## Status

Don't build a bespoke token set for this. Fix the Button radius drift first (recruitment-portal's
`radius.sm` vs dashboard-main's stock `4px`), then extract a shared `ListField.vue` from the
existing repeater implementations.
