/**
 * Standalone Offline Asset Generation Script
 * 
 * Usage:
 *   $env:GEMINI_API_KEY="your_key"
 *   node scripts/generate-assets.js
 * 
 * Secure development-only script: Never exposed to frontend code.
 */
import fs from 'fs';
import path from 'path';

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.log('Notice: GEMINI_API_KEY is not set in environment.');
  console.log('Pre-generated high-resolution luxury assets are already included in public/images/generated/');
  process.exit(0);
}

console.log('Gemini API configured. Ready for asset generation.');

