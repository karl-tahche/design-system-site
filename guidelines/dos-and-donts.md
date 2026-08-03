# Do's and Don'ts

Transcribed directly from `DESIGN.md`'s own "Do's and Don'ts" section — do not hand-edit this
copy independently of that file. Regenerate from `tahche-design-tokens/DESIGN.md` when it
changes.

These are drawn directly from patterns found across all 5 production apps during the audit that
produced that file — each one caused a real, shipped inconsistency. One exception, marked where
it appears: an item surfaced by checking the file itself against general product-UI best
practice, not the 5-app audit — used only where it identifies a concrete, checkable gap, not as
an excuse to import generic advice wholesale.

- **Do** reference a token (`bg-primary-500`, `text-neutral-700`) for any color, spacing, or
  radius value. **Don't** hand-type a hex or pixel value that happens to match one — that's
  exactly how `destructive-800` and `destructive-900` ended up identical in every app.
- **Do** use the shared spacing scale. **Don't** reach for an arbitrary bracket value
  (`px-[0.938rem]`) when a token already covers that exact pixel amount.
- **Do** register Inter as Tailwind's `fontFamily.sans`. **Don't** apply it via a global
  `* { font-family: ... !important }` override — it silently breaks any component that expects
  `font-sans` to resolve correctly.
- **Do** pick one icon theming contract per app (a `color` prop or a Tailwind-class prop) and
  use it consistently. **Don't** mix both within the same icon set, or within the same
  component.
- **Do** type a component's `variant` prop as a string-literal union. **Don't** leave it as a
  loose `string` once more than a couple of variants exist — it's how a 25-variant button with
  no compile-time safety happens.
- **Do** delete a superseded component version once its replacement has shipped and been
  verified. **Don't** leave "V1"/"V2" trees or "_Old"/"Legacy" files live in production
  indefinitely — several apps in this audit still had both.
- **Do** build components however best fits the app. **Don't** skip pulling from the shared
  token package even when building something fully bespoke — that's the one rule this file
  exists to support.
- **Do** check a component's real Figma design context before assuming a token's value. **Don't**
  trust a "reasonable-looking" inferred value once a real one is available — `DESIGN.md`'s own
  Badge entry was wrong (guessed `primary-50`/`primary-700`, real value is `primary-500`/white)
  until Badge itself was actually audited.
- **Do** treat a disagreement between two parts of Figma as a flag for an explicit design
  decision, not a silent pick — `h2`'s Extrabold-vs-Bold conflict sat flagged for exactly
  that reason until it got one (resolved 2026-07-25: Extrabold). **Don't** move on as if a
  tiebreaker were the same thing as a resolution.
- **Do** check real class usage across all 5 apps before trusting what a Tailwind config file
  merely defines. **Don't** assume a color/radius/shadow is load-bearing just because it's
  configured — every app has ramp steps, breakpoints, and shadow tokens that are 100% dead in
  practice, and config alone can't tell you that.
- **Do** give icons a token-aware `color` prop that maps to the color tokens. **Don't** accept
  that SVG `fill`/`stroke` attributes "just can't use Tailwind classes" as a reason to hardcode
  hex — it's the single biggest source of token drift found in this audit (one app hardcodes
  `primary-500`'s hex more often than it uses the actual class).
- **Do** wire the radius and font-size scales into each app's actual Tailwind config. **Don't**
  leave them as documentation-only — none of the 5 apps currently configure a custom
  `borderRadius` or `fontSize` at all, which is exactly why arbitrary
  `rounded-[10px]`/`text-[13px]`-style values are everywhere.
- **Do** apply a text style as one composite class (`.text-h2`). **Don't** hand-pair a
  size utility with a separate weight utility (`text-2xl font-medium`) — the two can be edited
  independently and drift apart, which is exactly how the `h2` Extrabold-vs-Bold
  conflict happened in the first place.
- **Do** use a ramp's `-foreground` token whenever that ramp's 500 tone becomes a solid
  background. **Don't** assume white text always works — it fails outright on
  `secondary`/`success`/`warning`/`neutral` (all light or bright colors) and only marginally
  fails on `destructive` (3.76:1, just under the 4.5:1 minimum), the kind of near-miss the
  per-ramp contrast check exists to catch.
- **Do** check whether WCAG's inactive-component exception genuinely applies before treating a
  low-contrast disabled state as a compliance bug. **Don't** conflate "looks low-contrast" with
  "fails a real requirement" — `button-primary-disabled` has zero 1.4.3 obligation since
  disabled controls are exempt, though bumping it for perceptual clarity anyway is still worth
  doing on its own merits.
- **Do** define every real interactive state for a component — default, hover, focus, active,
  disabled, loading, error, selected, as applicable. **Don't** stop at whichever states happened
  to get checked first — Button's missing Focus state was a genuine gap (zero real
  implementation anywhere), now resolved by reusing `elevation.focus-ring`; Loading was resolved
  as "Disabled's appearance plus a spinner," not a fourth color state; Tab's Selected state is
  now confirmed — though it surfaced a separate, still-open discrepancy between the
  Figma-sourced `Line` style and what real code actually builds.
- **Do** pair every real transition/animation with a `prefers-reduced-motion` fallback. **Don't**
  assume it's handled somewhere else in the app just because one app in the suite does it well —
  one app in the suite handles it consistently across a double-digit number of files, but the
  rest of the suite has zero handling between them.
- **Do** treat a matching *value* as a real token-drift signal even when the *class name* looks
  unrelated. **Don't** assume "it's not hardcoded, it's just a class" is automatically safe —
  Badge's real Destructive-filled variant uses Tailwind's stock `bg-red-500`, not a
  `destructive-*` class; it's only harmless because `red-500` and `destructive-500` happen to be
  the exact same hex today, a coincidence that had to be verified, not something the class name
  itself guaranteed.
- **Do** add `aria-selected` (or the equivalent state attribute) to every real Tab
  implementation. **Don't** assume a working visual active-state means the interaction is
  accessible — the selected/active tab is styled correctly and consistently everywhere it's
  built, but `aria-selected` is absent from every real Tab implementation across all 5 apps.
- **Do** treat an old Figma-sourced claim as provisional until real code actually confirms it.
  **Don't** assume a value survives just because it's already written down — a single audit pass
  found three separate claims (File Upload's radius, Pagination's and Side Navigation's use of
  `neutral-750`, Side Navigation's badge text style) that were Figma-only and didn't survive
  contact with real code.
- **Do** flag a copy-pasted, never-re-themed third-party snippet as a real gap, not a style
  choice. **Don't** assume every real, repeated pattern is intentional — Form Control Switch's
  "on" state is `bg-blue-600` (Tailwind stock blue) identically across all 4 real copies, but
  that's a Flowbite snippet that was never wired to `primary-500`, not a deliberate decision to
  use a second blue.
- **Do** treat a `{ramp}-foreground` token as scoped to that ramp's own `500` tone as the
  background. **Don't** reuse it against a different step in the same ramp and assume the
  guarantee carries over — `neutral-foreground` passes against `neutral-500` (8.89:1) but is
  functionally invisible against `neutral-900` (1:1, the same color twice) and fails badly
  against `neutral-700`/`800` too. A step being in the same ramp doesn't make a foreground
  pairing safe; only the specific 500 pairing is confirmed.
