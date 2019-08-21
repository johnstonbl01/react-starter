#!/usr/bin/env node

const path = require('path');
const chalk = require('chalk');
const Listr = require('listr');
const exec = require('execa');
const emoji = require('node-emoji');
const installDependencies = require('../tasks/dependencies');
const modifyPackageJson = require('../tasks/package-json');
const fileCleanup = require('../tasks/file-cleanup');
const addSampleApp = require('../tasks/add-sample-app');
const { log, error } = require('../utils/log');

const args = process.argv.slice(2);
const appName = args[0];
const appPath = `${process.cwd()}/${appName}`;

const modulePath = path.dirname(require.resolve('@johnstonbl01/react-starter'));

if (!appName || typeof appName !== 'string') {
  logError('It looks like you forgot to provide a project name', `Project name: ${appName || ''}`);
  process.exit(1);
}

process.on('SIGINT', () => {
  log('Exiting without error');
  process.exit();
});

process.on('uncaughtException', err => {
  logError('An error was encountered while executing', err);
  log('Exiting with error');
  process.exit(1);
});

const tasks = new Listr([
  {
    title: `Installing @johnstonbl01/react-starter project ${chalk.greenBright(appName)}`,
    task: () =>
      new Listr([
        {
          title: 'Install additional dependencies',
          task: installDependencies(appName)
        },
        {
          title: 'Modify package.json',
          task: () => modifyPackageJson(appPath)
        },
        {
          title: `Install ${chalk.blueBright('emotion')}, ${chalk.blueBright(
            'testing-library'
          )}, and ${chalk.blueBright('redux')}`,
          task: () =>
            exec.command(
              'npm i && npm i @emotion/core @emotion/babel-preset-css-prop @testing-library/jest-dom @testing-library/react redux react-redux reselect -S',
              { shell: true }
            )
        },
        {
          title: 'Clean-up files',
          task: () => fileCleanup(modulePath, appPath)
        },
        {
          title: 'Add sample app',
          task: () => addSampleApp(modulePath, appPath)
        },
        {
          title: 'Committing changes to git',
          task: () =>
            exec.command('git add . && git commit -m "Initial commit from react-starter"', {
              shell: true
            })
        }
      ])
  }
]);

tasks
  .run()
  .then(() => {
    console.log();
    console.log(
      `${emoji.get('tada')} Success! Created ${chalk.greenBright(appName)} at ${chalk.greenBright(
        appPath
      )}`
    );
    console.log();
    console.log();
    console.log('Npm commands for the new project:');
    console.log();
    console.log(`${chalk.blueBright('npm start')}\n  Starts the development server`);
    console.log(`${chalk.blueBright('npm build')}\n  Bundles the app for production`);
    console.log(`${chalk.blueBright('npm test')}\n  Runs the unit tests`);
    console.log(
      `${chalk.blueBright('npm test:coverage')}\n  Runs the unit tests with a coverage report`
    );
    console.log(`${chalk.blueBright('npm run lint')}\n  Runs the linter`);
    console.log();
    console.log(`Happy coding! ${emoji.get('coffee')}`);
  })
  .catch(err => error(err));

function logError(description, error) {
  error(`\n${emoji.get('x')} Something went wrong:\n`);
  error('***********************************************************');
  error(description);
  error(error);
  error('***********************************************************');
}
