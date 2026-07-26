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
