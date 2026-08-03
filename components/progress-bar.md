# Progress Bar

**Existing** — confirmed directly from Figma design context.

## Usage

<div class="ds-demo">
  <ProgressBar />
</div>

```vue
<ProgressBar :value="6" :total="10" label="Profile completion" />
```

## When to use

- A determinate, segmented progress indicator (profile completion, multi-field form progress).

## When not to use

- Don't use for an indeterminate/unknown-duration wait — that's Loader.

## Known findings

- Built from individual **1-unit-wide `Block` segments** in a flex row on a `neutral-100`,
  fully-rounded track — **not** a single scaling fill. Filled segments are `primary-500`;
  unfilled ones render as a separate gray asset in the source file.
- Three sizes in Figma (Large/Medium/Small: 88px/80px/72px tall containers), each pairing a
  `paragraph-medium-500` label with a `paragraph-small` caption.
