/**
 * UglifyJS webpack block.
 *
 * @see https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

/**
 * @param {object} [options] UglifyJS options
 * @return {Function}
 */
export default function uglify(options = {}) {
  options = Object.assign({
    parallel: {
      cache: true
    },
    uglifyOptions: {
      compress: {
        warnings: false
      }
    }
  }, options);

  const postHook = (context: any, util: any) => {
    const plugin = new UglifyJSPlugin(options);
    return util.addPlugin(plugin);
  };

  return Object.assign(
    () => (prevConfig: any) => prevConfig,
    { post: postHook }
  );
};
