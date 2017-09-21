const {
  createConfig,

  // Shorthand setters
  entryPoint,
  setOutput,
  addPlugins
} = require('webpack-blocks');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = createConfig([
  entryPoint('./src/main.js'),
  setOutput('./build/bundle.js'),
  addPlugins([
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html'
    })
  ]),
]);
