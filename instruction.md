# TailwindCSS v4 Component Library with Bun

A blazing-fast component library built with Bun runtime and TailwindCSS v4.1.10, ready for npm distribution.

## Project Architecture

```
tailwindcss-components/
├── src/
│   ├── components/
│   │   ├── button/
│   │   │   ├── index.css
│   │   │   ├── variants.css
│   │   │   └── index.ts
│   │   ├── card/
│   │   │   ├── index.css
│   │   │   ├── variants.css
│   │   │   └── index.ts
│   │   ├── input/
│   │   │   ├── index.css
│   │   │   ├── variants.css
│   │   │   └── index.ts
│   │   ├── modal/
│   │   │   ├── index.css
│   │   │   ├── variants.css
│   │   │   └── index.ts
│   │   ├── badge/
│   │   │   ├── index.css
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── utilities/
│   │   ├── animations.css
│   │   ├── shadows.css
│   │   ├── masks.css
│   │   └── index.ts
│   ├── base/
│   │   ├── reset.css
│   │   ├── typography.css
│   │   └── index.ts
│   ├── theme/
│   │   ├── colors.css
│   │   ├── spacing.css
│   │   ├── shadows.css
│   │   └── index.ts
│   ├── index.css
│   └── index.ts
├── dist/
├── examples/
│   ├── html/
│   ├── react/
│   ├── vue/
│   └── svelte/
├── docs/
├── tests/
├── scripts/
│   ├── build.ts
│   ├── dev.ts
│   └── release.ts
├── package.json
├── bunfig.toml
├── tailwind.config.ts
├── tsconfig.json
├── biome.json
├── README.md
└── CHANGELOG.md
```

## Core Files

### package.json
```json
{
  "name": "@yourname/tailwind-components",
  "version": "1.0.0",
  "description": "A blazing-fast TailwindCSS v4.1 component library built with Bun",
  "type": "module",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.esm.js",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./css": "./dist/index.css",
    "./components/*": "./dist/components/*.js"
  },
  "files": [
    "dist",
    "src",
    "README.md",
    "CHANGELOG.md"
  ],
  "scripts": {
    "build": "bun run scripts/build.ts",
    "build:css": "tailwindcss -i src/index.css -o dist/index.css --minify",
    "build:types": "bun tsc --emitDeclarationOnly",
    "dev": "bun run scripts/dev.ts",
    "dev:css": "tailwindcss -i src/index.css -o dist/index.css --watch",
    "test": "bun test",
    "test:watch": "bun test --watch",
    "test:coverage": "bun test --coverage",
    "lint": "bunx @biomejs/biome check src/",
    "lint:fix": "bunx @biomejs/biome check --apply src/",
    "format": "bunx @biomejs/biome format --write src/",
    "typecheck": "bun tsc --noEmit",
    "clean": "rm -rf dist",
    "prepublishOnly": "bun run clean && bun run build",
    "release": "bun run scripts/release.ts",
    "preview": "bun run build && cd examples/html && bun --bun serve .",
    "size": "bunx size-limit"
  },
  "keywords": [
    "tailwindcss",
    "tailwind-v4",
    "css",
    "components",
    "ui",
    "design-system",
    "typescript",
    "bun",
    "fast"
  ],
  "author": "Your Name <your.email@example.com>",
  "license": "MIT",
  "peerDependencies": {
    "tailwindcss": "^4.1.0"
  },
  "devDependencies": {
    "@biomejs/biome": "^1.9.4",
    "@types/bun": "^1.2.12",
    "size-limit": "^11.1.6",
    "tailwindcss": "^4.1.10",
    "typescript": "^5.6.3"
  },
  "engines": {
    "bun": ">=1.2.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/tailwind-components.git"
  },
  "homepage": "https://github.com/yourusername/tailwind-components#readme",
  "bugs": {
    "url": "https://github.com/yourusername/tailwind-components/issues"
  },
  "size-limit": [
    {
      "path": "dist/index.js",
      "limit": "10 KB"
    },
    {
      "path": "dist/index.css",
      "limit": "50 KB"
    }
  ]
}
```

