const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 Starting OCTR Website Deployment...\n');

try {
  const projectDir = path.dirname(__filename);
  
  // Step 1: Build
  console.log('📦 Building Next.js project...');
  console.log('Running: npm run build\n');
  try {
    execSync('npm run build', { 
      cwd: projectDir, 
      stdio: 'inherit',
      shell: '/bin/bash'
    });
    console.log('\n✅ Build successful!\n');
  } catch (e) {
    console.error('Build failed:', e.message);
    throw e;
  }

  // Step 2: Stage changes
  console.log('📝 Staging changes...');
  execSync('git add .', { 
    cwd: projectDir,
    stdio: 'inherit',
    shell: '/bin/bash'
  });
  console.log('✅ Changes staged\n');

  // Step 3: Commit
  const timestamp = new Date().toLocaleString();
  console.log(`📝 Committing changes...`);
  execSync(`git commit -m "Deploy: Website update - ${timestamp}"`, { 
    cwd: projectDir,
    stdio: 'inherit',
    shell: '/bin/bash'
  });
  console.log('✅ Changes committed\n');

  // Step 4: Push
  console.log('🔼 Pushing to GitHub...');
  execSync('git push origin main', { 
    cwd: projectDir,
    stdio: 'inherit',
    shell: '/bin/bash'
  });
  console.log('✅ Pushed to GitHub\n');

  console.log('═══════════════════════════════════════');
  console.log('✅ DEPLOYMENT SUCCESSFUL!');
  console.log('═══════════════════════════════════════');
  console.log('🌐 Changes will be live in 2-3 minutes');
  console.log('Visit: https://www.octrtech.com');
  console.log('═══════════════════════════════════════\n');

} catch (error) {
  console.error('\n❌ DEPLOYMENT FAILED');
  console.error('Error:', error.message);
  process.exit(1);
}
