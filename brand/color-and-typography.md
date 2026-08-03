<script setup>
import { onMounted } from 'vue';
onMounted(() => {
  if (document.getElementById('montserrat-cdn')) return;
  const link = document.createElement('link');
  link.id = 'montserrat-cdn';
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap';
  document.head.appendChild(link);
});
</script>

# Color & Typography

## Brand color palette

<div class="ds-demo">
  <ColorPalette group="brand" />
</div>

These five hex values are the same ones already ratified in `DESIGN.md`'s Colors section as the
**brand tier** — for marketing/document contexts, not product UI. Royal Blue and Yellow are
confirmed identical to the product's `primary`/`secondary` tokens; Light Grey, Red, and Dark Grey
have no product-ramp equivalent.

**⚠️ A real inconsistency in the source Brand Book, flagged rather than silently picked**: its
"Primary Colors" page labels Royal Blue as `#012f6b` in the descriptive text, while the actual
color swatch and hex-code chip on the very same page — and the dedicated Color Palette page —
both show `353dd7`. `353dd7` is treated as canonical here: it's the value that matches every real
exported asset, the value already shipped across all 5 product apps as `primary-500`, and the
value already ratified in `DESIGN.md`. `#012f6b` (a much darker navy) doesn't match any real
asset and appears to be a copy-paste leftover from an earlier palette draft.

## Typography

Brand and product deliberately use **different typefaces** — consistent with this system's
two-tier approach to color (see [Brand vs. Product](/brand/brand-vs-product)).

### Brand typefaces (marketing & documents)

- **Proxima Nova** — headers and titles. A licensed commercial typeface, not embedded on this
  site; see the [Brand Book PDF](/brand/Tahche-Brandbook.pdf) for the true specimen.
- **Montserrat** — body copy.

<div class="ds-demo flex flex-col gap-6">
  <div>
    <p class="mb-2 text-paragraph-small text-neutral-500">Montserrat — body copy</p>
    <p style="font-family: 'Montserrat', sans-serif; font-weight: 400;" class="text-h4 text-neutral-900">
      The quick brown fox jumps over the lazy dog.
    </p>
  </div>
  <div>
    <p class="mb-2 text-paragraph-small text-neutral-500">Montserrat — Semi-Bold (sub-headers)</p>
    <p style="font-family: 'Montserrat', sans-serif; font-weight: 600;" class="text-h4 text-neutral-900">
      Sub-header goes here
    </p>
  </div>
</div>

Header hierarchy per the Brand Book: **Header** in Proxima Nova Bold, **Sub-header** in Proxima
Nova Semi-Bold, **Body copy** in Montserrat Regular.

### Product typeface (in-app UI)

**Inter** — the typeface actually rendering across all 5 apps today, registered as Tailwind's
`fontFamily.sans` (see [Foundations → Typography](/tokens/typography)). This is a real, deliberate
difference from the brand typefaces above, not a gap to close — see
[Brand vs. Product](/brand/brand-vs-product) for why.
