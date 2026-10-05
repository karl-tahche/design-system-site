# Typography

**Inter** renders body/paragraph/label/overline text across all 5 apps, registered as Tailwind's
`fontFamily.sans`. **Montserrat** renders every heading (`display-large`, `display-small`,
`h1`-`h6`) as of 2026-10-05, registered as `fontFamily.heading` — see the note below.

Every style below is a composite `.text-{name}` class (font-family, font-size, line-height,
letter-spacing, and font-weight bundled together) rather than separately-applied utilities that
can drift apart independently — the fix for exactly the kind of drift that caused `h2`'s original
Extrabold-vs-Bold conflict.

**UPDATED 2026-10-05**: the heading scale was fully re-sourced from the Tahche Design System v2
Figma file's typography documentation page. Two changes worth knowing: headings now render in
Montserrat rather than Inter, and every heading size ships three confirmed weight variants
(`-500`/`-600`/`-700`, e.g. `h2-500`/`h2-600`/`h2-700`) instead of one hardcoded weight — the
same multi-weight pattern `paragraph-large`/`paragraph-medium`/`paragraph-small` already used.
The bare names (`h1`, `h2`, etc.) still work as deprecated aliases to one variant each, but new
work should pick a weight explicitly. The v2 file doesn't offer an Extrabold/800 option for any
heading, so that earlier (never actually confirmed) assumption is dropped — see `typography.json`
for the full history. Every style below also now carries a **Mobile** size, shown in the `mobile`
field on its token and applied automatically below `md` (768px) in the shipped CSS; DESIGN.md's
frontmatter only ever reflects the Web-default size, since its schema has no breakpoint concept.

::: warning Conflicts with the documented Brand vs. Product typeface split
This update puts product headings on the same Montserrat typeface the Brand guidelines use for
marketing/document headlines (see [Brand vs. Product](/brand/brand-vs-product)), which until now
drew a hard line at **Inter for product, Montserrat/Arial for brand**. That page and
[Color & Typography](/brand/color-and-typography) still state the old rule as settled and
haven't been updated to reflect this — flagged here rather than silently resolved, pending a
decision on whether the two-tier typeface separation still holds for headings specifically.
:::

The **confirmed / proposed** badge on each style reflects the real `$confirmed` field in
`typography.json`.

**Theme-agnostic**: font-size, weight, line-height, and letter-spacing don't need a dark-mode
variant — only the *text color* applied alongside a style changes by theme (see
[Colors → Dark mode](/tokens/colors#dark-mode-recommended-not-shipped-anywhere-yet)).

<TypeScale />
