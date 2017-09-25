import config from './../config';
import * as chalk from 'chalk';
import * as FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';

export default function friendlyErrors() {
  var plugins = [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [chalk.cyan('Build complete.\n')],
        notes: [chalk.yellow(
          'Tip: built files are meant to be served over an HTTP server.\n' +
          '    Opening index.html over file:// won\'t work.\n\n')]
      }
    })
  ];

  return (context: any, util: any) => util.merge({ plugins });
};
