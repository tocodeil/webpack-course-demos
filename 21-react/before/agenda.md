# React Webpack Project

1. Building JSX with babel

2. Create the HTML template for html webpack plugin

3. Running the code in dev server and in production


















Useful snippets

const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};

npm install --save-dev babel-cli @babel/core @babel/preset-react babel-loader webpack webpack-cli clean-webpack-plugin html-webpack-plugin webpack-dev-server react react-dom


