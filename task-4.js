class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = 'MonthException';
  }
}

const showMonthName = function (month) {
  if (typeof month !== 'number' || Number.isNaN(month)) {
    throw new TypeError('A month number must be a number');
  }

  switch (month) {
    case 1:
      return 'January';
    case 2:
      return 'February';
    case 3:
      return 'March';
    case 4:
      return 'April';
    case 5:
      return 'May';
    case 6:
      return 'June';
    case 7:
      return 'July';
    case 8:
      return 'Augast';
    case 9:
      return 'September';
    case 10:
      return 'October';
    case 11:
      return 'November';
    case 12:
      return 'December';
    default:
      throw new MonthException('Incorrect month number');
  }
};

try {
  console.log(showMonthName(23));
} catch (e) {
  console.error(e.name);
  console.error(e.message);
  console.error(e.stack);
}
