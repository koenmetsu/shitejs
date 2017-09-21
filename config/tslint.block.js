module.exports = tslint

function tslint (options = {}) {
  return (context, util) => prevConfig => {
    let nextConfig = util.addLoader(
      Object.assign({
        test: /\.(ts|tsx)$/,
        use: [ 'tslint-loader' ],
        enforce: 'pre'
      }, context.match)
    )(prevConfig);

    nextConfig = util.addPlugin(
      new context.webpack.LoaderOptionsPlugin({
        options: {
          tslint: options
        }
      })
    )(nextConfig);

    return nextConfig;
  };
};
