// tools/detect-changes.js
const { execSync } = require('child_process');
const fs = require('fs');

try {
  const output = execSync('git diff --name-only origin/main...HEAD', { encoding: 'utf-8' });
  const changedFiles = output.split('\n').filter(Boolean);

  const changedServices = new Set();

  changedFiles.forEach(file => {
    const match = file.match(/^services\/([^\/]+)\//);
    if (match) {
      changedServices.add(match[1]);
    }
  });

  const result = Array.from(changedServices);
  console.log(result.join(' ')); // Output space-separated list for GitHub Actions
} catch (error) {
  console.error('Error detecting changes:', error);
  process.exit(1);
}
