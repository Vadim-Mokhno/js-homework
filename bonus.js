const create = function (outerString) {
  outerString = outerString.trim();
  return function (inputString) {
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
// console.log(tom('pass_for_Tom'));
// console.log(tom('pass_for_tom'));

console.log(tom('pass_for_tom'));
console.log(tom('pass_for_tom'));
