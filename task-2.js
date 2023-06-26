const checkAge = function () {
  try {
    let userInput = prompt('Enter you name:');

    if (userInput === '' || userInput === null) {
      throw new Error('The field is empty! Please enter your name');
    }

    const userName = userInput;

    userInput = prompt('Enter you age:');

    if (userInput === '' || userInput === null) {
      throw new Error('The field is empty! Please enter your age');
    }

    const userAge = Number(userInput);

    if (Number.isNaN(userAge)) {
      throw new TypeError('The value of age must be a number');
    }

    if (userAge < 18 || userAge > 70) {
      throw new RangeError('You must be older/younger to watch this movie');
    }

    userInput = prompt('Enter you status("admin", "moderator", "user"):');

    if (userInput === '' || userInput === null) {
      throw new Error('The field is empty! Please enter your status');
    }

    if (
      userInput !== 'admin' &&
      userInput !== 'moderator' &&
      userInput !== 'user'
    ) {
      throw new EvalError('There is no such a status');
    }

    const userStatus = userInput;

    alert(
      `${userName} (${userAge} years old), with the status of ${userStatus}! You are allowed to watch this movie!`
    );
  } catch (e) {
    alert(e.name + ': ' + e.message);
  }
};

checkAge();
