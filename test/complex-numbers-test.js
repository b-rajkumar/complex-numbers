const {deepStrictEqual} = require('assert');
const {describe, it} = require('node:test');
const {getRealPart} = require('../src/complex-numbers.js');

describe('getRealPart()', function() {
  it('should return the real part of the given complex number', function() {
    deepStrictEqual(getRealPart('2 + 3i'), 2);
  });
});
