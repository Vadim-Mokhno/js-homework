// Bonus task
const revenueRateForFixedNumberOfLines = 50;
const fixedNumberOfLines = 100;
const fineRate = 20;
const fineFrequency = 3;

let desiredIncome = Number(prompt('Enter your desired income:'));
const numberOfLatenesses = Number(
  prompt('Enter the number of your latenesses:')
);

alert(
  `You must write ${
    Math.ceil(
      ((desiredIncome +
        Math.floor(numberOfLatenesses / fineFrequency) * fineRate) *
        fixedNumberOfLines) /
        revenueRateForFixedNumberOfLines /
        fixedNumberOfLines
    ) * fixedNumberOfLines
  } lines of code`
);

const numberOfLines = Number(
  prompt('Enter the number of code lines you wrote:')
);
desiredIncome = Number(prompt('Enter your desired income:'));

alert(
  `You can be late ${Math.floor(
    ((Math.floor(numberOfLines / fixedNumberOfLines) *
      revenueRateForFixedNumberOfLines -
      desiredIncome) /
      fineRate) *
      fineFrequency
  )} times`
);

numberOfLines = Number(prompt('Enter the number of code lines you wrote:'));
numberOfLatenesses = Number(prompt('Enter the number of your latenesses:'));
const salary =
  Math.floor(numberOfLines / fixedNumberOfLines) *
    revenueRateForFixedNumberOfLines -
  Math.floor(numberOfLatenesses / fineFrequency) * fineRate;

alert(`You earned ${salary > 0 ? salary + '$' : 'nothing'}`);