### bunfig.toml
```toml
[install]
# Configure package manager behavior
cache = true
exact = false
globalDir = "~/.bun/install/global"
globalBinDir = "~/.bun/bin"
registry = "https://registry.npmjs.org"
scopes = {}
optional = true
dev = true
peer = false
production = false
lockfile = true
dryRun = false

[install.lockfile]
save = true
print = "yarn"

[test]
coverage = true
coverageDir = "coverage"
preload = ["./tests/setup.ts"]

[build]
target = "bun"
minify = true
splitting = true
```

### src/index.css (TailwindCSS v4.1 with latest features)
```css
@import "tailwindcss";
@import "./theme/index.css";
@import "./base/index.css";
@import "./utilities/index.css";
@import "./components/index.css";

/* TailwindCSS v4.1 Theme Configuration */
@theme {
  /* Enhanced Color Palette */
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-200: #bfdbfe;
  --color-primary-300: #93c5fd;
  --color-primary-400: #60a5fa;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-primary-800: #1e40af;
  --color-primary-900: #1e3a8a;
  --color-primary-950: #172554;

  /* Status Colors */
  --color-success-50: #f0fdf4;
  --color-success-500: #22c55e;
  --color-success-600: #16a34a;
  --color-success-700: #15803d;

  --color-danger-50: #fef2f2;
  --color-danger-500: #ef4444;
  --color-danger-600: #dc2626;
  --color-danger-700: #b91c1c;

  --color-warning-50: #fefce8;
  --color-warning-500: #eab308;
  --color-warning-600: #ca8a04;
  --color-warning-700: #a16207;

  --color-info-50: #f0f9ff;
  --color-info-500: #06b6d4;
  --color-info-600: #0891b2;
  --color-info-700: #0e7490;

  /* Typography */
  --font-family-component: "Inter Variable", "Inter", system-ui, sans-serif;
  --font-family-mono: "JetBrains Mono Variable", "JetBrains Mono", ui-monospace, monospace;
  
  /* Enhanced Spacing */
  --spacing-18: 4.5rem;
  --spacing-88: 22rem;
  --spacing-112: 28rem;
  --spacing-128: 32rem;

  /* New Text Shadow Utilities (v4.1 feature) */
  --text-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.05);
  --text-shadow: 0 1px 3px rgb(0 0 0 / 0.1), 0 1px 2px rgb(0 0 0 / 0.06);
  --text-shadow-md: 0 4px 6px rgb(0 0 0 / 0.07), 0 2px 4px rgb(0 0 0 / 0.06);
  --text-shadow-lg: 0 10px 15px rgb(0 0 0 / 0.1), 0 4px 6px rgb(0 0 0 / 0.05);
  --text-shadow-xl: 0 20px 25px rgb(0 0 0 / 0.1), 0 8px 10px rgb(0 0 0 / 0.04);

  /* Enhanced Animations */
  --animation-fade-in: fadeIn 0.5s ease-in-out;
  --animation-slide-up: slideUp 0.3s ease-out;
  --animation-slide-in: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  --animation-bounce-in: bounceIn 0.6s ease-out;
  --animation-scale-in: scaleIn 0.2s ease-out;
  --animation-shimmer: shimmer 2s linear infinite;

  /* Advanced Shadows */
  --shadow-glow: 0 0 20px rgb(59 130 246 / 0.5);
  --shadow-glow-lg: 0 0 40px rgb(59 130 246 / 0.4);
  --shadow-inner-lg: inset 0 4px 8px rgb(0 0 0 / 0.1);
}

/* Enhanced Keyframes */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    transform: translateY(100%);
    opacity: 0;
  }
  to { 
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes bounceIn {
  0% { 
    transform: scale(0.3);
    opacity: 0;
  }
  50% { 
    transform: scale(1.05);
  }
  70% { 
    transform: scale(0.9);
  }
  100% { 
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* CSS Mask Utilities (v4.1 feature) */
.mask-fade-r {
  mask-image: linear-gradient(to right, black, transparent);
}

.mask-fade-l {
  mask-image: linear-gradient(to left, black, transparent);
}

.mask-fade-t {
  mask-image: linear-gradient(to top, black, transparent);
}

.mask-fade-b {
  mask-image: linear-gradient(to bottom, black, transparent);
}
```

