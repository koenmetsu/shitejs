import * as HtmlWebpackPlugin from 'html-webpack-plugin';

export default function htmlWebpack (template: string, filename: string) {
  var plugins = [
    new HtmlWebpackPlugin({
      inject: true,
      template: template,
      filename: filename,
      minify: {
        removeComments: true, // process.env.NODE_ENV == 'production'
        collapseWhitespace: true, // process.env.NODE_ENV == 'production'
        removeAttributeQuotes: true // process.env.NODE_ENV == 'production'
        // more options: https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
  ];

  return (context: any, util: any) => util.merge({ plugins });
};
