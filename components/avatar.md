# Avatar

Confirmed directly from live Figma design context, fully circular at every size from
24px–128px.

## Usage

<div class="ds-demo">
  <Avatar initials="TC" />
</div>

```vue
<Avatar :size="40" initials="TC" />
```

## Sizes

<div class="ds-demo flex flex-wrap items-center gap-4">
  <Avatar :size="24" initials="TC" />
  <Avatar :size="40" initials="TC" />
  <Avatar :size="64" initials="TC" />
  <Avatar :size="96" initials="TC" />
</div>

## With image

<div class="ds-demo">
  <Avatar :size="64" src="https://i.pravatar.cc/128" />
</div>

## When to use

- To represent a person or entity, with a photo when available and initials as the fallback.

## Known findings

- The Initials variant (`primary-50` background, `primary-500` text) is the same light-tint
  pairing used on Secondary buttons and Alert Inline — a consistent, repeated pattern, not a
  coincidence.
- Carries a 1.5px white border for stacking in real code (see Avatar Group's overlapping
  negative margin) — not shown in this single-avatar reference.
