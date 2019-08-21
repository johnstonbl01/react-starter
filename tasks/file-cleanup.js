const fs = require('fs-extra');
const path = require('path');
const exec = require('execa');

function fileCleanup(modulePath, appPath) {
  const configTemplates = path.join(modulePath, 'templates/configs');

  return Promise.all([
    exec('rm', ['yarn.lock']),
    exec('rm', ['./src/logo.svg']),
    exec('rm', ['./src/App.js']),
    exec('rm', ['./src/App.test.js']),
    exec('rm', ['./public/favicon.ico']),
    exec('rm', ['./public/logo192.png']),
    exec('rm', ['./public/logo512.png']),
    exec('rm', ['./public/manifest.json']),
    fs.copy(configTemplates, appPath),
    exec.command('touch .nvmrc && node --version | cut -c 2- >> .nvmrc', { shell: true })
  ]);
}

module.exports = fileCleanup;
