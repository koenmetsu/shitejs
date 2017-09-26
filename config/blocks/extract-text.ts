import * as ExtractTextPlugin from 'extract-text-webpack-plugin';

export default function extractText(outputFilePattern = 'css/[name].[contenthash:8].css') {
  const plugins = [
    new ExtractTextPlugin({
      filename: outputFilePattern,
      allChunks: true,
    }),
  ];

  return (context: any, util: any) => util.merge({ plugins });
}
