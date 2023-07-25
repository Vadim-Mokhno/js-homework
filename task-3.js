new Promise(function (resolve, reject) {
  const userInput = Number(prompt('Enter a number:'));
  Number.isNaN(userInput) ? reject(NaN) : resolve(userInput);
})
  .catch(function (error) {
    return new Promise(function (resolve, reject) {
      let userInput;
      if (Number.isNaN(error)) {
        while (Number.isNaN((userInput = Number(prompt('Enter a number:')))));
      } else {
        userInput = error;
      }
      resolve(userInput);
    });
  })
  .then(function (result) {
    console.log(result);
  });
