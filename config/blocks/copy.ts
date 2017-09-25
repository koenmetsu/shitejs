import config from './../config';
import * as path from 'path';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';

export default function copy(from: string, to: string) {
  var plugins = [
    new CopyWebpackPlugin([
      {
        from: from,
        to: to,
        ignore: ['.*']
      }
    ])
  ];

  return (context: any, util: any) => util.merge({ plugins });
};
