#!/usr/bin/env node

const installCRA = require('./tasks/cra');
const modifyPackageJson = require('./tasks/package-json');

const args = process.argv.slice(2);
const appName = args[0];
const appDir = `${process.cwd()}/${appName}`;

if (!appName || typeof appName !== 'string') {
  console.log('It looks like you forgot to provide a project name for CRA');
  console.log();
  console.log(`Project name: "${appName || ''}"`);
  process.exit(1);
}

// Install create-react-app
installCRA(appName);

// Modify package.json
const packageJson = require(`${appDir}/package.json`);
modifyPackageJson(packageJson);

// console.log(packageJson);
console.log('pwd:', process.cwd());
