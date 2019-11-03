const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(commonConfig, {
    mode: 'development',
    output: {
        filename: '[name].js',
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ]
});