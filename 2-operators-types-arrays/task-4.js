// Task 4
const sideOneOfTriangle = Number(prompt('Enter the length of the first side'));
const sideTwoOfTriangle = Number(prompt('Enter the length of the second side'));
const sideThreeOfTriangle = Number(
  prompt('Enter the length of the third side')
);
let resultMessage = '';

if (
  Number.isNaN(sideOneOfTriangle) ||
  Number.isNaN(sideTwoOfTriangle) ||
  Number.isNaN(sideThreeOfTriangle)
) {
  resultMessage += 'Incorrect data';
} else {
  const semiperimeterOfTriangle =
    (sideOneOfTriangle + sideTwoOfTriangle + sideThreeOfTriangle) / 2;
  const areaOfTriangle = Math.pow(
    semiperimeterOfTriangle *
      (semiperimeterOfTriangle - sideOneOfTriangle) *
      (semiperimeterOfTriangle - sideTwoOfTriangle) *
      (semiperimeterOfTriangle - sideThreeOfTriangle),
    1 / 2
  );
  const isRightAngledTriangle =
    sideOneOfTriangle * sideOneOfTriangle +
      sideTwoOfTriangle * sideTwoOfTriangle ===
      sideThreeOfTriangle * sideThreeOfTriangle ||
    sideOneOfTriangle * sideOneOfTriangle +
      sideThreeOfTriangle * sideThreeOfTriangle ===
      sideTwoOfTriangle * sideTwoOfTriangle ||
    sideTwoOfTriangle * sideTwoOfTriangle +
      sideThreeOfTriangle * sideThreeOfTriangle ===
      sideOneOfTriangle * sideOneOfTriangle;
  resultMessage += `The area of triangle is: ${areaOfTriangle.toFixed(3)}.
  It is ${isRightAngledTriangle ? '' : 'not'} a right-angled triangle`;
}

console.log(resultMessage);