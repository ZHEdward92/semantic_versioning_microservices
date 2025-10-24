const { execSync } = require('child_process');

const [base, head] = process.argv.slice(2);

try {
  const output = execSync(`git diff --name-only ${base} ${head}`, { encoding: 'utf-8' });
  const changedFiles = output.split('\n').filter(Boolean);

  const changedServices = new Set();

  changedFiles.forEach(file => {
    const match = file.match(/^services\/([^\/]+)\//);
    if (match) {
      changedServices.add(match[1]);
    }
  });

  const result = Array.from(changedServices);
  console.log(result.join(' ')); // Output space-separated list
} catch (error) {
  console.error('Error detecting changes:', error);
  process.exit(1);
}