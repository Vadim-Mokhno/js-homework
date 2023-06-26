const isInputInvalid = function (startValue, endValue) {
  if (
    typeof startValue !== typeof endValue ||
    (typeof startValue !== 'number' && typeof startValue !== 'string') ||
    (typeof startValue === 'string' &&
      (startValue.length > 1 || endValue.length > 1)) ||
    startValue > endValue
  ) {
    return true;
  } else {
    return false;
  }
};

const createArray = function (startValue, endValue) {
  if (isInputInvalid(startValue, endValue)) {
    console.error('Invalid input');
    return null;
  }

  const resultArray = new Array();

  for (let nextValue = startValue; nextValue <= endValue; ) {
    resultArray.push(nextValue);
    nextValue =
      typeof startValue === 'number'
        ? nextValue + 1
        : String.fromCharCode(nextValue.charCodeAt(0) + 1);
  }

  return resultArray;
};

console.log(createArray(2, 9));