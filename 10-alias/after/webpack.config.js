const path = require('path');
const buildType = process.env.BROWSER ? 'browser' : 'node';
const actions = (
  buildType === 'browser' ?
  path.resolve(__dirname, 'src/actions/browser') :
  path.resolve(__dirname, 'src/actions/node')
); 

module.exports = {
  entry: './src/main.js',
  resolve: {
    alias: {
      actions,
    },
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, `dist/${buildType}`)
  }
};
