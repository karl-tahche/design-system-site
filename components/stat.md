# Stat

**Existing** — confirmed directly from Figma design context.

## Usage

<div class="ds-demo">
  <Stat />
</div>

```vue
<Stat label="Active Applicants" value="1,284" delta="+12.4%" />
```

## When to use

- Dashboard summary metrics — a single headline number with supporting context.

## Known findings

- White background, `radius.md` (8px), `24px` padding, the confirmed `elevation.small` shadow.
- The big number uses `h3` — the style this audit's typography pass corrected to Semibold (600),
  not the Regular weight one might expect from its size alone.
- The optional percentage badge uses the same `bg-{ramp}-50` / `text-{ramp}-500` semantic pairing
  used elsewhere in this system (Badge, Alert Inline) — here confirmed specifically for the
  Success ramp.
