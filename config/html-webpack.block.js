const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = htmlWebpack

function htmlWebpack () {
  var plugins = [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/Dienstverlening.UI/index.html'
    }),
  ];

  return (context, util) => util.merge({ plugins });
};
