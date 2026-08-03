# Working Method

How this system is actually built and kept honest — the process behind every "confirmed" or
"corrected" label on a token or component page.

## Code is the final arbiter of truth

Figma is a design reference here, not the source of truth. The strategy is to find the token set
that actually fits this Vue 3 + Tailwind codebase, evolve components in code first, and
round-trip proven changes back to Figma afterward. When something on this site disagrees with a
real app, that's worth investigating — either the reference needs updating, or the app has
drifted from a token that was already correct. Either way, the resolution comes from checking real
code, not from re-reading Figma harder.

## Real evidence over assumption

Every "confirmed" label on this site means something specific: grepped real class usage across
all 5 apps, or a live Figma design-context pull against the actual selected component — not an
inference that merely looks reasonable. This system's own Badge entry is the canonical cautionary
example: an earlier pass guessed `primary-50`/`primary-700` for the Filled/Primary variant before
Badge was actually audited; the real value turned out to be `primary-500` with white text. A
reasonable-looking guess was still wrong. Evidence beats intuition, including this system's own
prior intuition.

## Audit, don't assume config is load-bearing

A Tailwind config file, or a Figma foundations page, describes what's *available* — not what's
*used*. This system's own history has repeatedly found ramp steps, breakpoints, and shadow tokens
that are 100% dead in real markup despite being fully configured. Before trusting that a value
matters, check whether any real component actually reaches for it.

## Disagreements get flagged, not silently resolved

When two credible sources conflict — two parts of Figma, or Figma versus real code — that's
treated as a flag for an **explicit** decision, not a silent pick. `h2`'s Extrabold-vs-Bold
conflict between the Typography foundation page and the Title component's live design context sat
documented as open until it was deliberately ratified. A tiebreaker isn't the same thing as a
resolution; both need to be visible in the record.

## Document a real gap honestly — don't invent around it

Not every named component has a real implementation. [List Field](/components/list-field),
[Progress Step](/components/progress-step), [Date Picker](/components/date-picker), and
[Sticky Alert](/components/sticky-alert) are documented on this site as genuinely **not yet
built**, with an explicit "don't invent a token for a component that isn't built yet" note — the
same discipline applied in reverse to the [Recommended — new](/components/checkbox) components
proposed here, each labeled clearly as a proposal, not a confirmed pattern.

## Prefer reusing a token over inventing a new one

The dark-mode mapping on [Foundations → Colors](/tokens/colors#dark-mode-recommended-not-shipped-anywhere-yet)
is a direct example of this in practice: none of the 5 apps have a dark mode, so there was no real
code to audit — but rather than inventing a second set of hex values for it, the proposal reuses
the exact steps already in each ramp and simply flips which one plays which role (a light-mode
tint background becomes a dark-mode tint background at the *opposite* end of the same ramp). The
one place that reuse genuinely broke down — `primary-500` failing as text-only color directly on
a `neutral-900` page (2.46:1) — was resolved by computing the actual contrast against a nearby
existing step (`primary-300`, 6.54:1) rather than guessing a plausible-looking value.

## Build however fits the app — but pull from the same tokens

Every app is free to build a component however best suits it. The one rule this whole system
exists to support: don't skip pulling from the shared token package even when building something
fully bespoke. Divergence in shape is fine; divergence in the underlying color, type, spacing, or
radius values is the thing this system is here to prevent.

career-web is the first real app actually wired to the shared preset instead of a hand-copied
ramp — see [Adoption](/philosophies/adoption) for what changed, the naming disagreement it
surfaced (`pneutral` vs. `neutral`), and the CI lint that now stops new hardcoded values from
creeping back in. Documenting a rule and enforcing it are different things; this is the system's
first attempt at the second one.
