#!/usr/bin/env bun

import { spawn } from 'child_process';
import { join } from 'path';

// Define paths
const ROOT_DIR = join(import.meta.dir, '..');

// Start CSS watch process
function startCSSWatch() {
  console.log('🎨 Starting CSS watch process...');
  
  const cssProcess = spawn('bun', ['run', 'dev:css'], {
    cwd: ROOT_DIR,
    stdio: 'inherit',
    shell: true
  });
  
  cssProcess.on('error', (error) => {
    console.error('❌ CSS watch process error:', error);
  });
  
  cssProcess.on('exit', (code) => {
    if (code !== 0 && code !== null) {
      console.error(`❌ CSS watch process exited with code ${code}`);
    }
  });
  
  return cssProcess;
}

// Start example server
function startExampleServer() {
  console.log('🌐 Starting example server...');
  
  const serverProcess = spawn('bun', ['--bun', 'serve', '.'], {
    cwd: join(ROOT_DIR, 'examples'),
    stdio: 'inherit',
    shell: true
  });
  
  serverProcess.on('error', (error) => {
    console.error('❌ Example server error:', error);
  });
  
  serverProcess.on('exit', (code) => {
    if (code !== 0 && code !== null) {
      console.error(`❌ Example server exited with code ${code}`);
    }
  });
  
  return serverProcess;
}

// Watch TypeScript files
function watchTypeScript() {
  console.log('👀 Watching TypeScript files...');
  
  const tsProcess = spawn('bun', ['--watch', 'scripts/build-ts.ts'], {
    cwd: ROOT_DIR,
    stdio: 'inherit',
    shell: true
  });
  
  tsProcess.on('error', (error) => {
    console.error('❌ TypeScript watch error:', error);
  });
  
  tsProcess.on('exit', (code) => {
    if (code !== 0 && code !== null) {
      console.error(`❌ TypeScript watch exited with code ${code}`);
    }
  });
  
  return tsProcess;
}

// Main development function
function dev() {
  console.log('🚀 Starting development environment...');
  
  // Start all processes
  const cssProcess = startCSSWatch();
  const serverProcess = startExampleServer();
  const tsProcess = watchTypeScript();
  
  // Handle process termination
  const cleanup = () => {
    console.log('\n🛑 Shutting down development environment...');
    cssProcess.kill();
    serverProcess.kill();
    tsProcess.kill();
    process.exit(0);
  };
  
  // Handle termination signals
  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
  
  console.log('✅ Development environment started');
  console.log('📝 Watching for changes...');
  console.log('💻 Example server running at http://localhost:3000');
}

// Run the development environment
dev();