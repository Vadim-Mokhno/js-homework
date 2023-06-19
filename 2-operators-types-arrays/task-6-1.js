// Task 6
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
console.log('initial array: [' + arr + ']');

const mostFrequentNumberInArray = arr
  .map((element, index, array) => [
    element,
    array.indexOf(element) < index
      ? -1
      : array.filter(el => el === element).length,
  ])
  .filter(el => el[1] !== -1)
  .reduce((mostFrequentNumberInArrayEntry, entry) => {
    return entry[1] > mostFrequentNumberInArrayEntry[1]
      ? entry
      : mostFrequentNumberInArrayEntry;
  })
  .shift();

arr = arr.filter(el => el !== mostFrequentNumberInArray);
const data = [mostFrequentNumberInArray];

console.log('array with the most frequent number in the initial array: [' + data + ']');
console.log('array after deletion of the most frequent number: [' + arr + ']');