/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('tahche-design-tokens')],
  content: [
    './*.md',
    './**/*.md',
    './.vitepress/theme/**/*.{vue,ts,js}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
  // The Typography token page builds its class names dynamically
  // (`text-${style.key}`) to render every style from typography.json without
  // hand-listing each one — Tailwind's content scanner can't see a template
  // literal, so the composite .text-{name} classes (shipped via a plugin in
  // tahche-design-tokens' preset) need an explicit safelist to survive purging.
  safelist: [{ pattern: /^text-(display|heading|paragraph|label|overline)/ }],
};
