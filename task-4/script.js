document.querySelector('.btn').addEventListener('click', function () {
  const inputValueElements = Array.from(document.querySelectorAll('.arr'));
  const outDivElement = document.querySelector('.out');
  const outputValueElement = document.createElement('p');
  outDivElement.append(outputValueElement);

  for (const inputValueElement of inputValueElements) {
    outputValueElement.innerHTML += inputValueElement.value;
    outputValueElement.innerHTML +=
      inputValueElement !== inputValueElements.at(-1) ? '<br>' : '';
  }
});
