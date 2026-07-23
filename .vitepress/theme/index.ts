// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import './custom.css';

import Button from './components/Button.vue';
import Badge from './components/Badge.vue';
import InputField from './components/InputField.vue';
import AlertInline from './components/AlertInline.vue';
import Tab from './components/Tab.vue';
import Modal from './components/Modal.vue';
import Accordion from './components/Accordion.vue';
import Avatar from './components/Avatar.vue';
import Switch from './components/Switch.vue';
import ColorPalette from './components/ColorPalette.vue';
import TypeScale from './components/TypeScale.vue';
import MotionDemo from './components/MotionDemo.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Registered globally so every .md page can use these directly, e.g.
    // `<Button variant="primary" />`, with no per-page import.
    app.component('Button', Button);
    app.component('Badge', Badge);
    app.component('InputField', InputField);
    app.component('AlertInline', AlertInline);
    app.component('Tab', Tab);
    app.component('Modal', Modal);
    app.component('Accordion', Accordion);
    app.component('Avatar', Avatar);
    app.component('Switch', Switch);
    app.component('ColorPalette', ColorPalette);
    app.component('TypeScale', TypeScale);
    app.component('MotionDemo', MotionDemo);
  },
} satisfies Theme;
