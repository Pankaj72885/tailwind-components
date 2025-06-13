#!/usr/bin/env bun

import { spawnSync } from 'child_process';
import { join } from 'path';

// Define paths
const ROOT_DIR = join(import.meta.dir, '..');

// Build TypeScript
function buildTS() {
  console.log('🔨 Building TypeScript...');
  
  const result = spawnSync('bunx', ['tsup', 'src/index.ts', '--format', 'esm,cjs', '--dts'], {
    cwd: ROOT_DIR,
    stdio: 'inherit',
    shell: true
  });
  
  if (result.status !== 0) {
    console.error('❌ TypeScript build failed');
    process.exit(1);
  }
  
  console.log('✅ TypeScript build completed');
}

// Run the build
buildTS();