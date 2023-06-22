// Bonus task
const revenueRateForFixedNumberOfLines = 50;
const fixedNumberOfLines = 100;
const fineRate = 20;
const fineFrequency = 3;
let desiredIncome;
let numberOfLines;
let numberOfLatenesses;
let salary;

const userChoice = Number(prompt(`What do you want to compute? :
1 - number of code lines
2 - number of latenesses
3 - salary value`));


switch (userChoice) {
  case 1:
    desiredIncome = Number(prompt('Enter your desired income:'));
    numberOfLatenesses = Number(
      prompt('Enter the number of your latenesses:')
    );

    alert(
      `You must write ${
        Math.ceil(
          ((desiredIncome +
            Math.floor(numberOfLatenesses / fineFrequency) * fineRate) /
            (revenueRateForFixedNumberOfLines / fixedNumberOfLines)) /
            fixedNumberOfLines
        ) * fixedNumberOfLines
      } lines of code`
    );
    break;

  case 2:
    numberOfLines = Number(
      prompt('Enter the number of code lines you wrote:')
    );
    desiredIncome = Number(prompt('Enter your desired income:'));
    numberOfLatenesses = Math.floor(
        ((Math.floor(numberOfLines / fixedNumberOfLines) *
          revenueRateForFixedNumberOfLines -
          desiredIncome) /
          (fineRate / fineFrequency))           
    );
    alert(
      `You can be late ${
        numberOfLatenesses +
        (fineFrequency - (numberOfLatenesses % fineFrequency) - 1)
      } times`
    );
    break;
  case 3:
    numberOfLines = Number(prompt('Enter the number of code lines you wrote:'));
    numberOfLatenesses = Number(prompt('Enter the number of your latenesses:'));
    salary =
      Math.floor(numberOfLines / fixedNumberOfLines) *
        revenueRateForFixedNumberOfLines -
      Math.floor(numberOfLatenesses / fineFrequency) * fineRate;

    alert(`You earned ${salary > 0 ? salary + '$' : 'nothing'}`);
  default:
    alert('Incorect input!');
}
