const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new HtmlWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        buttons: {
          name: 'buttons',
          test: /buttons/,
          enforce: true,
        },
      },
    },
  },
};
