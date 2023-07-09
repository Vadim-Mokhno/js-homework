function checkEmail(email) {
  return `Email is${
    /^\s*[A-Za-z0-9](\w|-(?!-))*@(\w|-(?!-))+[\.](\w|-(?!-))+\s*$/.test(email)
      ? ' '
      : ' not '
  }correct`;
}

console.log(checkEmail('my_mail@gmail.com'));
console.log(checkEmail('#my_mail@gmail.com'));
console.log(checkEmail('my_ma--il@gmail.com'));
