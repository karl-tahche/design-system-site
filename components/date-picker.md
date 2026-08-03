# Date Picker

**Not yet built (as a themed component)** — two different third-party libraries are wrapped
across the 5 apps (`@vuepic/vue-datepicker` in 2 apps, `v-calendar` in another), but **neither has
any custom theming applied to the calendar surface itself** — only the trigger input is styled
with this system's tokens.

## What exists today

- The trigger input reuses Input Field's tokens (Box style, `radius.sm`, `paragraph-small` type).
- The calendar popup itself is 100% library-default styling in every app that has one — a real
  theming gap, not evidence to build a token from.

## Recommended shape

Don't invent a bespoke calendar UI. Theme whichever library the team standardizes on (pick one of
the two rather than keeping both) using this system's tokens: `primary-500` for the selected date,
`primary-50` for the hover/range-preview state, `radius.md` for the popup container, and
`elevation.large` for its shadow — matching Modal's confirmed shadow tier for a similarly
above-page-content surface.

## Status

Open, two-part: (1) consolidate onto one date library across the 5 apps, (2) theme its calendar
surface. Neither has started yet.
