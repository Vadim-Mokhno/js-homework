function checkEmail(inputString) {
  if (/^\s*\w+@\w+[\.]\w+\s*$/.test(inputString)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkEmail('  Qmail2@gmail.com  '));
console.log(checkEmail('Qma il2@gmail.com'));
console.log(checkEmail('Qmail2@gma il.com'));
console.log(checkEmail('Qmail2@gmail.c om'));
console.log(checkEmail('Qmail2@gmailcom'));
