# CSS Background Images

1. Background Images in CSS

2. Hello file-loader

3. Images and JavaScript


















Useful snippets

      {
        test: /\.(png|svg|jpg|gif)$/,
        use:
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            }
          },
