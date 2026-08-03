# Components

Every component below is labeled by status and, where it's real, by where to find it — in the
spirit of [ui.nuxt.com/docs](https://ui.nuxt.com/docs) and
[shadcn-vue](https://www.shadcn-vue.com/docs/components). Nothing here is silently invented or
silently missing: see [Working Method](/philosophies/working-method) for why that distinction
matters.

Every live demo on this site now also responds to the site's own dark/light toggle (top right),
following the **Recommended, not-yet-shipped** dark-mode mapping documented on
[Foundations → Colors](/tokens/colors#dark-mode-recommended-not-shipped-anywhere-yet) — reusing
the same ramp values already defined, just flipping which step plays which role. None of the 5
apps have a real dark mode today, so treat what you see here as a working proposal to build from,
not a confirmed pattern.

## Existing

Confirmed either via live Figma design context or a real-code audit across the 5 apps.

| Component | Confirmed via | Real location |
|---|---|---|
| [Button](/components/button) | Figma (full Size × Type × State matrix) | shared `Button.vue`, all 5 apps |
| [Badge](/components/badge) | Real code | shared `Badge.vue`, 4 of 5 apps |
| [Input Field](/components/input-field) | Figma | shared Form components, all 5 apps |
| [Alert Inline](/components/alert-inline) | Figma + real code | `SnackBar.vue`, 4 of 5 apps |
| [Tab](/components/tab) | Real code | shared `Tabs.vue`, 4 of 5 apps |
| [Modal](/components/modal) | Figma | per-app modal components |
| [Accordion](/components/accordion) | Figma | per-app accordion components |
| [Avatar](/components/avatar) | Figma | per-app avatar components |
| [Switch (Form Control)](/components/switch) | Real code | shared `FormToggle.vue`, 4 of 5 apps |
| [Breadcrumb](/components/breadcrumb) | Figma | no shared component — hand-rolled per app |
| [Button Group](/components/button-group) | Real code | `ListViewToggle.vue`, recruitment-portal |
| [Data Display](/components/data-display) | Real code | `EmployeeDetails.vue`, client-dashboard |
| [File Upload](/components/file-upload) | Real code | `FormUploadBox.vue`, 4 of 5 apps |
| [Loader](/components/loader) | Real code | `Loader.vue`/`LoaderScreen.vue`, 4 of 5 apps |
| [Pagination](/components/pagination) | Real code | per-app, 2 real active-state patterns |
| [Progress Bar](/components/progress-bar) | Figma | — |
| [Side Navigation](/components/side-navigation) | Real code | `LeftSidebarMenuItem.vue`, 4 of 5 apps |
| [Stat](/components/stat) | Figma | — |
| [Table](/components/table) | Figma | — |
| [Title](/components/title) | Figma | — |
| [Tooltip](/components/tooltip) | Figma | — |

## Not yet built

Named in Figma's real component library, but no matching real implementation exists today.
Documented as open gaps, not invented around — see each page for the recommended shape.

| Component | Status |
|---|---|
| [List Field](/components/list-field) | Closest real pattern: ad hoc repeater rows built from Button |
| [Progress Step](/components/progress-step) | Step-index logic exists; no visual step indicator anywhere |
| [Date Picker](/components/date-picker) | Two libraries wrapped, neither themed past the trigger input |
| [Sticky Alert](/components/sticky-alert) | No persistent, viewport-anchored banner exists anywhere |

## Recommended — new

Not in Figma's vocabulary at all — proposed here to fill real, evident gaps (forms, transient
notifications, generic containers, empty states), built entirely from tokens already shipped by
this system. Modeled on [shadcn-vue](https://www.shadcn-vue.com/docs/components) where a direct
equivalent exists.

| Component | Fills the gap left by |
|---|---|
| [Checkbox](/components/checkbox) | No shared implementation anywhere despite universal need |
| [Radio Group](/components/radio-group) | Same gap as Checkbox, for mutually-exclusive choices |
| [Textarea](/components/textarea) | Input Field covers single-line only |
| [Toast](/components/toast) | Alert Inline is a banner, not a transient notification |
| [Card](/components/card) | Stat/Data Display are specific cases of a generic container |
| [Empty State](/components/empty-state) | No token-correct zero-results treatment exists anywhere |

**Candidates not yet prototyped**, worth a look if a real need surfaces: Select/Combobox,
Dropdown Menu, Skeleton loading state, Popover, and a Command Palette — all common in
shadcn-vue-style systems, none with strong evidence of need in these 5 apps yet. Per this
system's own working method: don't build ahead of real need, but don't ignore a gap once one
shows up either.
