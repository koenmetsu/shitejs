import * as OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

export default function optimiseCSS (options: any = {}) {
  const sourceMap = Boolean(options.sourceMap);

  var plugins = [
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        safe: true,
        discardComments: {
          removeAll: true
        },
        map: sourceMap ? { inline: false } : false
      },
      canPrint: true,
    }),
  ];

  return (context: any, util: any) => util.merge({ plugins });
};
