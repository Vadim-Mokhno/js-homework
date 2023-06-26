const compact = function (uncompactedArray) {
  if (!Array.isArray(uncompactedArray) || uncompactedArray.length === 0) {
    console.error('Invalid input');
    return null;
  }

  const compactedArray = new Array();

  for (let i = 0; i < uncompactedArray.length; i++) {
    if (compactedArray.indexOf(uncompactedArray[i]) === -1) {
      compactedArray.push(uncompactedArray[i]);
    }
  }

  return compactedArray;
};

console.log(compact([5, 3, 4, 5, 6, 7, 3]));
