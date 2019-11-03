# Tree Shaking

1. What is tree shaking

2. Default webpack tree shaking (unused exports)

3. Default webpack tree shaking (unused code)

4. Helping webpack understand side effects

5. Helping webpack detect unused code





Useful snippets

npx webpack --display-used-exports

"sideEffects": [
  "./src/some-side-effectful-file.js",
  "*.css"
]

