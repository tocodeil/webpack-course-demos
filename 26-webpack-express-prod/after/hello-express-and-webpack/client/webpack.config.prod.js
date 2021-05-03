const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackManifestPliugin = require('webpack-manifest-plugin');

module.exports = merge(commonConfig, {
   mode: 'production',
   output: {
       filename: '[name]-[contenthash].js',
   },
    optimization: {
       runtimeChunk: 'single',
    },
    plugins: [
        new WebpackManifestPliugin(),
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash].css'
        }),
    ]
});