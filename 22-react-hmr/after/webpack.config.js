const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    mode: 'development',
    devServer: {
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                        plugins: ["react-hot-loader/babel"],
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './html/template.html',
        }),
        new CleanWebpackPlugin(),
    ]
};