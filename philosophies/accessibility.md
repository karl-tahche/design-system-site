# Accessibility Commitments

Accessibility findings on this site aren't a separate audit bolted on afterward — they surface
directly from the same real-evidence process described in [Working Method](/philosophies/working-method),
and are treated with the same rigor as a color or spacing value.

## Every ramp has a verified foreground pairing

Every semantic ramp (`primary`, `secondary`, `neutral`, `success`, `warning`, `destructive`) has a
`{ramp}-foreground` token — the guaranteed-accessible text color for when that ramp's 500 tone
becomes a solid background — each verified with real WCAG contrast math, not assumed:

| Ramp | Foreground | Contrast on `{ramp}-500` |
|---|---|---|
| `primary` | white | 7.50:1 ✅ |
| `secondary` | `neutral-900` | 12.65:1 ✅ (white fails at 1.46:1) |
| `neutral` | `neutral-900` | 8.89:1 ✅ (white fails at 2.07:1) |
| `success` | `neutral-900` | 8.08:1 ✅ (white fails at 2.28:1) |
| `warning` | `neutral-900` | 8.58:1 ✅ (white fails at 2.15:1) |
| `destructive` | `neutral-900` | 4.90:1 ✅ (white measures 3.76:1 — a near-miss, not a pass) |

Never assume white text "just works" on a filled ramp color — it fails outright on four of the
six ramps above.

**The pairing has a scope, and it's easy to miss**: `-foreground` is guaranteed only against a
ramp's own `500` tone as the background — not against every step in that ramp. `neutral-foreground`
(`#141414`) passes comfortably against `neutral-500` but fails against `neutral-700`/`800`, and is
literally invisible against `neutral-900` (same color on same color). If a real need ever comes up
for text on a darker step used as a background, that's a separate contrast decision to verify on
its own — not a second use for the same token. See [Foundations → Colors](/tokens/colors) for the
worked numbers.

## Knowing the difference between "looks low-contrast" and "fails a real requirement"

`button-primary-disabled`'s white-on-`primary-300` combination measures 2.82:1 — well under the
4.5:1 AA minimum — but WCAG 1.4.3 has a normative exception for text belonging to an *inactive*
UI component. Disabled controls carry zero contrast obligation. This system still bumped the
value to `primary-400` (5.21:1) for perceptual clarity, but that was a legibility choice, not a
compliance fix — the two are worth keeping distinct, since conflating them either overstates a
non-issue or, worse, teaches the wrong lesson about when the exception genuinely applies.

## Focus states are a real, open gap

A 2026-07-25 audit found **zero** focus-visible styling anywhere on any of the 5 apps' shared
Button components. The recommended fix — applying `elevation.focus-ring` (the same ring now used
on Input Field) — is documented on [Button](/components/button)'s page, but not yet shipped
anywhere. Treat this as a live punch-list item, not a solved problem.

## Reduced motion is handled in only 1 of 5 apps

`prefers-reduced-motion` is respected consistently in career-web (11 files) and nowhere else —
client-web, client-dashboard, recruitment-portal, and dashboard have zero handling between them.
Every transition or animation this system's [Motion](/tokens/motion) tokens describe should ship
with a reduced-motion fallback; today, four-fifths of the suite doesn't have one.

## `aria-selected` is missing from every real Tab implementation

Tab's selected/active visual state is styled correctly and consistently everywhere it's built —
but `aria-selected` (or the equivalent state attribute) is absent from every real implementation
across all 5 apps. A working visual state is not the same thing as an accessible interaction;
this is a real gap to close, not a hypothetical one.

## The standing rule

Define every real interactive state for a component — default, hover, focus, active, disabled,
loading, error, selected, as applicable — and don't stop once whichever states happened to get
checked first are done. Accessibility gaps found this way (Focus, reduced motion, `aria-selected`)
are treated exactly like a wrong hex value: real, current, and worth fixing, not a someday item.
