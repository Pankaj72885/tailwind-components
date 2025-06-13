# Tailwind CSS Components Library

A modern, lightweight, and customizable component library built with Tailwind CSS. This library provides a set of reusable UI components that are easy to integrate into any Tailwind CSS project.

## Features

- 🎨 **Customizable**: All components are built with Tailwind CSS and can be easily customized to match your design system.
- 🚀 **Lightweight**: No external dependencies, just Tailwind CSS.
- 📦 **Tree-shakable**: Only import the components you need.
- 🔍 **TypeScript Support**: Full TypeScript support with type definitions for all components.
- 🌙 **Dark Mode Support**: All components support dark mode out of the box.
- 🧩 **Modular**: Each component is independent and can be used on its own.

## Installation

```bash
npm install tailwindcss-components
```

Make sure you have Tailwind CSS installed in your project:

```bash
npm install tailwindcss
```

## Usage

### Import Styles

Import the component styles in your main CSS file:

```css
@import 'tailwindcss-components/dist/styles.css';
```

Or import only the components you need:

```css
@import 'tailwindcss-components/dist/components/button.css';
@import 'tailwindcss-components/dist/components/card.css';
```

### Using Components

You can use the component classes directly in your HTML:

```html
<button class="btn btn-primary btn-md">Click Me</button>

<div class="card card-elevated p-md">
  <div class="card-header">Card Title</div>
  <div class="card-body">Card Content</div>
  <div class="card-footer">Card Footer</div>
</div>
```

### Using with JavaScript Frameworks

For JavaScript frameworks like React, Vue, or Svelte, you can use the utility functions to generate the class names:

```jsx
import { getComponentClasses } from 'tailwindcss-components';
import { components } from 'tailwindcss-components';

function Button({ variant = 'primary', size = 'md', disabled, children }) {
  const buttonClasses = getComponentClasses(components.button, {
    variant,
    size,
    disabled
  });
  
  return (
    <button className={buttonClasses} disabled={disabled}>
      {children}
    </button>
  );
}
```

## Available Components

- **Button**: Interactive button component with multiple variants and states
- **Card**: Container component for grouping related content
- **Input**: Form input component with validation states and icons
- **Modal**: Overlay dialog component with backdrop and focus management
- **Badge**: Small status descriptor component

## Customization

You can customize the components by overriding the CSS variables or extending the Tailwind CSS configuration:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          // ... other shades
          500: '#3b82f6',
          // ... other shades
          900: '#1e3a8a',
        },
        // ... other colors
      },
    },
  },
};
```

## License

MIT