# Hello Webpack

* Why do we need a Module Bundler?
    require.js, parcel, webpack

* Adding webpack to an existing project

* Development workflow














## Useful Code Snippets

webpack.config.js:

```
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  }
};

```
