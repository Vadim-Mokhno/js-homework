// Task 5
const currentHour = new Date().getHours();
const morningHours = { from: 5, to: 11 };
const dayHours = { from: 12, to: 17 };
const eveningHours = { from: 18, to: 23 };
const nightHours = { from: 0, to: 4 };

let greeting = '';

if (currentHour >= morningHours.from && currentHour <= morningHours.to) {
  greeting += 'Доброго ранку';
} else if (currentHour >= dayHours.from && currentHour <= dayHours.to) {
  greeting += 'Доброго дня';
} else if (currentHour >= eveningHours.from && currentHour <= eveningHours.to) {
  greeting += 'Доброго вечора';
} else {
  greeting += 'Доброї ночі';
}

console.log(greeting);

switch (currentHour) {
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
    greeting = 'Доброго ранку';
    break;
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    greeting = 'Доброго дня';
    break;
  case 18:
  case 19:
  case 20:
  case 21:
  case 22:
  case 23:
    greeting = 'Доброго вечора';
    break;
  default:
    greeting = 'Доброї ночі';
}

console.log(greeting);