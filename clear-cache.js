#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🧹 Clearing development cache...');

// Directories to clear
const dirsToClean = [
  'node_modules/.vite',
  'node_modules/.cache',
  'dist',
  '.vite'
];

// Files to clear
const filesToClean = [
  '.vite/deps/_metadata.json'
];

// Clear directories
dirsToClean.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (fs.existsSync(fullPath)) {
    try {
      fs.rmSync(fullPath, { recursive: true, force: true });
      console.log(`✅ Cleared: ${dir}`);
    } catch (error) {
      console.log(`⚠️  Could not clear ${dir}: ${error.message}`);
    }
  }
});

// Clear files
filesToClean.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    try {
      fs.unlinkSync(fullPath);
      console.log(`✅ Cleared: ${file}`);
    } catch (error) {
      console.log(`⚠️  Could not clear ${file}: ${error.message}`);
    }
  }
});

// Clear service worker registration in browser
console.log(`
🔄 Cache cleared! Now:

1. Close your browser completely
2. Restart the dev server: npm run dev
3. Open browser in incognito/private mode
4. Navigate to localhost:5173

This will ensure a clean development environment.
`);