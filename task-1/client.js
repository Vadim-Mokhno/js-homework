const voteBtnElement = document.querySelector('.vote-btn');

voteBtnElement.addEventListener('click', async () => {
  const response = await fetch('http://127.0.0.1:5000/');
  const data = await response.json();
  const currentTime = new Date(JSON.parse(data));
  voteBtnElement.textContent =
    'Your vote is accepted: ' +
    currentTime.toString().slice(0, currentTime.toString().indexOf('(')) +
    '(GMT' +
    (currentTime.getTimezoneOffset() < 0 ? '+' : '-') +
    (Math.abs(currentTime.getTimezoneOffset()) / 60 > 10
      ? Math.abs(currentTime.getTimezoneOffset()) / 60
      : '0' + Math.abs(currentTime.getTimezoneOffset() / 60) + ':00)');
});
