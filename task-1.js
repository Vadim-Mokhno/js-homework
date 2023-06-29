const sumSliceArray = function (array, first, second) {
  if (!Array.isArray(array)) {
    throw new TypeError('first argument must be an array');
  }

  if (typeof first !== 'number' || typeof second !== 'number') {
    throw new TypeError('indexes in array must numbers');
  }

  if (first < 1 || first > array.length) {
    throw new RangeError('first index is out of range');
  }

  if (second < 1 || second > array.length) {
    throw new RangeError('second index is out of range');
  }

  return array[first - 1] + array[second - 1];
};

try {
  const array = [2, 4, 22, 65, 78, 34, 4, 56, 55, true, 77, 55, 100];
  const firstElement = 3;
  const secondElement = 5;
  console.log(
    `${array[firstElement - 1]} + ${array[secondElement - 1]} = ${sumSliceArray(
      array,
      firstElement,
      secondElement
    )}`
  );
} catch (e) {
  console.error(e.name);
  console.error(e.message);
  console.error(e.stack);
}
