import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Tahche Design System',
  description: 'Tokens, components, and guidelines for Tahche’s product suite.',
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Foundations', link: '/tokens/colors' },
      { text: 'Components', link: '/components/button' },
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
          { text: 'Button', link: '/components/button' },
          { text: 'Badge', link: '/components/badge' },
          { text: 'Input Field', link: '/components/input-field' },
          { text: 'Alert Inline', link: '/components/alert-inline' },
          { text: 'Tab', link: '/components/tab' },
          { text: 'Modal', link: '/components/modal' },
          { text: 'Accordion', link: '/components/accordion' },
          { text: 'Avatar', link: '/components/avatar' },
          { text: 'Switch (Form Control)', link: '/components/switch' },
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
