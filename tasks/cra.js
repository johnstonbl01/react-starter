const cp = require('child_process');

function craAndEject(appName) {
  cp.execSync(`npx create-react-app ${appName}`, { stdio: 'inherit' });
  process.chdir(`./${appName}`);
  cp.execSync('yes | npm run eject', { stdio: 'inherit' });

  // Install additional dependencies
  cp.execSync(
    'npm i @emotion/core @emotion/babel-preset-css-prop @testing-library/jest-dom @testing-library/react redux react-redux reselect -S',
    { stdio: 'inherit' }
  );
}

module.exports = craAndEject;
