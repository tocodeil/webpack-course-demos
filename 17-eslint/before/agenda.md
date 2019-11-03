# ESLint

1. Who needs linting

2. ESLint installation & Setup

3. ESLint loader

4. Linting for the browser

5. ESLint rules
https://eslint.org/docs/rules/














Useful Snippets

ESLint Loader Rule
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
        },
      },


Empty ESLint file

{
  "parser": "babel-eslint",
  "extends": ["airbnb"],
}

Browser

  "env": {
    "browser": true,
  },


Rules
  "rules": {
    "no-unused-vars" : "off",
  }

