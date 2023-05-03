const complexNumber = function(real, imaginary) {
  const getRealPart = function() {
    return real;
  };

  const getImaginaryPart = function() {
    return imaginary;
  };

  const add = function(addend) {
    const realSum = real + addend.getRealPart();
    const imaginarySum = imaginary + addend.getImaginaryPart();

    return {real: realSum, imaginary: imaginarySum}
  };

  const multiply = function(multiplicand) {
    const realProd = real * multiplicand.getRealPart() - (imaginary * multiplicand.getImaginaryPart()); 
    const imaginaryProd = real * multiplicand.getImaginaryPart() + imaginary * multiplicand.getRealPart();

    return {real: realProd, imaginary: imaginaryProd}
  };

  const display = function() {
    const symbol = (imaginary > 0)? '+' : '';
    let complexNumber = '';

    if(real !== 0) {
      complexNumber += real;
    }

    if(real !== 0 && imaginary !== 0) {
      complexNumber += symbol;
    }

    if(imaginary !== 0) {
      complexNumber += imaginary + 'i';
    }

    return complexNumber;
  };

  return {getImaginaryPart, getRealPart, display, multiply, add};
};

exports.complexNumber = complexNumber;
