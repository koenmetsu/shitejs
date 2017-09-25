import * as OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

export default function optimiseCSS () {
  var plugins = [
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        safe: true,
        discardComments: {
          removeAll: true
        },
        map: { inline: false }
      },
      canPrint: true,
    }),
  ];

  return (context: any, util: any) => util.merge({ plugins });
};
