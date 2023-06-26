// Bonus task
const revenueRateForFixedNumberOfLines = 50;
const fixedNumberOfLines = 100;
const fineRate = 20;
const fineFrequency = 3;
const userChoice = Number(prompt(''));

switch (userChoice) {
  case 1:
    let desiredIncome = Number(prompt('Enter your desired income:'));
    const numberOfLatenesses = Number(
      prompt('Enter the number of your latenesses:')
    );

    /*     Math.ceil(
            ((desiredIncome +
            Math.floor(numberOfLatenesses / fineFrequency) * fineRate)) /
            (revenueRateForFixedNumberOfLines / fixedNumberOfLines)) / fixedNumberOfLines) *
            fixedNumberOfLines
    */

    alert(
      `You must write ${
        Math.ceil(
          (desiredIncome +
            Math.floor(numberOfLatenesses / fineFrequency) * fineRate) /
            (revenueRateForFixedNumberOfLines / fixedNumberOfLines) /
            fixedNumberOfLines
        ) * fixedNumberOfLines
      } lines of code`
    );
    break;

  case 2:
    const numberOfLines = Number(
      prompt('Enter the number of code lines you wrote:')
    );
    desiredIncome = Number(prompt('Enter your desired income:'));

    alert(
      `You can be late ${Math.floor(
        ((Math.floor(
          numberOfLines *
            (revenueRateForFixedNumberOfLines / fixedNumberOfLines)
        ) -
          desiredIncome) /
          fineRate) *
          fineFrequency
      )} times`
    );
    break;
  case 3:
    numberOfLines = Number(prompt('Enter the number of code lines you wrote:'));
    numberOfLatenesses = Number(prompt('Enter the number of your latenesses:'));
    const salary =
      Math.floor(numberOfLines / fixedNumberOfLines) *
        revenueRateForFixedNumberOfLines -
      Math.floor(numberOfLatenesses / fineFrequency) * fineRate;

    alert(`You earned ${salary > 0 ? salary + '$' : 'nothing'}`);
  default:
    alert('Incorect input!');
}
alert(
  `You can be late ${
    numberOfLatenesses +
    (fineFrequency - (numberOfLatenesses % fineFrequency) - 1)
  } times`
);
