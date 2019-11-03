const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function createScssRules({ test, exclude, modules }) {
  return {
    test,
    exclude,
    use: [
      { loader: MiniCssExtractPlugin.loader, },
      { loader: 'css-loader', options: { modules } },
      'sass-loader',
    ],
  };
}

const moduleRules = createScssRules({
  test: /\.module.s[ac]ss$/i,
  modules: true,
});

const scssRules = createScssRules({
  test: /\.s[ac]ss$/i,
  exclude: /\.module.(s(a|c)ss)$/,
});

module.exports = {
  entry: ['./src/main.js'],
  output: {
    filename: '[name]-[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      moduleRules,
      scssRules,
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin(),
  ],
};

