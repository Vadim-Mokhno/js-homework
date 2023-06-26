const printNumbersInRange = function (startOfRange, endOfRange) {
  if (
    typeof startOfRange !== 'number' ||
	  typeof endOfRange !== 'number' ||
	  startOfRange > endOfRange
  ) {
    console.error('Invalid input');
    return null;
  }

  let result = '';

  for (let i = startOfRange; i <= endOfRange; i++) {
    for (let j = 0; j <= i - startOfRange; j++) {
      result += i + ',';
    }
  }

  return result.slice(0, result.length - 1);
};

console.log(printNumbersInRange(2, 5));
