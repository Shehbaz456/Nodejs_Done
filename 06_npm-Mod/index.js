const chalk = require('chalk');
console.log(chalk.bgBlue('Hello world!'));
console.log(chalk.bgBlueBright('Hello world!'));
console.log(chalk.yellow('Hello world!'));


var validator = require('validator');
validator.isEmail('foo@bar.com');
const res = validator.isEmail("hellogmail.com")
console.log(res ? chalk.green.inverse(res): chalk.red.inverse(res));




