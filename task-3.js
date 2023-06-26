const calcRectangleArea = function (width, height) {
  if (
    typeof width !== 'number' ||
    typeof height !== 'number' ||
    Number.isNaN(width) ||
    Number.isNaN(height)
  ) {
    throw new TypeError(
      'arguments of function "calcRectangleArea" must be numbers'
    );
  }

  return width * height;
};

try {
  const width = 45;
  const height = 4;
  console.log(
    `The area of a rectangle with the width of ${width} and the height of ${height} is: ${calcRectangleArea(
      width,
      height
    )}`
  );
} catch (e) {
  console.error(e.name);
  console.error(e.message);
  console.error(e.stack);
}
