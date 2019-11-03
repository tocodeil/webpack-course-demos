# Lazy Loading

1. Convert buttons example to lazy load

2. Select chunk names

3. Group all buttons to one chunk

















Useful Snippets
  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');


  optimization: {
    splitChunks: {
      cacheGroups: {
        buttons: {
          name: 'buttons',
          test: /buttons/,
          enforce: true,
        },
      },
    },
  },

