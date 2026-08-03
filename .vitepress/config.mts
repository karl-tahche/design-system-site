import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Tahche Design System',
  description: 'Tokens, components, and guidelines for Tahche’s product suite.',
  cleanUrls: true,
  base: '/design-system-site/',
  head: [['meta', { name: 'robots', content: 'noindex, nofollow' }]],

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Foundations', link: '/tokens/colors' },
      { text: 'Components', link: '/components/index' },
      { text: 'Philosophies', link: '/philosophies/principles' },
      { text: 'Brand', link: '/brand/overview' },
      { text: 'Guidelines', link: '/guidelines/dos-and-donts' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [{ text: 'Introduction', link: '/guide/introduction' }],
      },
      {
        text: 'Foundations',
        items: [
          { text: 'Colors', link: '/tokens/colors' },
          { text: 'Typography', link: '/tokens/typography' },
          { text: 'Spacing', link: '/tokens/spacing' },
          { text: 'Elevation', link: '/tokens/elevation' },
          { text: 'Radius', link: '/tokens/radius' },
          { text: 'Motion', link: '/tokens/motion' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Overview', link: '/components/index' },
          {
            text: 'Existing',
            collapsed: true,
            items: [
              { text: 'Button', link: '/components/button' },
              { text: 'Badge', link: '/components/badge' },
              { text: 'Input Field', link: '/components/input-field' },
              { text: 'Alert Inline', link: '/components/alert-inline' },
              { text: 'Tab', link: '/components/tab' },
              { text: 'Modal', link: '/components/modal' },
              { text: 'Accordion', link: '/components/accordion' },
              { text: 'Avatar', link: '/components/avatar' },
              { text: 'Switch (Form Control)', link: '/components/switch' },
              { text: 'Breadcrumb', link: '/components/breadcrumb' },
              { text: 'Button Group', link: '/components/button-group' },
              { text: 'Data Display', link: '/components/data-display' },
              { text: 'File Upload', link: '/components/file-upload' },
              { text: 'Loader', link: '/components/loader' },
              { text: 'Pagination', link: '/components/pagination' },
              { text: 'Progress Bar', link: '/components/progress-bar' },
              { text: 'Side Navigation', link: '/components/side-navigation' },
              { text: 'Stat', link: '/components/stat' },
              { text: 'Table', link: '/components/table' },
              { text: 'Title', link: '/components/title' },
              { text: 'Tooltip', link: '/components/tooltip' },
            ],
          },
          {
            text: 'Not yet built',
            collapsed: true,
            items: [
              { text: 'List Field', link: '/components/list-field' },
              { text: 'Progress Step', link: '/components/progress-step' },
              { text: 'Date Picker', link: '/components/date-picker' },
              { text: 'Sticky Alert', link: '/components/sticky-alert' },
            ],
          },
          {
            text: 'Recommended — new',
            collapsed: true,
            items: [
              { text: 'Checkbox', link: '/components/checkbox' },
              { text: 'Radio Group', link: '/components/radio-group' },
              { text: 'Textarea', link: '/components/textarea' },
              { text: 'Toast', link: '/components/toast' },
              { text: 'Card', link: '/components/card' },
              { text: 'Empty State', link: '/components/empty-state' },
            ],
          },
        ],
      },
      {
        text: 'Philosophies',
        items: [
          { text: 'Design Principles', link: '/philosophies/principles' },
          { text: 'Working Method', link: '/philosophies/working-method' },
          { text: 'Accessibility Commitments', link: '/philosophies/accessibility' },
          { text: 'Adoption', link: '/philosophies/adoption' },
        ],
      },
      {
        text: 'Brand',
        items: [
          { text: 'Overview', link: '/brand/overview' },
          { text: 'Logo', link: '/brand/logo' },
          { text: 'Color & Typography', link: '/brand/color-and-typography' },
          { text: 'Brand vs. Product', link: '/brand/brand-vs-product' },
        ],
      },
      {
        text: 'Guidelines',
        items: [{ text: "Do's and Don'ts", link: '/guidelines/dos-and-donts' }],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/karl-tahche/tahche-design-tokens' },
    ],

    search: {
      provider: 'local',
    },

    outline: [2, 3],
  },
});
