# Testing with Mocha And Webpack

1. Let's write a mocha test

2. A new webpack.config-test.js

3. Running the tests with mochapack



















Useful Snippets

npm install --save-dev webpack-node-externals

import { expect } from 'chai';

describe('Utils', function() {
  describe('#twice()', function() {
    it('should return the value multiplied by 2', function() {
      expect(twice(10)).to.equal(20);
    });
  });

  describe('#thrice()', function() {
    it('should return the value multiplied by 3', function() {
      expect(thrice(10)).to.equal(30);
    });
  });
});


const nodeExternals = require('webpack-node-externals');
webpack-config.test.js
  target: 'node',
  externals: [nodeExternals()],

