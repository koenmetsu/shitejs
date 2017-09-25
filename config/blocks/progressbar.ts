import * as chalk from 'chalk';

const ProgressBarPlugin = require('progress-bar-webpack-plugin');

export default function progressbar() {
  var plugins = [
    new ProgressBarPlugin({
      format: chalk.cyan.bold('  build ') + chalk.yellow.bold('[:bar]') + chalk.green.bold(' :percent') + ' (:elapsed seconds)',
      clear: false
    })
  ];

  return (context: any, util: any) => util.merge({ plugins });
};
