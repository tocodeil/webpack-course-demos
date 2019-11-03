const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const base = require('./webpack.config.js');
const path = require('path');

module.exports = merge(base, {
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()], 
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    }
  }
});
