function mul(...parameters) {
  let productOfNumberParameters = 0;

  for (const parameter of parameters) {
    if (typeof parameter === 'number') {
      productOfNumberParameters = productOfNumberParameters
        ? productOfNumberParameters * parameter
        : parameter;
    }
  }

  return productOfNumberParameters;
}
console.log(mul(1, 'str', 2, 3, true)); // 6
console.log(mul(null, 'str', false, true)); // 0
console.log(mul(null, 'str', false, 1, 1, true, 1, 0)); // 0
