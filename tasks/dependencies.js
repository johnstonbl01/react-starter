const Listr = require('listr');
const exec = require('execa');

function installDependencies(appName) {
  return () =>
    new Listr([
      {
        title: 'Create React App',
        task: () =>
          exec('npx', ['create-react-app', appName]).then(() => process.chdir(`./${appName}`))
      },
      {
        title: 'Eject CRA',
        task: async () => await exec.command('yes | npm run eject', { shell: true })
      }
    ]);
}

module.exports = installDependencies;
