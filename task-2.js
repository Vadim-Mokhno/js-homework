const calcArrProduct = function (arr) {
  return new Promise((resolve, reject) => {
    if (arr.filter(el => typeof el === 'number').length === arr.length) {
      resolve(arr.reduce((product, el) => product * el, 1));
    } else {
      resolve('Error! Incorrect array!');
    }
  });
};

calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
calcArrProduct([5, 'user2', 7, 12]).then(result => console.log(result)); // "Error! Incorrect array!"
