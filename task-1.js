const getPromise = function (message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(message), delay);
  });
};

getPromise('test promise', 2000).then(function (data) {
  console.log(data);
});
