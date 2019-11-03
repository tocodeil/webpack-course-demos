const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },

  devServer: {
    liveReload: true,
    overlay: true,
  },

  plugins: [
    new HtmlWebpackPlugin(),
  ],
};
