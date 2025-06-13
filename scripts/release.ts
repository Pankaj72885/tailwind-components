#!/usr/bin/env bun

import { spawnSync } from 'child_process';
import { join } from 'path';
import { readFileSync, writeFileSync } from 'fs';
import { createInterface } from 'readline';

// Define paths
const ROOT_DIR = join(import.meta.dir, '..');
const PACKAGE_JSON_PATH = join(ROOT_DIR, 'package.json');

// Read package.json
function readPackageJson() {
  const packageJsonContent = readFileSync(PACKAGE_JSON_PATH, 'utf-8');
  return JSON.parse(packageJsonContent);
}

// Write package.json
function writePackageJson(packageJson: any) {
  writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(packageJson, null, 2) + '\n');
}

// Prompt for input
async function prompt(question: string): Promise<string> {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

// Bump version
async function bumpVersion() {
  const packageJson = readPackageJson();
  const currentVersion = packageJson.version;
  
  console.log(`Current version: ${currentVersion}`);
  
  const versionType = await prompt('Enter version type (patch, minor, major) or specific version: ');
  
  let newVersion: string;
  
  if (['patch', 'minor', 'major'].includes(versionType)) {
    const [major, minor, patch] = currentVersion.split('.').map(Number);
    
    if (versionType === 'patch') {
      newVersion = `${major}.${minor}.${patch + 1}`;
    } else if (versionType === 'minor') {
      newVersion = `${major}.${minor + 1}.0`;
    } else { // major
      newVersion = `${major + 1}.0.0`;
    }
  } else if (/^\d+\.\d+\.\d+$/.test(versionType)) {
    newVersion = versionType;
  } else {
    console.error('❌ Invalid version format. Please use semver format (e.g., 1.0.0) or version type.');
    process.exit(1);
  }
  
  const confirmVersion = await prompt(`New version will be ${newVersion}. Proceed? (y/n): `);
  
  if (confirmVersion.toLowerCase() !== 'y') {
    console.log('🛑 Release cancelled.');
    process.exit(0);
  }
  
  packageJson.version = newVersion;
  writePackageJson(packageJson);
  
  console.log(`✅ Version bumped to ${newVersion}`);
  
  return newVersion;
}

// Update version in source code
function updateVersionInCode(version: string) {
  const indexTsPath = join(ROOT_DIR, 'src', 'index.ts');
  let indexTsContent = readFileSync(indexTsPath, 'utf-8');
  
  // Update version in index.ts
  indexTsContent = indexTsContent.replace(
    /export const version = ['"](.*)['"];/,
    `export const version = '${version}';`
  );
  
  writeFileSync(indexTsPath, indexTsContent);
  
  console.log('✅ Version updated in source code');
}

// Build the package
function buildPackage() {
  console.log('🔨 Building package...');
  
  const result = spawnSync('bun', ['run', 'build'], {
    cwd: ROOT_DIR,
    stdio: 'inherit',
    shell: true
  });
  
  if (result.status !== 0) {
    console.error('❌ Build failed');
    process.exit(1);
  }
  
  console.log('✅ Build completed');
}

// Create git tag
function createGitTag(version: string) {
  console.log('🏷️ Creating git tag...');
  
  // Add changes
  let result = spawnSync('git', ['add', '.'], {
    cwd: ROOT_DIR,
    stdio: 'inherit',
    shell: true
  });
  
  if (result.status !== 0) {
    console.error('❌ Git add failed');
    process.exit(1);
  }
  
  // Commit changes
  result = spawnSync('git', ['commit', '-m', `chore: release v${version}`], {
    cwd: ROOT_DIR,
    stdio: 'inherit',
    shell: true
  });
  
  if (result.status !== 0) {
    console.error('❌ Git commit failed');
    process.exit(1);
  }
  
  // Create tag
  result = spawnSync('git', ['tag', `-a`, `v${version}`, '-m', `Release v${version}`], {
    cwd: ROOT_DIR,
    stdio: 'inherit',
    shell: true
  });
  
  if (result.status !== 0) {
    console.error('❌ Git tag failed');
    process.exit(1);
  }
  
  console.log(`✅ Git tag v${version} created`);
}

// Publish to npm
async function publishToNpm() {
  const shouldPublish = await prompt('Publish to npm? (y/n): ');
  
  if (shouldPublish.toLowerCase() !== 'y') {
    console.log('🛑 Publishing skipped.');
    return;
  }
  
  console.log('📦 Publishing to npm...');
  
  const result = spawnSync('npm', ['publish', '--access', 'public'], {
    cwd: ROOT_DIR,
    stdio: 'inherit',
    shell: true
  });
  
  if (result.status !== 0) {
    console.error('❌ Publishing failed');
    process.exit(1);
  }
  
  console.log('✅ Published to npm');
}

// Main release function
async function release() {
  console.log('🚀 Starting release process...');
  
  try {
    const newVersion = await bumpVersion();
    updateVersionInCode(newVersion);
    buildPackage();
    createGitTag(newVersion);
    await publishToNpm();
    
    console.log('🎉 Release completed successfully!');
  } catch (error) {
    console.error('❌ Release failed:', error);
    process.exit(1);
  }
}

// Run the release process
release();