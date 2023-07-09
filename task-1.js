function unicodeUpperCase(inputString) {
  return `String's${
    /^\s*\p{Lowercase_Letter}/u.test(inputString) ? ' not ' : ' '
  }starts with uppercase character`;
}

function asciiUpperCase(inputString) {
  return `String's${
    /^\s*[a-z]/.test(inputString) ? ' not ' : ' '
  }starts with uppercase character`;
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
