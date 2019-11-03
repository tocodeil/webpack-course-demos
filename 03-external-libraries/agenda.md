## External Libraries

1. Using "new" libraries using npm - import / export

2. Excluding npm libraries from babel loader

3. Using "old" libraries using webpack Provide Plugin




















Useful Snippets

  plugins: [
    new webpack.ProvidePlugin({
      'window.jQuery': 'jquery',
    })
  ],

