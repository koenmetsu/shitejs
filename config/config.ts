import * as path from 'path';

const projectRoot = path.resolve(__dirname, '../src/Dienstverlening.UI');
const wwwRoot = path.join(projectRoot, 'wwwroot');

export default {
  entryPoint: path.join(projectRoot, 'app'),
  output: path.join(wwwRoot, 'bundle-[hash].js'),
  cssOutputName: `bundle-[contenthash:20].css`,

  indexTemplate: path.join(projectRoot, 'index.html'),

  wwwroot: wwwRoot,
  index: path.join(wwwRoot, 'index.html'),
  assetsRoot: wwwRoot,
  assetsSubDirectory: 'static',

  aliases: {
    'app': path.join(projectRoot, 'app'),
    'core': path.join(projectRoot, 'app/core'),
  },

  port: 1337
};
