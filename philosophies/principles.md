# Design Principles

The values this system optimizes for, in practice — not abstract taste, but the standard every
token and component decision on this site gets held to.

## Calm, efficient, trustworthy — not decorative

Tahche's product suite is a set of internal operational tools — HR, recruitment, client and
employee dashboards, asset management — used daily by staff and clients, not a consumer marketing
surface. The UI should feel calm and efficient rather than decorative: dense information handled
legibly, clear affordances, no gimmicks. This carries the brand's personality (see
[Brand → Overview](/brand/overview) — Friendly, Reliable, Competitive) into product terms: helpful
and direct, never cold or over-designed.

## One token layer, many component shapes

Component *structure* is deliberately **not** standardized across the 5 apps — each builds its own
components in whatever shape suits it, confirmed directly with the dev team as intentional. What
this system exists to make consistent is the layer underneath: color, type, spacing, elevation,
shape. A component can be built any way a developer likes, as long as its values come from these
tokens rather than a hand-typed hex or pixel value. Consistency lives in the tokens, not in a
mandated component API.

## Two tiers, kept deliberately separate

Colors — and, per the [Brand](/brand/overview) section, typography too — split cleanly into
**product** (what ships in the 5 apps' UI) and **brand** (marketing/document contexts). Royal Blue
and Yellow happen to be identical hex values to `primary`/`secondary`, but that's treated as a
coincidence worth naming, not a reason to merge the two vocabularies — a product engineer and a
marketing designer should each reach for the token that matches their actual context.

## State communication, not decoration

The semantic ramps (`success`/`warning`/`destructive`) exist for one job: communicating state — a
destructive action, a warning banner, a success toast. Never as a decorative accent. If a color
choice can't be explained in terms of what state it's communicating, it's the wrong color.

## Density handled legibly

An internal operational tool routinely shows more on a screen than a marketing site would —
tables, multi-field forms, dashboards with a dozen simultaneous metrics. The answer to that
density is a disciplined type scale and spacing rhythm (see
[Foundations → Typography](/tokens/typography) and [Spacing](/tokens/spacing)), not less
information. Legible density, not white-space for its own sake.
