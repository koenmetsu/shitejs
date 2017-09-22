const {
  createConfig,

  // Feature blocks
  devServer,
  uglify,
  sass,
  file,
  url,

  // Shorthand setters
  entryPoint,
  setOutput,
  addPlugins,
  defineConstants,
  sourceMaps,
  resolve,

  // Helpers
  env,
  match
} = require('webpack-blocks');

const path = require('path');
const webpack = require('webpack');
const ts = require('webpack-blocks-ts');
const autoprefixer = require('autoprefixer');

const vue = require('./vue.block');
const tslint = require('./tslint.block');
const progressbar = require('./progressbar.block');
const extractText = require('./extract-text.block');
const htmlWebpack = require('./html-webpack.block');
const friendlyErrors = require('./friendly-errors.block');

module.exports = createConfig([
  defineConstants({ 'process.env.NODE_ENV': process.env.NODE_ENV || 'development' }),
  entryPoint('./src/Dienstverlening.UI/app'),
  progressbar(),
  friendlyErrors(),
  htmlWebpack(),
  sass({ minimize: process.env.NODE_ENV == 'production' }),

  match(['*.eot', '*.ttf', '*.woff', '*.woff2'], [
    // will copy font files to build directory and link to them
    file()
  ]),
  match(['*.gif', '*.jpg', '*.jpeg', '*.png', '*.svg', '*.webp'], [
    // will load images up to 10KB as data URL
    url({ limit: 10000 })
  ]),

  resolve({
    extensions: ['.vue', '.ts', '.js', 'json'],
    alias: {
      'app':path. resolve(__dirname, 'src/Dienstverlening.UI/app'),
      'core': path.resolve(__dirname, 'src/Dienstverlening.UI/app/core'),
    }
  }),

  vue({
    esModule: true,
    postcss: [autoprefixer()],
    extractCSS: process.env.NODE_ENV == 'production',
    loaders: {
      css: 'css-loader?sourceMap',
      scss: 'css-loader?sourceMap!sass-loader?sourceMap',
      sass: 'css-loader?sourceMap!sass-loader?indentedSyntax&sourceMap'
    }
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
    extractText('bundle-[contenthash:20].css'),
    addPlugins([
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      })
    ])
  ])
]);
