# Typography

**Inter** is the typeface actually rendering across all 5 apps, registered here as Tailwind's
`fontFamily.sans`.

Every style below is a composite `.text-{name}` class (font-size, line-height, letter-spacing,
and font-weight bundled together) rather than a separately-applied size + weight utility pair —
the fix for exactly the kind of drift that caused `h2`'s Extrabold-vs-Bold conflict
(resolved 2026-07-25: Extrabold/800 is canonical).

The **confirmed / proposed** badge on each style reflects the real `$confirmed` field in
`typography.json` — most weights are now confirmed via live Figma design context on real
components (Button, Input Field, Modal, Tooltip, Stat, Accordion, Table Header); a handful
(`display-large`, `h1`, `h5`, `h6`, `paragraph-medium`) remain genuinely
proposed defaults pending further confirmation.

<TypeScale />
