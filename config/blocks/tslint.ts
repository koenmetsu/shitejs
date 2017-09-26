/**
 * Tslint webpack block.
 *
 * @see https://github.com/wbuchwalter/tslint-loader
 */

 /**
 * @param {object}   [options] See https://github.com/wbuchwalter/tslint-loader#usage
 * @return {Function}
 */
export default function tslint(options = {}) {
  return (context: any, util: any) => (prevConfig: any) => {
    let nextConfig = util.addLoader(
      Object.assign({
        test: /\.(ts|tsx)$/,
        use: ['tslint-loader'],
        enforce: 'pre',
      }, context.match),
    )(prevConfig);

    nextConfig = util.addPlugin(
      new context.webpack.LoaderOptionsPlugin({
        options: {
          tslint: options,
        },
      }),
    )(nextConfig);

    return nextConfig;
  };
}
