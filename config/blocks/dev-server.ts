/**
 * Webpack dev-server block.
 *
 * @see https://github.com/webpack/webpack-dev-server
 */

(devServer as any).proxy = proxy;

/**
 * @param {object} [options]    See https://webpack.github.io/docs/configuration.html#devserver
 * @param {bool}   [options.historyApiFallback]
 * @param {bool}   [options.hot]
 * @param {bool}   [options.inline]
 * @param {string|string[]} [entry]
 * @return {Function}
 */
export default function devServer (options = {}, entry: string | string[] = []) {
  if (options && (typeof options === 'string' || Array.isArray(options))) {
    entry = options;
    options = {};
  }

  if (!Array.isArray(entry)) {
    entry = entry ? [ entry ] : [];
  }

  const setter = (context: any) => (prevConfig: any) => {
    context.devServer = context.devServer || { entry: [], options: {} };
    context.devServer.entry = context.devServer.entry.concat(entry);
    context.devServer.options = Object.assign({}, context.devServer.options, options);

    return prevConfig;
  }

  return Object.assign(setter, { post: postConfig });
};

function postConfig (context: any, util: any) {
  const entryPointsToAdd = context.devServer.entry;

  return (prevConfig: any) => {
    return util.merge({
      devServer: Object.assign({
        hot: true,
        hotOnly: true,
        historyApiFallback: true,
        inline: true,
        // Disable verbose logging in browser’s console, only print errors
        clientLogLevel: 'error',
        // Do not print chunks list on every compilation, only print errors
        stats: 'errors-only'
      }, context.devServer.options),
      entry: addDevEntryToAll(prevConfig.entry || {}, entryPointsToAdd),
      plugins: [
        new context.webpack.HotModuleReplacementPlugin(),
        new context.webpack.NamedModulesPlugin(),
        new context.webpack.NoEmitOnErrorsPlugin()
      ]
    })(prevConfig);
  };
};

function addDevEntryToAll (presentEntryPoints: any, devServerEntry: any) {
  const newEntryPoints = {};

  Object.keys(presentEntryPoints).forEach(chunkName => {
    // It's fine to just set the `devServerEntry`, instead of concat()-ing the present ones.
    // Will be concat()-ed by webpack-merge (see `createConfig()`)
    newEntryPoints[ chunkName ] = devServerEntry;
  });

  return newEntryPoints;
};

/**
 * @param {object} proxyRoutes    { <path>: <target URL> }
 * @return {Function}
 * @see http://webpack.github.io/docs/webpack-dev-server.html#proxy
 */
function proxy (proxyRoutes: {}) {
  return (context: any, util: any) => util.merge({
    devServer: {
      proxy: proxyRoutes
    }
  });
};
