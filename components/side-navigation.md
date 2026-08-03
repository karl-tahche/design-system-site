# Side Navigation

**Existing** — item states confirmed via a shared `LeftSidebarMenuItem.vue` (4 of 5 apps). The
dark container background shown in this reference is illustrative only — the container itself
wasn't part of the audit, only the item states were.

## Usage

<div class="ds-demo">
  <SideNavigation />
</div>

```vue
<SideNavigation />
```

## When to use

- Primary app navigation in any of the 5 apps' admin/dashboard shells.

## Known findings

- **Corrects two earlier Figma-only claims**: real active state is `secondary-500` background at
  `radius.md` (8px) with `primary-500` text — **not** `neutral-750` text nor a 6px radius, and
  there's **no left-border indicator** anywhere in real code.
- Inactive is plain white text; hover shifts to `secondary-500` text with bold weight.
- **No badge/count-indicator element exists in any real implementation** — an earlier
  `label-xsmall` "Side Nav Item badge" claim was Figma-only and has been removed.
- Collapsed/expanded rail behavior (V2 sidebars only) shows/hides labels with a 250ms delay and
  reveals a tooltip on hover — real, but not yet captured as its own token.
