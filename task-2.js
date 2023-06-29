const propsCount = function (currentObject) {
  let numberOfProperties = 0;

  for (const p in currentObject) {
    numberOfProperties++;
  }

  return numberOfProperties;
};

const propsCount2 = function (currentObject) {
  return Object.keys(currentObject).length;
};

let mentor = {
  course: 'JS fundamental',
  duration: 3,
  direction: 'web-development',
};

console.log(propsCount(mentor));
console.log(propsCount2(mentor));
