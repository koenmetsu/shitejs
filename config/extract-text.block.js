const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = extractText

function extractText (outputFilePattern = 'css/[name].[contenthash:8].css') {
  var plugins = [
    new ExtractTextPlugin({
      filename: outputFilePattern,
      allChunks: true
    })
  ];

  return (context, util) => util.merge({ plugins });
};
