// Netlify build debug script
const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting Netlify build debug script');

// Log environment
console.log('\n📊 Environment Information:');
console.log(`Node version: ${process.version}`);
console.log(`NPM version: ${execSync('npm --version').toString().trim()}`);
console.log(`Working directory: ${process.cwd()}`);

// Check if essential files exist
console.log('\n🔍 Checking for essential files:');
const essentialFiles = [
  'package.json',
  'next.config.js',
  'netlify.toml',
  'src/app/layout.tsx',
  'src/app/page.tsx'
];

essentialFiles.forEach(file => {
  const exists = fs.existsSync(file);
  console.log(`${file}: ${exists ? '✅ Found' : '❌ Missing'}`);
});

// Log package.json content
console.log('\n📦 Package.json content:');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
console.log(JSON.stringify(packageJson, null, 2));

// Run build
console.log('\n🏗️ Running build:');
try {
  execSync('next build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

console.log('\n✅ Debug script completed'); 