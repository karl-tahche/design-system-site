# Card

**Recommended — new.** Stat and Data Display are both, structurally, specific cases of a more
general "white surface, rounded corners, light shadow" container — but nothing generic exists yet
for arbitrary grouped content (a settings section, a summary panel, a dashboard widget shell).
shadcn-vue's Card is the closest reference point.

## Usage

<div class="ds-demo">
  <Card />
</div>

```vue
<Card heading="Card heading" description="Supporting description for this card.">
  <!-- slot for actions, a list, anything else -->
</Card>
```

## When to use

- A generic content container that needs visual separation from the page background, but isn't
  specifically a Stat or a Data Display.

## When not to use

- Don't use where Stat already fits (a single headline metric) — use Stat, it's more specific and
  already fully confirmed.

## Why this is proposed, not confirmed

Derived directly from Stat's already-confirmed container tokens (white background, `radius.md`,
`elevation.xsmall`/`small` — this reference uses the lighter `xsmall` since Card is meant for
lower-emphasis grouping than a headline Stat) so a generic container and a specific metric card
read as the same visual family rather than two competing surface styles.
