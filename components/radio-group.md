# Radio Group

**Recommended — new.** Same gap as Checkbox: no named Figma component, no shared implementation
in code, but a real, recurring need (employment type, approval decision, single-select filters).
Modeled on shadcn-vue's Radio Group.

## Usage

<div class="ds-demo">
  <RadioGroup />
</div>

```vue
<RadioGroup v-model="value" :options="['Full-time', 'Part-time', 'Contract']" />
```

## When to use

- Mutually-exclusive choices where all options should stay visible at once (2–5 options).
- Prefer a Select/dropdown instead once the option count gets large enough that showing every
  option costs more space than it's worth.

## Why this is proposed, not confirmed

No shared `RadioGroup.vue` exists in the 2026-07 audit — same situation as Checkbox. Selected
state uses `primary-500`, matching Switch's "on" color recommendation and Button's Primary tone,
so all three read as the same "this is the active choice" signal across the system.
