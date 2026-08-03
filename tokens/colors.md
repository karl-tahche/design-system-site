# Colors

Two tiers, deliberately kept separate: **product colors** (`primary`/`secondary`/`neutral`/
`success`/`warning`/`destructive`/`progress`) for UI, and **brand colors** (`brand.royalBlue`/
`brand.yellow`/`brand.lightGrey`/`brand.red`/`brand.darkGrey`) for marketing/document contexts
only — do not use brand colors in product UI. Royal Blue and Yellow are confirmed identical to
`primary`/`secondary-500` (see Real usage notes below); Light Grey, Red, and Dark Grey have no
product-ramp equivalent.

Every semantic ramp now has a `-foreground` pair (e.g. `success-foreground`) — the
guaranteed-accessible text color for when that ramp's 500 tone is used as a solid background.
**White does not always work**: it fails outright on `secondary`/`success`/`warning`/`neutral`
and only marginally fails on `destructive` (3.76:1) and `progress` (3.68:1). Always use the
ramp's own `-foreground` token rather than assuming white.

**⚠️ Scope check**: this pairing is guaranteed *only* against a ramp's own `500` tone as the
background — it is not a general "safe text color for this ramp." `neutral-foreground`
(`#141414`, identical to `neutral-900`) passes at 8.89:1 against `neutral-500`, but the same text
color measures roughly 2.25:1 against `neutral-700`, 1.36:1 against `neutral-800`, and 1:1
(invisible) against `neutral-900` — text and background become the same color. That's not the
token failing; it's a pairing it never claimed to support. If a real component ever needs a
`700`–`900` step as a *background* rather than as text (no confirmed real case exists today),
that's an independent contrast decision — verify it directly rather than reusing `-foreground` a
second time.

Values below are rendered directly from `tahche-design-tokens/tokens/color.json` — nothing here
is hand-copied.

<ColorPalette group="primary" />
<ColorPalette group="secondary" />
<ColorPalette group="neutral" />
<ColorPalette group="success" />
<ColorPalette group="warning" />
<ColorPalette group="destructive" />
<ColorPalette group="progress" />
<ColorPalette group="brand" />
<ColorPalette group="request" />
<ColorPalette group="extended" />

## Dark mode — Recommended, not shipped anywhere yet

None of the 5 apps have a dark mode today — this is a real, current gap, not a retrofit of
something already live. The mapping below is a genuine, usable proposal, built on one rule: reuse
the exact hex values already in each ramp, just flip which step plays which role. No new colors.

**Neutral scale** — light mode reads low→high as background→text; dark mode uses the same steps
in reverse role:

| Role | Light mode | Dark mode |
|---|---|---|
| Page background | `neutral-50` | `neutral-900` |
| Card / surface background | white | `neutral-800` |
| Default border | `neutral-200` | `neutral-700` |
| Primary text | `neutral-900` | `neutral-100` |
| Secondary text | `neutral-700` / `750` | `neutral-300`–`400` |
| Muted / caption text | `neutral-500` | `neutral-400` |

<div class="dark" style="padding:16px;">
  <div class="rounded-md bg-neutral-800 border border-neutral-700 p-4" style="width:280px;">
    <p class="text-paragraph-small-500 text-neutral-100">Card on a dark page</p>
    <p class="text-paragraph-small text-neutral-400 mt-1">Same neutral ramp, roles flipped — nothing new was invented to render this.</p>
  </div>
</div>

**Semantic + brand ramps** (`primary`/`secondary`/`success`/`warning`/`destructive`/`progress`) —
the *solid* 500-tone fill (a filled Button, a filled Badge) needs no change: a saturated color
reads fine on a light or dark page. What flips is the **tint** role — the near-white 50/100 tint
used for hover fills and Alert Inline/badge backgrounds would nearly disappear on a dark page, so
dark mode reuses that same ramp's own 900/800 step instead, with a lighter step (200/300) for text
on top of it — the same 50-bg/800-text *pairing* light mode already uses, just at the opposite end
of the same ramp:

| Role | Light mode | Dark mode |
|---|---|---|
| Solid fill (Button, filled Badge) | `{ramp}-500` | `{ramp}-500` (unchanged) |
| Tint background (Alert Inline, badge tint) | `{ramp}-50` | `{ramp}-900` |
| Text on tint | `{ramp}-800` | `{ramp}-200`/`300` |
| Border on tint | `{ramp}-200` | `{ramp}-700` |

`{ramp}-foreground` doesn't need a dark variant at all — it's paired with the 500 fill, which is
identical in both themes (see [Accessibility Commitments](/philosophies/accessibility) for why
that pairing doesn't transfer to other steps in the first place, in either theme).

**One real, computed exception, not a guess**: `primary-500` (`#353DD7`) used as *text* directly
on a `neutral-900` page — not as a filled background — measures **2.46:1**, a real AA failure.
Every other ramp's 500 tone (`success`, `warning`, `destructive`) already clears 4.5:1 as text on
`neutral-900` without any change (8.09:1, 8.58:1, 4.90:1 respectively) — `primary` alone needs a
lighter step for *text-only* use (a Link, an Outlined button's border/text, an icon color) on a
dark page. `primary-300` (`#8D92EB`) clears it at **6.54:1**; that's the dark-mode substitution
used for `primary`'s text-only roles throughout this site's component demos below.

**Not yet extended to `brand`, `request`, or `extended`** — no real product surface uses those in
a way that needs a dark treatment yet. Extending them the same way is mechanical once a real need
shows up; not done speculatively here.

## Real usage notes

- **`neutral-750`** (`#3F3F3F`) is a real, heavily-used gray discovered by auditing live
  components directly — the actual secondary/body text color in Breadcrumb, Tab, Table Header,
  Table Content Cell, Tooltip, Button Tertiary, and Accordion, used more often than
  `neutral-700` itself.
- **`request`** and **`extended`** were both promoted from code-only to canonical after a
  real-usage audit found them load-bearing across 3+ of the 5 apps, not from Figma.
- **`extended.loader-blue`** (`#30699D`) is a real, untokenized default used by the shared
  Loader component in 4 of the 5 apps, distinct from `primary-500`.
- **`progress`** is a proposed ramp for loading/in-progress states (Tailwind's stock `blue` scale),
  not yet used anywhere in real code. Its relationship to `extended.loader-blue` (a different,
  already-real blue) is an open design decision, not resolved here.
- **`brand`** was corrected 2026-07-24 against the real Brand Guideline from Marketing. This file
  previously assumed brand blue/gold were deliberately distinct from product primary/secondary —
  that was wrong on the *value* (old literals were simply incorrect): `brand.royalBlue` and
  `brand.yellow` currently match `primary-500` (`#353DD7`) and `secondary-500` (`#FBD249`) exactly.
  Each is still kept as its own independent literal, not a reference to the product token, even
  though the values coincide today — brand identity (Marketing-owned) and product UI color
  (Product/Design-owned) are separately-controlled decisions that could diverge later, not one
  value with two names. `brand.lightGrey` (`#F9F9F9`), `brand.red` (`#ED4342`), and
  `brand.darkGrey` (`#A8A9AD`) are newly added from the same guideline — genuinely distinct
  values with no equivalent elsewhere in this file, despite Red and Dark Grey sitting close to
  `destructive-500`/`neutral-500` respectively.