### src/index.ts (TypeScript Entry Point)
```typescript
// Export all component utilities and configurations
export { default as components } from './components/index.ts';
export { default as utilities } from './utilities/index.ts';
export { default as theme } from './theme/index.ts';

// Re-export individual components for tree-shaking
export { default as Button, type ButtonProps } from './components/button/index.ts';
export { default as Card, type CardProps } from './components/card/index.ts';
export { default as Input, type InputProps } from './components/input/index.ts';
export { default as Modal, type ModalProps } from './components/modal/index.ts';
export { default as Badge, type BadgeProps } from './components/badge/index.ts';

// Component metadata with enhanced typing
export interface ComponentMetadata {
  name: string;
  description: string;
  variants?: string[];
  sizes?: string[];
  states?: string[];
  parts?: string[];
  category: 'form' | 'layout' | 'feedback' | 'navigation' | 'data-display';
}

export const componentList: Record<string, ComponentMetadata> = {
  Button: {
    name: 'Button',
    description: 'Interactive button component with multiple variants and states',
    variants: ['primary', 'secondary', 'outline', 'ghost', 'danger', 'success', 'warning', 'info'],
    sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
    states: ['default', 'hover', 'active', 'focus', 'disabled', 'loading'],
    category: 'form'
  },
  Card: {
    name: 'Card',
    description: 'Container component for grouping related content',
    variants: ['default', 'elevated', 'outlined', 'interactive'],
    parts: ['header', 'body', 'footer', 'image'],
    category: 'layout'
  },
  Input: {
    name: 'Input',
    description: 'Form input component with validation states and icons',
    variants: ['default', 'error', 'success', 'warning', 'disabled'],
    sizes: ['sm', 'md', 'lg'],
    states: ['default', 'focus', 'error', 'success', 'disabled'],
    category: 'form'
  },
  Modal: {
    name: 'Modal',
    description: 'Overlay dialog component with backdrop and focus management',
    variants: ['default', 'fullscreen', 'drawer', 'center'],
    parts: ['overlay', 'container', 'header', 'body', 'footer', 'close'],
    category: 'feedback'
  },
  Badge: {
    name: 'Badge',
    description: 'Small status descriptor component',
    variants: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    sizes: ['sm', 'md', 'lg'],
    category: 'data-display'
  }
} as const;

// Version and metadata
export const version = '1.0.0';
export const tailwindVersion = '^4.1.0';

// Utility types
export type ComponentVariant<T extends keyof typeof componentList> = 
  typeof componentList[T]['variants'] extends readonly string[] 
    ? typeof componentList[T]['variants'][number] 
    : never;

export type ComponentSize<T extends keyof typeof componentList> = 
  typeof componentList[T]['sizes'] extends readonly string[] 
    ? typeof componentList[T]['sizes'][number] 
    : never;
```

### src/components/button/index.ts
```typescript
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning' | 'info';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  icon?: boolean;
  fullWidth?: boolean;
}

export const buttonClasses = {
  base: 'btn',
  variants: {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
    danger: 'btn-danger',
    success: 'btn-success',
    warning: 'btn-warning',
    info: 'btn-info'
  },
  sizes: {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
    xl: 'btn-xl'
  },
  states: {
    loading: 'btn-loading',
    disabled: 'btn-disabled',
    icon: 'btn-icon',
    fullWidth: 'btn-full'
  }
} as const;

export default buttonClasses;
```

### src/components/badge/index.ts
```typescript
export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  removable?: boolean;
}

export const badgeClasses = {
  base: 'badge',
  variants: {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    success: 'badge-success',
    danger: 'badge-danger',
    warning: 'badge-warning',
    info: 'badge-info'
  },
  sizes: {
    sm: 'badge-sm',
    md: 'badge-md',
    lg: 'badge-lg'
  },
  states: {
    dot: 'badge-dot',
    removable: 'badge-removable'
  }
} as const;

export default badgeClasses;
```

