function unicodeUpperCase(inputString) {
  return `String${
    /^\s*\p{Lowercase_Letter}/u.test(inputString)
      ? ' does not start '
      : ' starts '
  }with uppercase character`;
}

function asciiUpperCase(inputString) {
  return `String${
    /^\s*[a-z]/.test(inputString) ? ' does not start ' : ' starts '
  }with uppercase character`;
}

console.log(asciiUpperCase('     regexp'));
console.log(asciiUpperCase('         RegExp'));

console.log(unicodeUpperCase('    Їжак'));
console.log(unicodeUpperCase('         їжак'));

console.log('--------------');

console.log(asciiUpperCase('regexp'));
console.log(asciiUpperCase('RegExp'));

console.log(unicodeUpperCase('Їжак'));
console.log(unicodeUpperCase('їжак'));
