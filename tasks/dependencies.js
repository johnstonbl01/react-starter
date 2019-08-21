const Listr = require('listr');
const exec = require('execa');

function installDependencies(appName) {
  return () =>
    new Listr([
      {
        title: 'Create React App',
        task: () =>
          exec
            .command(`npx create-react-app ${appName}`, {
              shell: true
            })
            .then(() => process.chdir(`./${appName}`))
            .catch(err => {
              throw new Error(err.stderr || err);
            })
      },
      {
        title: 'Eject CRA',
        task: async () =>
          await exec.command('yes | npm run eject', { shell: true }).catch(err => {
            throw new Error(err.stderr || err);
          })
      }
    ]);
}

module.exports = installDependencies;
