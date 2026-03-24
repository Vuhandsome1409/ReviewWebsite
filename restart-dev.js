#!/usr/bin/env node

import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🔄 Restarting development server...');

// Clear cache first
const dirsToClean = [
  'node_modules/.vite',
  'node_modules/.cache',
  'dist',
  '.vite'
];

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

console.log('🚀 Starting development server...');

// Start dev server
const devProcess = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true
});

devProcess.on('error', (error) => {
  console.error('Failed to start dev server:', error);
});

devProcess.on('close', (code) => {
  console.log(`Dev server exited with code ${code}`);
});