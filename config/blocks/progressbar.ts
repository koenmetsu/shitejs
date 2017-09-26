import * as chalk from 'chalk';

// tslint:disable-next-line:variable-name
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

export default function progressbar() {
  const plugins = [
    new ProgressBarPlugin({
      format: chalk.cyan.bold('  build ') + chalk.yellow.bold('[:bar]') + chalk.green.bold(' :percent') + ' (:elapsed seconds)',
      clear: false,
    }),
  ];

  return (context: any, util: any) => util.merge({ plugins });
}
