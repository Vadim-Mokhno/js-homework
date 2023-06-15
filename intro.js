
// Task 2
console.log('Mokhno');

// Task 3
console.log('Task 3');
let variableOne = 1;
let variableTwo = 2;
alert(
  `After initialization: variableOne: ${variableOne}, variableTwo: ${variableTwo} `
);

variableOne = variableTwo;

alert(
  `After assignment: variableOne: ${variableOne}, variableTwo: ${variableTwo} `
);

// Task 4
console.log('Task 4');
const jsDataTypes = {
  Number: 1,
  String: 'My string',
  Boolean: true,
  Undefined: undefined,
  Null: null,
};
console.log(jsDataTypes);

// Task 5
console.log('Task 5');
const isAdult = confirm('Are you adult?');
console.log(`You are adult (true/false): ${isAdult}`);

// Task 6
console.log('Task 6');
const firstName = 'Vadym';
const secondName = 'Mokhno';
const groupName = 'JS Fundamentals-June';
const birthYear = 1981;
const isMarried = false;

console.log(`birthYear: ${birthYear} (type: ${typeof birthYear})
isMarried: ${isMarried} (type: ${typeof isMarried})
firstName: ${firstName} (type: ${typeof firstName})
secondName: ${secondName} (type: ${typeof secondName})
groupName: ${groupName} (type: ${typeof groupName})`);

const uninitializedVariable = undefined;
const nullishVariable = null;

console.log(`uninitializedVariable is of type ${typeof uninitializedVariable}
nullishVariable is of type ${typeof nullishVariable}`);

// Task 7
console.log('Task 7');

const userLogin = prompt('Enter you login');
const userEmail = prompt('Enter you email');
const userPassword = prompt('Enter you password');

alert(
  `Dear ${userLogin}, your email is ${userEmail}, your password is ${userPassword}`
);

// Task 8
console.log('Task 8');

const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInMonth = 30;

const secondsInHour = minutesInHour * secondsInMinute;
const secondsInDay = hoursInDay * secondsInHour;
const secondsInMonth = daysInMonth * secondsInDay;

alert(`Number of seconds in an hour is ${secondsInHour}
Number of seconds in a day is ${secondsInDay}
Number of seconds in a month is ${secondsInMonth}`);
