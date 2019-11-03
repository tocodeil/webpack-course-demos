# Webpack and Browser Cache

1. Why is browser cache important

2. Clean Webpack Plugin

3. Creating unique JavaScript filenames based on content

4. Creating unique CSS filenames based on content

5. Extracting external libraries to their own chunk














Useful Snippets

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
    plugins: [
        new CleanWebpackPlugin(),
    ],


   optimization: {
     runtimeChunk: 'single',
   },





     splitChunks: {
       cacheGroups: {
         vendor: {
           test: /[\\/]node_modules[\\/]/,
           name: 'vendors',
           chunks: 'all',
         },
       },
     },
