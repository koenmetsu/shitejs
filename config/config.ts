import * as path from 'path';

const projectRoot = path.resolve(__dirname, '../src/Dienstverlening.UI');
const wwwRoot = path.join(projectRoot, 'wwwroot');

export const isProduction = process.env.NODE_ENV === 'production';

export default {
  projectRoot: projectRoot,
  indexTemplate: path.join(projectRoot, 'index.html'),
  entryPoint: {
    dienstverlening: path.join(projectRoot, 'app')
  },

  output: path.join(wwwRoot, '[name].[hash].js'),
  cssOutputName: `[name].[contenthash:20].css`,

  wwwRoot: wwwRoot,
  index: isProduction ? path.join(wwwRoot, 'index.html') : 'index.html',
  assetsDirectory: 'static',

  // Remember to also update jsconfig.json
  aliases: {
    'app': path.join(projectRoot, 'app'),
    'components': path.join(projectRoot, 'app/components'),
    'core': path.join(projectRoot, 'app/core'),
  }
};
