const fs = require('fs-extra');
const path = require('path');
const cp = require('child_process');

function fileCleanup(modulePath, appPath) {
  const configTemplates = path.join(modulePath, 'templates/configs');

  cp.execSync('rm yarn.lock');
  cp.execSync('rm ./src/logo.svg');
  cp.execSync('rm ./src/App.*');
  cp.execSync('rm ./public/favicon.ico');
  cp.execSync('rm ./public/logo*.png');
  cp.execSync('rm ./public/manifest.json');

  fs.copySync(configTemplates, appPath);

  cp.execSync('touch .env && node --version | cut -c 2- >> .env');
}

module.exports = fileCleanup;
