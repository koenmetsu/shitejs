import config, { isProduction } from './config';

import * as webpack from 'webpack';
import * as path from 'path';
import * as autoprefixer from 'autoprefixer';

const {
  createConfig,
  entryPoint,
  setOutput,
  addPlugins,
  defineConstants,
  sourceMaps,
  resolve,
  env,
  match
} = require('@webpack-blocks/webpack');

const {
  file,
  url
} = require('@webpack-blocks/assets');

import devServer from './blocks/dev-server';
import uglify from './blocks/uglify';
import scss from './blocks/scss';
import optimiseCSS from './blocks/optimise-css'
import clean from './blocks/clean';
import ts from './blocks/ts';
import vue from './blocks/vue';
import tslint from './blocks/tslint';
import progressbar from './blocks/progressbar';
import extractText from './blocks/extract-text';
import htmlWebpack from './blocks/html-webpack';
import friendlyErrors from './blocks/friendly-errors';

const environment = isProduction ? 'production' : 'development';

export default createConfig([
  defineConstants({ 'process.env.NODE_ENV': environment }),
  entryPoint(config.entryPoint),
  progressbar(),
  friendlyErrors(),
  clean(config.wwwRoot),
  clean(path.join(config.wwwRoot, config.assetsDirectory)),
  htmlWebpack(config.indexTemplate, config.index),
  scss({ minimize: isProduction, sourceMap: true }),

  match(['*.eot', '*.ttf', '*.woff', '*.woff2'], [ file() ]),
  match(['*.gif', '*.jpg', '*.jpeg', '*.png', '*.svg', '*.webp'], [ url({ limit: 10000 }) ]),

  resolve({
    extensions: ['.vue', '.ts', '.js', 'json'],
    alias: config.aliases
  }),

  vue({
    esModule: true,
    postcss: [autoprefixer()],
    extractCSS: isProduction,
    loaders: {
      css: 'css-loader?sourceMap',
      scss: 'css-loader?sourceMap!sass-loader?sourceMap',
      sass: 'css-loader?sourceMap!sass-loader?indentedSyntax&sourceMap'
    },
    transformToRequire: {
      video: 'src',
      source: 'src',
      img: 'src',
      image: 'xlink:href'
    }
  }),

  ts({ appendTsSuffixTo: [/\.vue$/], logLevel: 'warn' }),
  tslint(),
  sourceMaps('source-map'),

  env('development', [
    devServer({ overlay: true })
  ]),

  env('production', [
    setOutput(config.output),
    uglify({ sourceMap: true }),
    extractText(config.cssOutputName),
    optimiseCSS({ sourceMap: true }),
    addPlugins([
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      })
    ])
  ])
]);
