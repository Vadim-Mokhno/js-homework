const fsPromises = require('fs').promises;

const greetUser = function (userName) {
  const currentTime = new Date();
  let greeting =
    '<div>Date of request: ' +
    currentTime.toString().slice(0, currentTime.toString().indexOf('(')) +
    '(GMT' +
    (currentTime.getTimezoneOffset() < 0 ? '+' : '-') +
    (Math.abs(currentTime.getTimezoneOffset()) / 60 > 10
      ? Math.abs(currentTime.getTimezoneOffset()) / 60
      : '0' + Math.abs(currentTime.getTimezoneOffset() / 60) + ':00)') +
    '</div><div>Good ';
  const currentHour = currentTime.getHours();
  greeting +=
    currentHour >= 5 && currentHour < 11
      ? 'morning'
      : currentHour >= 11 && currentHour < 19
      ? 'day'
      : currentHour >= 19 && currentHour < 23
      ? 'evening'
      : 'night';
  console.log(
    currentTime.toString().slice(0, currentTime.toString().indexOf('('))
  );
  return (greeting += `, ${userName}</div>`);
};

const writeToTextFile = async function (path, input) {
  await fsPromises.writeFile(path, input, err => {
    if (err) {
      throw err;
    }
  });
};

const readFromTextFile = async function (path) {
  return await fsPromises.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
  });
};

module.exports = { greetUser, writeToTextFile, readFromTextFile };
