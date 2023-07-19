let keys = [1, 2, 3, 4];
let values = ['div', 'span', 'b', 'i'];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(1)); // "span"
console.log(map.get(2)); // "span"
console.log(map.get(3)); // "span"
console.log(map.get(4)); // "span"

function mapBuilder(keysArray, valuesArrays) {
  return new Map(
    keysArray.map((element, index) => [element, valuesArrays[index]])
  );
}
