const makeComplexNumber = function({realPart, imaginaryPart}) {
  const getRealPart = function() {
    return realPart;
  };

  const getImaginaryPart = function() {
    return imaginaryPart;
  };

  const getComplexNumber = function() {
    return {realPart, imaginaryPart};
  };

  const add = function(addend) {
    const real = realPart + addend.getRealPart();
    const imaginary = imaginaryPart + addend.getImaginaryPart();

    return {realPart: real, imaginaryPart: imaginary}
  };

  const multiply = function(multiplicand) {
    const real = realPart * multiplicand.getRealPart() - (imaginaryPart * multiplicand.getImaginaryPart()); 
    const imaginary = realPart * multiplicand.getImaginaryPart() + imaginaryPart * multiplicand.getRealPart();

    return {realPart: real, imaginaryPart: imaginary}
  };

  const display = function() {
    const symbol = (imaginaryPart > 0)? '+' : '';
    let complexNumber = '';

    if(realPart === 0) {
      complexNumber = imaginaryPart + 'i';
    }

    if(imaginaryPart === 0) {
      complexNumber = realPart + '';
    }

    if(realPart === 0 && imaginaryPart === 0) {
      complexNumber = ''
    };

    if(realPart !== 0 && imaginaryPart !== 0) {
      complexNumber = realPart + symbol + imaginaryPart + 'i';
    };

    return complexNumber;
  };

  return {getImaginaryPart, getRealPart, display, multiply, add, getComplexNumber};
};

exports.makeComplexNumber = makeComplexNumber;
