function checkLogin(login) {
  console.log(findNumbersInLogin(login).join(', '));
  return /^\s*[A-Za-z](?!\.)([A-Za-z](?!\.)|([0-9]|\.(?=\d))){1,9}\s*$/.test(
    login
  );
}

function findNumbersInLogin(login) {
  const numbersInLogin = [];
  const pattern = /\d+(\.\d+)?/g;
  let match;

  while ((match = pattern.exec(login)) !== null) {
    numbersInLogin.push(match[0]);
  }

  return numbersInLogin;
}

console.log(checkLogin('ee1.1ret3'));
console.log(checkLogin('ee1*1ret3'));
console.log(checkLogin('efr5.554 5.6l6.7ll8.8ll;l99.7j5.7 6.2lgeg'));
console.log(checkLogin('efr5.5545.6l6.7ll8.8ll;l99.7j5.7 8.2lgeg66 5 '));
