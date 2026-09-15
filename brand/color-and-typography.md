<script setup>
import { onMounted } from 'vue';
onMounted(() => {
  if (document.getElementById('montserrat-cdn')) return;
  const link = document.createElement('link');
  link.id = 'montserrat-cdn';
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap';
  document.head.appendChild(link);
});
</script>

# Color & Typography

## Brand color palette

<img src="/brand/brand-color-palette.png" alt="Brand color palette — blue, yellow, black, white swatches with HEX/RGB/CMYK/Pantone values" class="mx-auto my-6 max-w-3xl rounded-md border border-neutral-200" />

| Color | HEX | RGB | CMYK | Pantone |
|---|---|---|---|---|
| Blue | `#3733CF` | 55, 51, 207 | 73, 75, 0, 19 | 2126 |
| Yellow | `#FBD24D` | 251, 210, 77 | 0, 16, 69, 2 | 113 |
| Black | `#000000` | 0, 0, 0 | 0, 0, 0, 100 | — |
| White | `#FFFFFF` | 255, 255, 255 | 0, 0, 0, 0 | — |

**⚠️ A real conflict between two marketing-sourced guidelines, flagged rather than silently
picked**: these are the values printed on this PDF's own Color Palette page (uploaded
2026-09-15), and they're internally consistent — the swatch and the hex/RGB/CMYK/Pantone chip
agree with each other on the same slide. But they don't match what's currently ratified as the
`brand-royalBlue` / `brand-yellow` tokens in `DESIGN.md` and shipped in `tahche-design-tokens` —
`#353DD7` / `#FBD249` — sourced from an earlier Brand Guideline dated 2026-07-24. `#3733CF` and
`#353DD7` are close but not identical, and `#FBD24D` vs `#FBD249` is a single-digit drift in the
opposite direction from what the tokens file already flagged as "corrected."

This page documents what the new PDF says, as-is. It does **not** change `brand-royalBlue` /
`brand-yellow` in the design tokens — that's a decision for whoever owns the brand guideline to
make deliberately (confirm which round is current, then update `tahche-design-tokens/DESIGN.md`
and rebuild), not something to resolve by quietly picking one file over another.

## Typography

Brand and product deliberately use **different typefaces** — consistent with this system's
two-tier approach to color (see [Brand vs. Product](/brand/brand-vs-product)).

### Brand typefaces (marketing & documents)

<img src="/brand/typography-montserrat-black.png" alt="Montserrat Black type specimen" class="mx-auto my-6 max-w-2xl rounded-md border border-neutral-200" />

- **Montserrat Black** — the accent/display typeface: headlines, promotional materials,
  logotypes, and other high-visual-impact branding. Decorative rather than a body-copy face.

<img src="/brand/typography-arial.png" alt="Arial type specimen" class="mx-auto my-6 max-w-2xl rounded-md border border-neutral-200" />

- **Arial** (Regular and Bold) — the body-copy typeface: paragraphs, articles, UI body copy,
  editorial layouts. Chosen for legibility across long text blocks.

**This replaces the previous brand type pairing.** The earlier Brand Book specified Proxima Nova
for headers and Montserrat for body copy; this version drops Proxima Nova entirely, keeps
Montserrat but moves it to the display/accent role, and introduces Arial as the body face.

<div class="ds-demo flex flex-col gap-6">
  <div>
    <p class="mb-2 text-paragraph-small text-neutral-500">Montserrat Black — display/accent</p>
    <p style="font-family: 'Montserrat', sans-serif; font-weight: 900;" class="text-h4 text-neutral-900">
      Short and loud.
    </p>
  </div>
  <div>
    <p class="mb-2 text-paragraph-small text-neutral-500">Arial — body copy</p>
    <p style="font-family: Arial, sans-serif; font-weight: 400;" class="text-h4 text-neutral-900">
      The quick brown fox jumps over the lazy dog.
    </p>
  </div>
</div>

### Type hierarchy

| Level | Typeface | Letter spacing | Line height | Scale |
|---|---|---|---|---|
| Superheader | Montserrat Black | -1% | 90% | 100% — concise, 2–4 words, max 2 lines |
| Header 1 | Arial Bold | -1% | 80% | 100% — up to 3 lines, for headings with long words |
| Subline | Arial Bold | 0% | 110% | 25–35% |
| Header 2 | Montserrat Black | 0% | 90% | 100% alone; 25/33/40% if a higher-level heading is present |
| Body | Arial Regular | 0% | auto | 100% |
| CTA | Montserrat Bold | 0% | auto | 100% |

### Product typeface (in-app UI)

**Inter** — the typeface actually rendering across all 5 apps today, registered as Tailwind's
`fontFamily.sans` (see [Foundations → Typography](/tokens/typography)). Product UI does not use
Montserrat or Arial — see [Brand vs. Product](/brand/brand-vs-product) for why.
