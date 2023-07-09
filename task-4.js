function validateCardNumber(cardNumber) {
  return /\s*\d{4}-\d{4}-\d{4}-\d{4}\s*/.test(cardNumber);
}

console.log(validateCardNumber(' 9999-9999-9999-9999  '));
console.log(validateCardNumber('999-9999-9999-9999'));
console.log(validateCardNumber('999-9999-9999-99U9'));
console.log(validateCardNumber('999-9999- 9999-99U9'));
