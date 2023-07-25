const delayLimit = 3000;
const delay = (i, time) =>
  new Promise(resolve => setTimeout(() => resolve(i), time));

// Async/await version
async function showNumbersAs() {
  for (let i = 0; i < 10; i++) {
    console.log(await delay(i, Math.floor(Math.random() * (delayLimit + 1))));
  }
}

// Pomises version
function showNumbersPr() {
  let promiseDelay = 0;
  let time;
  for (let i = 0; i < 10; i++) {
    time = Math.floor(Math.random() * (delayLimit + 1));
    setTimeout(
      () => delay(i, time).then(res => console.log(res)),
      promiseDelay
    );
    promiseDelay += time;
  }
}

showNumbersAs();
// showNumbersPr();
