const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

module.exports = progressbar;

function progressbar () {
  var plugins = [
    new ProgressBarPlugin({
      format: chalk.cyan.bold('  build ') + chalk.yellow.bold('[:bar]') + chalk.green.bold(' :percent') + ' (:elapsed seconds)',
      clear: false
    })
  ];

  return (context, util) => util.merge({ plugins });
};
