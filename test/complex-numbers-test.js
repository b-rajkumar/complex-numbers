const {deepStrictEqual} = require('assert');
const {describe, it} = require('node:test');
const {complexNumber} = require('../src/complex-numbers.js');

describe('getRealPart()', function() {
  it('should return the real part of the given imaginary Number', function() {

    const complexNum = complexNumber(2, 42);
    const actual = complexNum.getRealPart(); 
    const expected = 2;

    deepStrictEqual(actual, expected);
  });
});

describe('getImaginaryPart()', function() {
  it('should return the real part of the given imaginary Number', function() {

    const complexNum = complexNumber(2, 42);
    const actual = complexNum.getImaginaryPart(); 
    const expected = 42;

    deepStrictEqual(actual, expected);
  });
});

describe('add()', function() {
  it('should add the given complex Numbers', function() {

    const firstComplexNumber = complexNumber(-2, 42);
    const secondComplexNumber = complexNumber(4, -5);
    const actual = firstComplexNumber.add(secondComplexNumber);
    const expected = {real: 2, imaginary: 37};

    deepStrictEqual(actual, expected);
  });

  it('should add the given complex Numbers, one of which has no real part', function() {

    const firstComplexNumber = complexNumber(0, 42);
    const secondComplexNumber = complexNumber(4, 5);
    const actual = firstComplexNumber.add(secondComplexNumber); 
    const expected = {real: 4, imaginary: 47};

    deepStrictEqual(actual, expected);
  });

  it('should add the given complex Numbers, one of which has no imaginary part', function() {

    const firstComplexNumber = complexNumber(4, 0);
    const secondComplexNumber = complexNumber(4, 5);
    const actual = firstComplexNumber.add(secondComplexNumber); 
    const expected = {real: 8, imaginary: 5};

    deepStrictEqual(actual, expected);
  });
});

describe('multiply()', function() {
  it('should multiply the given complex Numbers', function() {

    const firstComplexNumber = complexNumber(-2, 1);
    const secondComplexNumber = complexNumber(4, -5);
    const actual = firstComplexNumber.multiply(secondComplexNumber); 
    const expected = {real: -3, imaginary: 14};

    deepStrictEqual(actual, expected);
  });
});

describe('display()', function() {
  it('should display the complexNum which has no real part', function() {

    const complexNum = complexNumber(0, 5);
    const actual = complexNum.display(); 
    const expected = '5i';

    deepStrictEqual(actual, expected);
  });

  it('should display the complexNum which has no imaginary part', function() {

    const complexNum = complexNumber(4, 0);
    const actual = complexNum.display(); 
    const expected = '4';

    deepStrictEqual(actual, expected);
  });

  it('should display the complexNum which has negative real value', function() {

    const complexNum = complexNumber(-2, 52);
    const actual = complexNum.display(); 
    const expected = '-2+52i';

    deepStrictEqual(actual, expected);
  });

  it('should display the complexNum which has negative imaginary value', function() {

    const complexNum = complexNumber(2, -5);
    const actual = complexNum.display(); 
    const expected = '2-5i';

    deepStrictEqual(actual, expected);
  });
});