### src/components/badge/index.css
```css
.badge {
  @apply inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full border;
  font-family: var(--font-family-component);
}

.badge-primary {
  @apply bg-primary-100 text-primary-800 border-primary-200;
}

.badge-secondary {
  @apply bg-gray-100 text-gray-800 border-gray-200;
}

.badge-success {
  @apply bg-success-100 text-success-800 border-success-200;
}

.badge-danger {
  @apply bg-danger-100 text-danger-800 border-danger-200;
}

.badge-warning {
  @apply bg-warning-100 text-warning-800 border-warning-200;
}

.badge-info {
  @apply bg-info-100 text-info-800 border-info-200;
}

/* Sizes */
.badge-sm {
  @apply px-1.5 py-0.5 text-xs;
}

.badge-md {
  @apply px-2 py-1 text-sm;
}

.badge-lg {
  @apply px-3 py-1.5 text-sm;
}

/* States */
.badge-dot {
  @apply px-1.5 py-1.5 rounded-full;
  
  &::before {
    content: '';
    @apply w-1.5 h-1.5 rounded-full bg-current;
  }
}

.badge-removable {
  @apply pr-1;
  
  .badge-remove {
    @apply ml-1 p-0.5 rounded-full hover:bg-black/10 cursor-pointer transition-colors;
  }
}
```

### scripts/build.ts
```typescript
#!/usr/bin/env bun

import { $ } from "bun";
import { existsSync, rmSync } from "fs";

console.log("🚀 Building TailwindCSS Component Library with Bun...");

// Clean dist directory
if (existsSync("dist")) {
  rmSync("dist", { recursive: true });
  console.log("🧹 Cleaned dist directory");
}

try {
  // Build CSS
  console.log("🎨 Building CSS...");
  await $`tailwindcss -i src/index.css -o dist/index.css --minify`;
  console.log("✅ CSS built successfully");

  // Build JavaScript/TypeScript
  console.log("📦 Building JavaScript...");
  await $`bun build src/index.ts --outdir dist --outfile index.js --target node --format cjs`;
  await $`bun build src/index.ts --outdir dist --outfile index.esm.js --target node --format esm`;
  console.log("✅ JavaScript built successfully");

  // Build TypeScript declarations
  console.log("🔷 Building TypeScript declarations...");
  await $`bun tsc --emitDeclarationOnly`;
  console.log("✅ TypeScript declarations built successfully");

  // Build individual components
  console.log("🧩 Building individual components...");
  await $`mkdir -p dist/components`;
  
  const components = ["button", "card", "input", "modal", "badge"];
  for (const component of components) {
    await $`bun build src/components/${component}/index.ts --outdir dist/components/${component} --outfile index.js --target node --format cjs`;
    await $`bun build src/components/${component}/index.ts --outdir dist/components/${component} --outfile index.esm.js --target node --format esm`;
  }
  console.log("✅ Individual components built successfully");

  // Show build stats
  console.log("\n📊 Build Statistics:");
  await $`ls -lah dist/`;
  
  console.log("\n🎉 Build completed successfully!");
  
} catch (error) {
  console.error("❌ Build failed:", error);
  process.exit(1);
}
```

### scripts/dev.ts
```typescript
#!/usr/bin/env bun

import { $ } from "bun";
import { watch } from "fs";

console.log("🔥 Starting development server...");

// Start CSS watcher
const cssWatcher = $`tailwindcss -i src/index.css -o dist/index.css --watch`.spawn();
console.log("👀 CSS watcher started");

// Start TypeScript watcher
const tsWatcher = $`bun tsc --watch --noEmit`.spawn();
console.log("👀 TypeScript watcher started");

// Watch for file changes and rebuild
watch("src", { recursive: true }, async (event, filename) => {
  if (filename?.endsWith('.ts')) {
    console.log(`🔄 Rebuilding due to ${filename} change...`);
    try {
      await $`bun run build`;
      console.log("✅ Rebuild completed");
    } catch (error) {
      console.error("❌ Rebuild failed:", error);
    }
  }
});

console.log("🚀 Development server is running!");
console.log("📝 Open examples/html/index.html to see components");
console.log("🛑 Press Ctrl+C to stop");

// Keep the process running
process.on('SIGINT', () => {
  console.log('\n👋 Stopping development server...');
  cssWatcher.kill();
  tsWatcher.kill();
  process.exit(0);
});
```

