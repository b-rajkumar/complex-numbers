const {deepStrictEqual} = require('assert');
const {describe, it} = require('node:test');
const {generateComplexNumber} = require('../src/complex-numbers.js');

describe('getRealPart()', function() {
  it('should return the real part of the given imaginary Number', function() {

    const realPart = -5;
    const imaginaryPart = 23;
    const complexNumber = generateComplexNumber({realPart: 2, imaginaryPart: 42});
    const actual = complexNumber.getRealPart(); 
    const expected = 2;

    deepStrictEqual(actual, expected);
  });
});

describe('getImaginaryPart()', function() {
  it('should return the real part of the given imaginary Number', function() {

    const realPart = -5;
    const imaginaryPart = 23;
    const complexNumber = generateComplexNumber({realPart: 2, imaginaryPart: -42});
    const actual = complexNumber.getImaginaryPart(); 
    const expected = -42;

    deepStrictEqual(actual, expected);
  });
});
