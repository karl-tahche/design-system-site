# Title

**Existing** — confirmed directly from Figma design context. This is a page-heading pattern, not
a token in itself.

## Usage

<div class="ds-demo">
  <Title />
</div>

```vue
<Title overline="Recruitment" heading="Job Openings" />
```

## When to use

- The top of any primary page view, pairing a heading with 1-2 page-level actions.

## Known findings

- Heading uses `h2` — inheriting that token's now-resolved Extrabold(800)-vs-Bold(700) conflict
  directly (see the Typography foundation page).
- Overline/description runs `paragraph-small` in `neutral-500`.
- A circular `primary-50` icon container is optional, as is the trailing action pair — shown here
  as a Secondary + Primary button, both Medium size.
