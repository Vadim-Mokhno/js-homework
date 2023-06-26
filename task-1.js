const sumSliceArray = function (array, first, second) {
  if (!Array.isArray(array)) {
    throw new TypeError('first argument must be an array');
  }

  if (typeof first !== 'number' || typeof second !== 'number') {
    throw new TypeError('indexes in array must numbers');
  }

  if (first < 0 || first >= array.length) {
    throw new RangeError('first index is out of range');
  }

  if (second < 0 || second >= array.length) {
    throw new RangeError('second index is out of range');
  }

  return array[first] + array[second];
};

try {
  const array = [2, 4, null, 65, 78, 34, 4, 56, 55, true, 77, undefined, {}];
  const firstElementIndex = 4;
  const secondElementIndex = -2;
  console.log(
    `${array[firstElementIndex]} + ${
      array[secondElementIndex]
    } = ${sumSliceArray(array, firstElementIndex, secondElementIndex)}`
  );
} catch (e) {
  console.error(e.name);
  console.error(e.message);
  console.error(e.stack);
}