### tailwind.config.ts
```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{css,ts,js}',
    './examples/**/*.{html,js,ts,vue,svelte}',
    './docs/**/*.{html,js,ts,md,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'component': ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono Variable', 'JetBrains Mono', 'ui-monospace', 'monospace']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-in': 'slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'shimmer': 'shimmer 2s linear infinite'
      }
    }
  },
  plugins: []
};

export default config;
```

### biome.json
```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "organizeImports": {
    "enabled": true
  },
  "files": {
    "include": ["src/**/*.ts", "src/**/*.js", "scripts/**/*.ts"]
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "style": {
        "noNonNullAssertion": "off"
      },
      "suspicious": {
        "noExplicitAny": "warn"
      }
    }
  },
  "formatter": {
    "enabled": true,
    "formatWithErrors": false,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineEnding": "lf",
    "lineWidth": 100,
    "attributePosition": "auto"
  },
  "javascript": {
    "formatter": {
      "jsxQuoteStyle": "double",
      "quoteProperties": "asNeeded",
      "trailingCommas": "es5",
      "semicolons": "always",
      "arrowParentheses": "always",
      "bracketSpacing": true,
      "bracketSameLine": false,
      "quoteStyle": "single"
    }
  },
  "json": {
    "formatter": {
      "trailingCommas": "none"
    }
  }
}
```

## Enhanced Usage Instructions

### Installation
```bash
bun add @yourname/tailwind-components
```

### Setup in User's Project

#### With Bun (Recommended)
```bash
# Install dependencies
bun add tailwindcss @yourname/tailwind-components

# Import CSS in your main CSS file
echo '@import "@yourname/tailwind-components/css";' >> src/styles.css
```

#### With Vite + Bun
```typescript
// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ]
    }
  }
});
```

### Example Usage with v4.1 Features
```html
<!-- Enhanced Buttons with new features -->
<button class="btn btn-primary btn-md">
  <span class="text-shadow-sm">Primary Button</span>
</button>

<button class="btn btn-outline btn-lg text-shadow-md">
  Large Outline with Text Shadow
</button>

<!-- Badge Component (New) -->
<span class="badge badge-success badge-md">Active</span>
<span class="badge badge-danger badge-dot"></span>
<span class="badge badge-primary badge-removable">
  Removable
  <span class="badge-remove">×</span>
</span>

<!-- Card with Mask Effects -->
<div class="card card-interactive">
  <div class="card-image mask-fade-b">
    <img src="image.jpg" alt="Card">
  </div>
  <div class="card-body">
    <h3 class="card-title text-shadow-sm">Masked Image Card</h3>
    <p class="card-text">Using new mask utilities</p>
  </div>
</div>

<!-- Input with Enhanced Shadows -->
<div class="input-group">
  <label class="input-label">Enhanced Input</label>
  <input type="text" class="input shadow-glow focus:shadow-glow-lg">
</div>
```

## Development Workflow with Bun

1. **Install Bun**: `curl -fsSL https://bun.sh/install | bash`
2. **Setup Project**: `bun install`
3. **Development**: `bun run dev`
4. **Build**: `bun run build`
5. **Test**: `bun test`
6. **Lint & Format**: `bun run lint:fix && bun run format`
7. **Preview**: `bun run preview`
8. **Release**: `bun run release`

## Bun-Specific Optimizations

- **Lightning-fast installs**: Up to 25x faster than npm
- **Native TypeScript**: No compilation step needed
- **Built-in bundler**: No webpack/rollup configuration
- **Integrated test runner**: Fast testing with coverage
- **Native watch mode**: Instant rebuilds
- **Bundle size optimization**: Automatic tree-shaking

## New TailwindCSS v4.1 Features

- **Text Shadow Utilities**: `text-shadow-sm`, `text-shadow-md`, etc.
- **Enhanced Mask Utilities**: `mask-fade-r`, `mask-fade-l`, etc.
- **Improved Performance**: 3.5x faster builds
- **Better CSS Variables**: Native CSS custom properties
- **Advanced Animations**: More fluid and performant animations

This architecture provides a blazing-fast, modern foundation using Bun and the latest TailwindCSS v4.1.10 features!