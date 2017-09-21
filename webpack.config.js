const {
  createConfig,

  // Shorthand setters
  entryPoint,
  setOutput,
  addPlugins,
  defineConstants,
  sourceMaps,

  // Helpers
  env
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
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV || 'development'
  }),
  env('development', [
    sourceMaps()
  ])
]);
