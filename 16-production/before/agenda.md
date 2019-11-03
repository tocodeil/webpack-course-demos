# Moving To Production

1. Production mode
  * minified code
  * browser cache
  * source maps in external files
  * slower builds

2. Using multiple webpack.config.js files

3. package.json shortcuts
    
4. Use hashed file name in production

5. Removing dev code with DefinePlguin

6. Minifying js and css files

7. Source Maps










Useful snippets

const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        }
      }),
    ],
  }
};

npm install --save-dev optimize-css-assets-webpack-plugin


