const {
  createConfig,

  // Feature blocks
  devServer,
  uglify,

  // Shorthand setters
  entryPoint,
  setOutput,
  addPlugins,
  defineConstants,
  sourceMaps,

  // Helpers
  env
} = require('webpack-blocks');

const webpack = require('webpack');
const ts = require('webpack-blocks-ts');
const vue = require('webpack-blocks-vue');
const autoprefixer = require('autoprefixer');
const tslint = require('./tslint.block');
const progressbar = require('./progressbar.block');
const extractText = require('./extract-text.block');
const htmlWebpack = require('./html-webpack.block');

module.exports = createConfig([
  defineConstants({ 'process.env.NODE_ENV': process.env.NODE_ENV || 'development' }),
  entryPoint('./src/Dienstverlening.UI/app'),
  progressbar(),
  htmlWebpack(),

  vue({
    esModule: true,
    postcss: [autoprefixer()],
    extractCSS: process.env.NODE_ENV == 'production'
  }),

  ts({ appendTsSuffixTo: [/\.vue$/], logLevel: 'warn' }),
  tslint(),

  env('development', [
    devServer({ overlay: true }),
    sourceMaps()
  ]),

  env('production', [
    setOutput('./src/Dienstverlening.UI/wwwroot/bundle-[hash].js'),
    uglify(),
    extractText(),
    addPlugins([
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      })
    ])
  ])
]);
