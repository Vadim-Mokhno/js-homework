const voteBtnElement = document.querySelector('.vote-btn');
const voteElement = document.querySelector('.vote');

voteBtnElement.addEventListener('click', async () => {
  const response = await fetch('http://127.0.0.1:5000/');
  const data = await response.json();
  voteElement.innerHTML = '<u>';
  data.forEach(
    book => (voteElement.innerHTML += '<li>' + book.author + '</li>')
  );
  voteElement.innerHTML += '</ul>';
});
// (voteElement.innerHTML += '<li>' + book.author + '</li>')
