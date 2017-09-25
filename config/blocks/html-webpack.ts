import * as HtmlWebpackPlugin from 'html-webpack-plugin';

export default function htmlWebpack (template: string, filename: string) {
  var plugins = [
    new HtmlWebpackPlugin({
      inject: true,
      template: template,
      filename: filename,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
  ];

  return (context: any, util: any) => util.merge({ plugins });
};
