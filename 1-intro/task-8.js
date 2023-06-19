// Task 8
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