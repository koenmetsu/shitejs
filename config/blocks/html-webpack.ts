import * as HtmlWebpackPlugin from 'html-webpack-plugin';

export default function htmlWebpack () {
  var plugins = [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/Dienstverlening.UI/index.html',
      minify: {
        removeComments: true, // process.env.NODE_ENV == 'production'
        collapseWhitespace: true, // process.env.NODE_ENV == 'production'
        removeAttributeQuotes: true // process.env.NODE_ENV == 'production'
        // more options: https://github.com/kangax/html-minifier#options-quick-reference
      },
    }),
  ];

  return (context: any, util: any) => util.merge({ plugins });
};
