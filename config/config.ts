import * as path from 'path';

export default {
  entryPoint: './src/Dienstverlening.UI/app',
  output: './src/Dienstverlening.UI/wwwroot/bundle-[hash].js',
  cssOutputName: 'bundle-[contenthash:20].css',

  indexTemplate: './src/Dienstverlening.UI/index.html',

  index: path.resolve(__dirname, '../src/Dienstverlening.UI/wwwroot/index.html'),
  assetsRoot: path.resolve(__dirname, '../src/Dienstverlening.UI/wwwroot'),
  assetsSubDirectory: 'static',

  aliases: {
    'app': path.resolve(__dirname, 'src/Dienstverlening.UI/app'),
    'core': path.resolve(__dirname, 'src/Dienstverlening.UI/app/core'),
  },

  port: 1337
};
