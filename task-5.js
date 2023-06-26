const sortElementsInArrayByType = function (inputArray) {
  if (!Array.isArray(inputArray) || inputArray.length === 0) {
    console.error('Invalid input');
    return null;
  }

  const sortedArray = new Array();
  const sortArrayByType = function (array) {
    for (let element of array) {
      if (Array.isArray(element)) {
        sortArrayByType(element);
      } else {
        addElementToSortedArray(element);
      }
    }
  };
  const addElementToSortedArray = function (element) {
    let isElementAdded = false;
    for (let elementOfSortedArray of sortedArray) {
      if (typeof elementOfSortedArray[0] === typeof element) {
        elementOfSortedArray.push(element);
        isElementAdded = true;
        break;
      }
    }

    if (!isElementAdded) {
      sortedArray.push([element]);
    }
  };

  sortArrayByType(inputArray);

  return sortedArray;
};

console.log(
  sortElementsInArrayByType([
    [2, [true, { n: 0 }, [3, 5555555]]],
    5,
    'Limit',
    12,
    'a',
    '3',
    false,
    99,
    2,
    [
      2,
      4,
      undefined,
      { s: '44' },
      3,
      '33',
      'a',
      [
        77777,
        'rrrrrrr',
        [
          2888,
          null,
          [undefined, null, ['innermost'], undefined],
          50000,
          { n: 1 },
        ],
        'ssss',
      ],
      'text',
    ],
    'strong',
    'broun',
    { n: 2 },
    ['trtrt', 666, { w: 55 }],
  ])
);

console.log('-------------------');

console.log(
  sortElementsInArrayByType([
    5,
    'Limit',
    12,
    'a',
    '3',
    99,
    2,
    [2, 4, 3, '33', 'a', 'text'],
    'strong',
    'broun',
  ])
);
