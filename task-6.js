const calc = function (a, b, op) {
  if (typeof a !== 'number' || typeof b !== 'number' || !Number.isInteger(op)) {
    console.error('Invalid input');
    return null;
  }

  switch (op) {
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return a / b;
    default:
      return a + b;
  }
};

console.log(calc(10.2, 2, 3));
