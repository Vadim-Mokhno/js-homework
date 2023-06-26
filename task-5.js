const sortElementsByType = function (inputArray) {
  if (!Array.isArray(inputArray) || inputArray.length === 0) {
    console.error('Invalid input');
    return null;
  }

  const outputArray = new Array();

  for (let elementOfInputArray of inputArray) {
    let isElementAdded = false;

    if (Array.isArray(elementOfInputArray)) {
      for (let arrayOfValues of sortElementsByType(elementOfInputArray)) {
        isElementAdded = false;

        for (let elementOfOutputArray of outputArray) {
          if (typeof arrayOfValues[0] === typeof elementOfOutputArray[0]) {
            elementOfOutputArray.push(...arrayOfValues);
            isElementAdded = true;
            break;
          }
        }

        if (!isElementAdded) {
          outputArray.push([...arrayOfValues]);
        }
      }
      continue;
    }

    for (let elementOfOutputArray of outputArray) {
      if (typeof elementOfOutputArray[0] === typeof elementOfInputArray) {
        elementOfOutputArray.push(elementOfInputArray);
        isElementAdded = true;
        break;
      }
    }

    if (!isElementAdded) {
      outputArray.push([elementOfInputArray]);
    }
  }
  return outputArray;
};

// console.log(
//   sortElementsByType([
//     [2, [true, { n: 0 }, [3, 5555555]]],
//     5,
//     'Limit',
//     12,
//     'a',
//     '3',
//     false,
//     99,
//     2,
//     [
//       2,
//       4,
//       undefined,
//       { s: '44' },
//       3,
//       '33',
//       'a',
//       [77777, 'rrrrrrr', [2888, null, 50000, { n: 1 }], 'ssss'],
//       'text',
//     ],
//     'strong',
//     'broun',
//     { n: 2 },
//     ['trtrt', 666, { w: 55 }],
//   ])
// );

console.log(
  sortElementsByType([
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
