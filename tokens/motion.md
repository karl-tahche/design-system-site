# Motion

Ratified 2026-07-25 from a real 5-app CSS-transition audit — the one token category with no
Figma source at all, since motion has no foundation page there. No app uses an animation library
(no GSAP, Framer Motion, Lenis, or `@vueuse/motion`).

`duration` is a 3-step scale (`fast` 150ms, `base` 250ms, `slow` 500ms) — each value
independently lands as a top-3 real value in all 5 codebases, despite the apps sharing no code.
`easing.standard` is `ease-in-out`, settled by explicit decision rather than vote count (the real
data splits roughly 3-to-2 across apps on `ease` vs. `ease-in-out`). `easing.linear` is reserved
for continuous/looping motion only (spinners, marquees).

**⚠️ A real, severe gap this audit also surfaced**: `prefers-reduced-motion` is handled in only 1
of the 5 apps — not shown in the demo below since this page is about the token values
themselves, but worth remembering every time one of these is used.

**Theme-agnostic** — duration and easing don't change by theme; no dark-mode variant needed here.

<MotionDemo />
