const chalk = require('chalk');

const log = text => console.log(chalk.blueBright(text));
const error = text => console.log(chalk.redBright(text));
const success = text => console.log(chalk.greenBright(text));

module.exports = { log, success, error };
