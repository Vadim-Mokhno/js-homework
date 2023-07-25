const delayLimit = 3000;
const delay = (i, time) =>
  new Promise(resolve => setTimeout(() => resolve(i), time));

async function showNumbers() {
  for (let i = 0; i < 10; i++) {
    console.log(await delay(i, Math.floor(Math.random() * (delayLimit + 1))));
  }
}

showNumbers();
