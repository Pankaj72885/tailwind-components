#!/usr/bin/env bun
import { $ } from "bun";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";

console.log("🚀 Starting build process...");

// Ensure dist directory exists
if (!existsSync("dist")) {
  mkdirSync("dist", { recursive: true });
}

try {
  // Build TypeScript
  console.log("🔨 Building TypeScript...");
  await $`bunx tsup src/index.ts --format cjs,esm --dts --clean --target es2022`;
  console.log("✅ TypeScript build completed");
} catch (error) {
  console.error("❌ TypeScript build failed:", error);
  process.exit(1);
}

try {
  // Build CSS
  console.log("🎨 Building CSS...");
  await $`bunx --bun @tailwindcss/cli -i src/index.css -o dist/index.css --minify --config tailwind.config.ts`;
  console.log("✅ CSS build completed");
} catch (error) {
  console.warn("⚠️ CSS build failed, creating fallback CSS file");

  // Create a basic CSS file as fallback
  const fallbackCSS = `
/* Tailwind Components Library - Fallback CSS */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom component styles */
.component-base {
  @apply rounded-lg shadow-sm border border-gray-200;
}

.btn-primary {
  @apply bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors;
}

.btn-secondary {
  @apply bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors;
}

.btn-warning {
  @apply bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg transition-colors;
}

.card {
  @apply bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden;
}

.card-header {
  @apply px-6 py-4 border-b border-gray-200 bg-gray-50;
}

.card-body {
  @apply px-6 py-4;
}

.card-footer {
  @apply px-6 py-4 border-t border-gray-200 bg-gray-50;
}
`;

  writeFileSync(join("dist", "index.css"), fallbackCSS.trim());
  console.log("✅ Fallback CSS file created");
}

try {
  // Create component package files
  console.log("📦 Creating component package files...");

  // Create package.json for the dist folder
  const packageJson = {
    name: "tailwind-components",
    version: "1.0.0",
    description: "Tailwind CSS components library",
    main: "./index.js",
    module: "./index.esm.js",
    types: "./index.d.ts",
    exports: {
      ".": {
        types: "./index.d.ts",
        import: "./index.esm.js",
        require: "./index.js",
      },
      "./styles": "./index.css",
    },
    peerDependencies: {
      react: ">=16.8.0",
      "react-dom": ">=16.8.0",
    },
  };

  writeFileSync(
    join("dist", "package.json"),
    JSON.stringify(packageJson, null, 2)
  );

  // Create README for the dist folder
  const readmeContent = `# Tailwind Components

A collection of reusable Tailwind CSS components.

## Installation

\`\`\`bash
npm install tailwind-components
\`\`\`

## Usage

\`\`\`javascript
import { Button, Card } from 'tailwind-components'
import 'tailwind-components/styles'
\`\`\`

## Components

- Button
- Card
- Alert
- Modal
- And more...
`;

  writeFileSync(join("dist", "README.md"), readmeContent);

  console.log("✅ Component package files created");
} catch (error) {
  console.error("❌ Failed to create package files:", error);
  process.exit(1);
}

console.log("🎉 Build completed successfully!");
