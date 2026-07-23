# Colors

Two tiers, deliberately kept separate: **product colors** (`primary`/`secondary`/`neutral`/
`success`/`warning`/`destructive`) for UI, and **brand colors** (`brand.blue`/`brand.gold`) for
marketing/document contexts only — do not use brand colors in product UI even though they're
visually close to `primary`/`secondary`.

Every semantic ramp now has a `-foreground` pair (e.g. `success-foreground`) — the
guaranteed-accessible text color for when that ramp's 500 tone is used as a solid background.
**White does not always work**: it fails outright on `secondary`/`success`/`warning`/`neutral`
and only marginally fails on `destructive` (3.76:1). Always use the ramp's own `-foreground`
token rather than assuming white.

Values below are rendered directly from `tahche-design-tokens/tokens/color.json` — nothing here
is hand-copied.

<ColorPalette group="primary" />
<ColorPalette group="secondary" />
<ColorPalette group="neutral" />
<ColorPalette group="success" />
<ColorPalette group="warning" />
<ColorPalette group="destructive" />
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
- **`extended.loader-blue`** (`#30699D`) is the newest addition — a real, untokenized default
  used by the shared Loader component in 4 of the 5 apps, distinct from `primary-500`.
