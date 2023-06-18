// Task 1
const a = 1;
const b = 2;
const c = 3;
let resultMessage = 'The expression a < b < c is: ';

console.log(`a = ${a}, b = ${b}, c = ${c}`);

if (a < b && b < c) {
  resultMessage += 'true';
} else {
  resultMessage += 'false';
}

console.log(resultMessage);