function reverseSubstrings(inputString) {
  return inputString.replace(/\s*(\w+)\s*(\w+)\s*/g, '$2, $1 ');
}

console.log(reverseSubstrings('Java Script'));
console.log(reverseSubstrings(' Java    Script  Type Script'));
