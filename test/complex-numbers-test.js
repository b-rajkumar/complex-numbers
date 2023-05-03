const {deepStrictEqual} = require('assert');
const {describe, it} = require('node:test');
const {makeComplexNumber} = require('../src/complex-numbers.js');

describe('getRealPart()', function() {
  it('should return the real part of the given imaginary Number', function() {

    const complexNumber = makeComplexNumber({realPart: 2, imaginaryPart: 42});
    const actual = complexNumber.getRealPart(); 
    const expected = 2;

    deepStrictEqual(actual, expected);
  });
});

describe('getImaginaryPart()', function() {
  it('should return the real part of the given imaginary Number', function() {

    const complexNumber = makeComplexNumber({realPart: 2, imaginaryPart: 42});
    const actual = complexNumber.getImaginaryPart(); 
    const expected = 42;

    deepStrictEqual(actual, expected);
  });
});

describe('add()', function() {
  it('should add the given complex Numbers', function() {

    const firstComplexNumber = makeComplexNumber({realPart: -2, imaginaryPart: 42});
    const secondComplexNumber = makeComplexNumber({realPart: 4, imaginaryPart: -5});
    const actual = firstComplexNumber.add(secondComplexNumber);
    const expected = {realPart: 2, imaginaryPart: 37};

    deepStrictEqual(actual, expected);
  });

  it('should add the given complex Numbers, one of which has no real part', function() {

    const firstComplexNumber = makeComplexNumber({realPart: 0, imaginaryPart: 42});
    const secondComplexNumber = makeComplexNumber({realPart: 4, imaginaryPart: 5});
    const actual = firstComplexNumber.add(secondComplexNumber); 
    const expected = {realPart: 4, imaginaryPart: 47};

    deepStrictEqual(actual, expected);
  });

  it('should add the given complex Numbers, one of which has no imaginary part', function() {

    const firstComplexNumber = makeComplexNumber({realPart: 4, imaginaryPart: 0});
    const secondComplexNumber = makeComplexNumber({realPart: 4, imaginaryPart: 5});
    const actual = firstComplexNumber.add(secondComplexNumber); 
    const expected = {realPart: 8, imaginaryPart: 5};

    deepStrictEqual(actual, expected);
  });
});

describe('multiply()', function() {
  it('should multiply the given complex Numbers', function() {

    const firstComplexNumber = makeComplexNumber({realPart: -2, imaginaryPart: 1});
    const secondComplexNumber = makeComplexNumber({realPart: 4, imaginaryPart: -5});
    const actual = firstComplexNumber.multiply(secondComplexNumber); 
    const expected = {realPart: -3, imaginaryPart: 14};

    deepStrictEqual(actual, expected);
  });
});

describe('display()', function() {
  it('should display the complexNumber which has no real part', function() {

    const complexNumber = makeComplexNumber({realPart: 0, imaginaryPart: 5});
    const actual = complexNumber.display(); 
    const expected = '5i';

    deepStrictEqual(actual, expected);
  });

  it('should display the complexNumber which has no imaginary part', function() {

    const complexNumber = makeComplexNumber({realPart: 4, imaginaryPart: 0});
    const actual = complexNumber.display(); 
    const expected = '4';

    deepStrictEqual(actual, expected);
  });

  it('should display the complexNumber which has negative real value', function() {

    const complexNumber = makeComplexNumber({realPart: -2, imaginaryPart: 52});
    const actual = complexNumber.display(); 
    const expected = '-2+52i';

    deepStrictEqual(actual, expected);
  });

  it('should display the complexNumber which has negative imaginary value', function() {

    const complexNumber = makeComplexNumber({realPart: 2, imaginaryPart: -5});
    const actual = complexNumber.display(); 
    const expected = '2-5i';

    deepStrictEqual(actual, expected);
  });

});
