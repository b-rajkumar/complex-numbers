const generateComplexNumber = function({realPart, imaginaryPart}) {
  const getRealPart = function() {
    return realPart;
  };

  const getImaginaryPart = function() {
    return imaginaryPart;
  };

  return {getRealPart, getImaginaryPart};
};

exports.generateComplexNumber = generateComplexNumber;
