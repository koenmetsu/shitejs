import * as path from 'path';
import config from './../config';

// tslint:disable-next-line:variable-name
const CleanWebpackPlugin = require('clean-webpack-plugin');

export default function clean(pathsToClean: string | string[]) {
  let paths: string[] = [];

  if (typeof pathsToClean === 'string') {
    paths = [pathsToClean];
  } else if (Array.isArray(pathsToClean)) {
    paths = pathsToClean;
  }

  const plugins = [
    new CleanWebpackPlugin(paths, {
      root: config.projectRoot,
      verbose: false,
    }),
  ];

  return (context: any, util: any) => util.merge({ plugins });
}
