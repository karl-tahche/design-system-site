# Introduction

This is a documentation website for
[`tahche-design-tokens`](https://github.com/karl-tahche/tahche-design-tokens) — the canonical
token package for Tahche's 5 production apps (career-web, client-web, client-dashboard,
recruitment-portal, dashboard).

**What this is**: a live, browsable version of the tokens and the composite component specs
already documented in that repo's `DESIGN.md`. Every color, type style, spacing step, shadow,
radius, and motion value on the **Foundations** pages is pulled directly from the installed
`tahche-design-tokens` package — nothing here is a hand-copied duplicate that could drift.

**What this is not**: a replacement for any of the 5 apps' real components.
`tahche-design-tokens` deliberately does *not* standardize component structure — each app builds
its own, in whatever shape suits it. The pages under **Components** are small, fresh reference
implementations built for this site alone, styled purely from the tokens, so you can see what a
token-correct Button or Badge looks like and interact with it directly on the page. They
intentionally do not claim to be any one app's actual code.

**When something here disagrees with a real app**: per this project's own round-trip strategy —
build/decide in code, refine in Figma, feed back into tokens — code is the final arbiter of
truth. If a real app's component looks different from what's shown here, that's worth
investigating: either this reference needs updating, or the app has drifted from a token that
was already correct.

See **Guidelines → Do's and Don'ts** for the full list of patterns this whole system exists to
prevent, and **Foundations** for the raw token scales themselves.
