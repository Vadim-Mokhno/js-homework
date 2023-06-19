let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
console.log('initial array: [' + arr + ']');

let biggestNumberOfEntries = 0;

const mostFrequentNumberInArray = arr.reduce((mostFrequentNumberInArray, currentElement, index, array) => {
  let numberOfEntriesForCurrenElement =
    array.indexOf(currentElement) < index
      ? -1
      : array.filter(el => el === currentElement).length;

  if (numberOfEntriesForCurrenElement > biggestNumberOfEntries) {
    biggestNumberOfEntries = numberOfEntriesForCurrenElement;
    return currentElement;
  } else {
    return mostFrequentNumberInArray;
  }
}, arr[0]);

arr = arr.filter(el => el !== mostFrequentNumberInArray);
const data = [mostFrequentNumberInArray];

console.log('array with the most frequent number in the initial array: [' + data + ']');
console.log('array after deletion of the most frequent number: [' + arr + ']');