#!/usr/bin/env node

const path = require('path');
const chalk = require('chalk');
const Listr = require('listr');
const exec = require('execa');
const installDependencies = require('./tasks/dependencies');
const modifyPackageJson = require('./tasks/package-json');
const fileCleanup = require('./tasks/file-cleanup');
const addSampleApp = require('./tasks/add-sample-app');
const { log, error } = require('./log');

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
        }
      ])
  }
]);

tasks.run().catch(err => error(err));

function logError(description, error) {
  error('\nSomething went wrong:\n');
  error('***********************************************************');
  error(description);
  error(error);
  error('***********************************************************');
}
