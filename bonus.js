const isInputInvalid = function (argumentValue) {
  if (typeof argumentValue !== 'string' || argumentValue.length === 0) {
    return true;
  } else {
    return false;
  }
};

const create = function (outerString) {
  if (isInputInvalid(outerString)) {
    console.error('Invalid input');
    return null;
  }

  outerString = outerString.trim();

  return function (inputString) {
    if (isInputInvalid(inputString)) {
      console.error('Invalid input');
      return null;
    }

    inputString = inputString.trim();

    if (inputString.length !== outerString.length) {
      return false;
    }

    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] !== outerString[i]) {
        return false;
      }
    }

    return true;
  };
};

const tom = create('pass_for_tom');

console.log(tom?.('pass_for_Tom'));
console.log(tom?.('pass_for_tom'));
