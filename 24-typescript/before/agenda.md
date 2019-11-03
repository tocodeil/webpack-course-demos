# Webpack + TypeScript

1. Hello TypeScript

2. Setup
   npm install --save-dev webpack webpack-cli typescript ts-loader html-webpack-plugin clean-webpack-plugin

3. Create a tsconfig.json

4. Add loader to webpack.config.js

5. Enjoy













Useful Snippets

{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "sourceMap": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true
  }
}



      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

