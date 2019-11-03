const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const execSync = require('child_process').execSync;

const currentBranch = execSync('git symbolic-ref -q HEAD').toString();

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    overlay: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      GIT_BRANCH: JSON.stringify(currentBranch),
    }),
  ],
});
