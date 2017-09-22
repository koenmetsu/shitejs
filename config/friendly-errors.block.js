const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const chalk = require('chalk');

module.exports = friendlyErrors;

function friendlyErrors () {
  var plugins = [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [chalk.cyan(
          'Build complete.\n' +
          '    Application running at http://localhost:8080')],
        notes: [chalk.yellow(
          'Tip: built files are meant to be served over an HTTP server.\n' +
          '    Opening index.html over file:// won\'t work.\n')]
      }
    })
  ];

  return (context, util) => util.merge({ plugins });
};
