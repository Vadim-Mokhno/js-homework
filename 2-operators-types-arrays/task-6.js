// Task 6
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];

const mostFrequentNumberInArray = arr
  .map((element, index, array) => [
    element,
    array.filter(el => el === element).length,
  ])
  .reduce((mostFrequentNumberInArrayEntry, entry) => {
    return entry[1] > mostFrequentNumberInArrayEntry[1]
      ? entry
      : mostFrequentNumberInArrayEntry;
  })
  .shift();

arr = arr.filter(el => el !== mostFrequentNumberInArray);
const data = [mostFrequentNumberInArray];

console.log(arr);
console.log(data);
