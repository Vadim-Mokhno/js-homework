// Task 3
const adultAge = 18;
const isAdult = Number(prompt('How old are you?')) >= adultAge ? true : false;
let resultMessage = '';

if (isAdult) {
  resultMessage += 'You are adult!';
} else {
  resultMessage += 'You are too young!';
}

console.log(resultMessage);