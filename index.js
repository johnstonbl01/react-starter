#!/usr/bin/env node

const path = require('path');
const installCRA = require('./tasks/cra');
const modifyPackageJson = require('./tasks/package-json');
const fileCleanup = require('./tasks/file-cleanup');

const args = process.argv.slice(2);
const appName = args[0];
const appPath = `${process.cwd()}/${appName}`;

const modulePath = path.dirname(require.resolve('@johnstonbl01/react-starter'));

if (!appName || typeof appName !== 'string') {
  console.log('It looks like you forgot to provide a project name for CRA');
  console.log();
  console.log(`Project name: "${appName || ''}"`);
  process.exit(1);
}

// Installs CRA and ejects, then install additional dependencies
installCRA(appName);

// Modify package.json
const packageJson = require(`${appPath}/package.json`);
modifyPackageJson(packageJson);

// Remove unnecessary files and add new config files
fileCleanup(modulePath, appPath);
