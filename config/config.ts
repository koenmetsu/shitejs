import * as path from 'path';

const projectRoot = path.resolve(__dirname, '../src/Dienstverlening.UI');
const wwwRoot = path.join(projectRoot, 'wwwroot');

export const isProduction = process.env.NODE_ENV === 'production';

export default {
  projectRoot: projectRoot,
  indexTemplate: path.join(projectRoot, 'index.html'),
  entryPoint: path.join(projectRoot, 'app'),

  output: path.join(wwwRoot, 'bundle-[hash].js'),
  cssOutputName: `bundle-[contenthash:20].css`,

  wwwRoot: wwwRoot,
  index: isProduction ? path.join(wwwRoot, 'index.html') : 'index.html',
  assetsDirectory: 'static',

  aliases: {
    'app': path.join(projectRoot, 'app'),
    'core': path.join(projectRoot, 'app/core'),
  }
};
