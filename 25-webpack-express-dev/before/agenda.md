# Let's Build a Express.JS + Webpack Project

1. How's this going to work

2. Create a new express app

3. Add client code

4. Create webpack dev config

5. Add webpack middleware to express server















Useful Snippets
---------------

Express Webpack Middleware

  const webpack = require('webpack');
  const middleware = require('webpack-dev-middleware');
  const webpackConfig = require('./client/webpack.config.js');
  const compiler = webpack(webpackConfig);
  app.use(middleware(compiler,
    {
      publicPath: webpackConfig.output.publicPath,
    }
  ));



npm install --save-dev html-webpack-plugin webpack webpack-cli mini-css-extract-plugin clean-webpack-plugin css-loader

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', 'public')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          { loader: 'css-loader', options: {} },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            }
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './html/template.html',
    }),
    new CleanWebpackPlugin(),
  ],
};
