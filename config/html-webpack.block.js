const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = htmlWebpack;

function htmlWebpack () {
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

  return (context, util) => util.merge({ plugins });
};
