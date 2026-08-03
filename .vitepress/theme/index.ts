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

// Existing, real components documented from a 2026-07-25+ code/Figma audit — filling the gap
// between DESIGN.md's 25 named components and this site's original 9 documented pages.
import Breadcrumb from './components/Breadcrumb.vue';
import ButtonGroup from './components/ButtonGroup.vue';
import DataDisplay from './components/DataDisplay.vue';
import FileUpload from './components/FileUpload.vue';
import Loader from './components/Loader.vue';
import Pagination from './components/Pagination.vue';
import ProgressBar from './components/ProgressBar.vue';
import SideNavigation from './components/SideNavigation.vue';
import Stat from './components/Stat.vue';
import Table from './components/Table.vue';
import Title from './components/Title.vue';
import Tooltip from './components/Tooltip.vue';

// Recommended — new components, not in Figma's vocabulary and not yet built anywhere in the 5
// apps. Proposed to fill real, evident gaps (forms, notifications, empty/placeholder states),
// built from already-shipped tokens rather than new colors or shapes.
import Checkbox from './components/Checkbox.vue';
import RadioGroup from './components/RadioGroup.vue';
import Textarea from './components/Textarea.vue';
import Toast from './components/Toast.vue';
import Card from './components/Card.vue';
import EmptyState from './components/EmptyState.vue';

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

    app.component('Breadcrumb', Breadcrumb);
    app.component('ButtonGroup', ButtonGroup);
    app.component('DataDisplay', DataDisplay);
    app.component('FileUpload', FileUpload);
    app.component('Loader', Loader);
    app.component('Pagination', Pagination);
    app.component('ProgressBar', ProgressBar);
    app.component('SideNavigation', SideNavigation);
    app.component('Stat', Stat);
    app.component('Table', Table);
    app.component('Title', Title);
    app.component('Tooltip', Tooltip);

    app.component('Checkbox', Checkbox);
    app.component('RadioGroup', RadioGroup);
    app.component('Textarea', Textarea);
    app.component('Toast', Toast);
    app.component('Card', Card);
    app.component('EmptyState', EmptyState);
  },
} satisfies Theme;
