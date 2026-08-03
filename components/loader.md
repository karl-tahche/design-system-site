# Loader

**Existing** — confirmed via two real, parallel component families: `Loader.vue`/`LoaderScreen.vue`
(byte-identical across client-web, client-dashboard, recruitment-portal) plus career-web's own
independent equivalent — evidence of parallel-but-uncoordinated builds, not one shared package.

## Usage

<div class="ds-demo flex items-center gap-4">
  <Loader size="xs" />
  <Loader size="sm" />
  <Loader size="md" />
  <Loader size="lg" />
  <Loader size="xl" />
</div>

```vue
<Loader size="md" color="primary" />
```

## Color

<div class="ds-demo flex items-center gap-6">
  <div class="flex flex-col items-center gap-2">
    <Loader color="primary" />
    <span class="text-paragraph-xsmall text-neutral-500">primary (career-web)</span>
  </div>
  <div class="flex flex-col items-center gap-2">
    <Loader color="legacy" />
    <span class="text-paragraph-xsmall text-neutral-500">legacy (other 3 apps)</span>
  </div>
</div>

## When to use

- Inline, beside a label, while a button's action is in flight (reuses Button's Disabled color
  state — see Button's docs).
- `LoaderScreen` (the `xl` size plus a `neutral-100`-equivalent ~40%-opacity fixed backdrop) for a
  full-page blocking load.

## Known findings

- **A genuine, real 5-step size scale**: `xs` (10px) / `sm` (20px) / `md` (40px, the default) /
  `lg` (60px) / `xl` (80px) — drawn from a fixed scale in code (`constants.ts`), not arbitrary
  per-usage pixels.
- Rotation is `1s`, `linear` — deliberately outside the `fast`/`base`/`slow` (150/250/500ms)
  motion scale, since no app overrides Tailwind's default `spin` keyframe.
- **Two colors ship today, not one**: career-web correctly uses `primary-500`; the other 3 apps
  default to an un-themed, previously-untokenized `#30699D`, now captured as
  `extended-loader-blue`. Worth an explicit decision on migrating the other 3 to `primary-500`
  rather than keeping two blues.
