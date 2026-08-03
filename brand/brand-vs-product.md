# Brand vs. Product

Tahche runs two deliberately separate visual vocabularies — this page is the map between them, so
nobody has to guess which one applies.

## Why two tiers, not one

`DESIGN.md`'s Colors section already draws this line for color, and it extends to typography too:
brand assets exist for **marketing and document contexts** — decks, brochures, the Brand Book
itself, external communications. Product tokens exist for **the 5 apps' in-app UI**. Royal Blue
and Yellow happen to be the exact same hex values as the product's `primary`/`secondary` — a
coincidence worth naming, not a reason to collapse the two systems into one. A product engineer
and a marketing designer should each reach for the vocabulary that matches their actual context,
not share one that quietly serves neither well.

## The map

| Context | Use | Don't use |
|---|---|---|
| In-app UI (any of the 5 apps) | Product tokens: `primary`, `secondary`, `neutral`, semantic ramps, `request`/`extended` — see [Foundations](/tokens/colors). Typeface: **Inter**. | Brand tokens or logo lockups — a button doesn't need `brand-royalBlue`, it needs `primary-500`, even though they're the same hex today. |
| Marketing site, decks, brochures, one-pagers | Brand tokens: `brand-royalBlue`, `brand-yellow`, `brand-lightGrey`, `brand-red`, `brand-darkGrey` — see [Color & Typography](/brand/color-and-typography). Typefaces: **Proxima Nova** (headers), **Montserrat** (body). Logo per [Logo](/brand/logo)'s usage rules. | Product component specs (Button, Badge, etc.) — those describe in-app UI, not a slide layout. |
| Official documents (contracts, letterheads, the Brand Book itself) | Full Brand Book spec — logo clear space/minimum size, CMYK breakdowns not reproduced on this site. See the [PDF](/brand/Tahche-Brandbook.pdf). | — |

## What to do if the two ever visibly conflict

They haven't yet, beyond the coincidental blue/yellow overlap already noted — but if a real need
ever calls for, say, an in-app "About Tahche" marketing-style page, or a product screen that
needs to feel like a brand touchpoint: treat it the same way this system treats any other
disagreement (see [Working Method](/philosophies/working-method)) — flag it explicitly, decide
deliberately which vocabulary wins for that specific surface, and document the decision rather
than quietly mixing tokens from both systems in one place.

## Quick reference

- Building a component for one of the 5 apps? → [Components](/components/index) and
  [Foundations](/tokens/colors).
- Making a slide, brochure, or external document? → [Brand](/brand/overview) and the
  `tahche-brand` document-generation skill.
- Not sure which? → If it renders inside `tahche-recruitment-portal`, `tahche-client-web`,
  `tahche-client-dashboard`, `tahche-career-web`, or `tahche-dashboard`, it's product. Otherwise,
  it's brand.
