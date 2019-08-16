const cp = require('child_process');

function craAndEject(appName) {
  cp.execSync(`npx create-react-app ${appName}`, { stdio: 'inherit' });
  process.chdir(`./${appName}`);
  cp.execSync('yes | npm run eject', { stdio: 'inherit' });
}

module.exports = craAndEject;
