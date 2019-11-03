import { twice, thrice } from 'src/utils';
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
