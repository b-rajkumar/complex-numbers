const generateComplexNumber = function({realPart, imaginaryPart}) {
  const getRealPart = function() {
    return realPart;
  };

  const getImaginaryPart = function() {
    return imaginaryPart;
  };

  return {getRealPart, getImaginaryPart};
};

const displayComplexNumber = function({realPart, imaginaryPart}) {
  const symbol = (imaginaryPart > 0)? '+' : '';

  if(realPart === 0) {
    return symbol + imaginaryPart + 'i';
  }

  if(imaginaryPart === 0) {
    return realPart + '';
  }

  return realPart + symbol + imaginaryPart + 'i';
};

exports.generateComplexNumber = generateComplexNumber;
