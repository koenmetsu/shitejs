import * as path from 'path';
import config from './../config';

const CleanWebpackPlugin = require('clean-webpack-plugin');

export default function clean (pathsToClean: string | string[]) {
  let paths: string[] = [];

  if (typeof pathsToClean === 'string') {
    paths = [ pathsToClean ];
  } else if (Array.isArray(pathsToClean)) {
    paths = pathsToClean;
  }

  var plugins = [
    new CleanWebpackPlugin(paths, {
      root: config.wwwRoot,
      verbose: false
    })
  ];

  return (context: any, util: any) => util.merge({ plugins });
};