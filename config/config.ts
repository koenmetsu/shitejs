import * as path from 'path';

export default {
  entryPoint: './src/Dienstverlening.UI/app',
  output: './src/Dienstverlening.UI/wwwroot/bundle-[hash].js',
  cssOutputName: 'bundle-[contenthash:20].css',

  aliases: {
    'app': path.resolve(__dirname, 'src/Dienstverlening.UI/app'),
    'core': path.resolve(__dirname, 'src/Dienstverlening.UI/app/core'),
  },

  port: 1337
};
