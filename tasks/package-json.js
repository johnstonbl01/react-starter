const fs = require('fs');
const path = require('path');
const os = require('os');
const _ = require('lodash');

const PROP_BLACKLIST = ['eslintConfig', 'babel'];

function modifyPackageJson(packageJson) {
  const appPackage = _.omit(packageJson, PROP_BLACKLIST);

  appPackage.scripts = {
    build: 'node scripts/build.js',
    lint: 'eslint src',
    start: 'node scripts/start.js',
    test: 'node scripts/test.js',
    'test:coverage': 'npm run test -- --coverage'
  };

  fs.writeFileSync(
    path.join(process.cwd(), 'package.json'),
    JSON.stringify(appPackage, null, 2) + os.EOL
  );
}

module.exports = modifyPackageJson;
