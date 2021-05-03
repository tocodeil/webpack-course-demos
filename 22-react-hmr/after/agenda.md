# React Webpack HMR

1. Setup - React + HMR FTW
    npm install --save-dev webpack webpack-cli webpack-dev-server react react-dom babel-loader @babel/core @babel/preset-react html-webpack-plugin react-hot-loader @hot-loader/react-dom

2. Add HMR support to code

3. Add react-hot-loader/babel plugin to Babel

4. Use resolve.alias to replace ReactDOM

5. Set devServer.hot = true

6. Run and say Wow :)

























Useful Snippets

import { hot } from 'react-hot-loader/root';
export default hot(App);


---
    
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },

---
babel.options.plugins = ["react-hot-loader/babel"];
