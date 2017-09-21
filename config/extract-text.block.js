const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = extractText

function extractText () {
  var plugins = [
    new ExtractTextPlugin({
      filename: 'bundle-[sha1:contenthash:hex:20].css',
      allChunks: true
    })
  ];

  return (context, util) => util.merge({ plugins });
};
