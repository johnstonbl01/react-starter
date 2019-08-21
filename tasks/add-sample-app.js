const fs = require('fs-extra');
const path = require('path');

function addSampleApp(modulePath, appPath) {
  const appSrc = path.join(modulePath, 'templates/src');
  return fs.copy(appSrc, `${appPath}/src`);
}

module.exports = addSampleApp;
