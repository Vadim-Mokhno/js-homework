const personageImageElement = document.querySelector('.personage-image');
const leftArrowElement = document.querySelector('.left-arrow');
const rightArrowElement = document.querySelector('.right-arrow');
const startBtnElement = document.querySelector('.start-btn');
const resetBtnElement = document.querySelector('.reset-btn');
const personageElement = document.querySelector('.personage');
const gameboardElement = document.querySelector('.gameboard');
const speedListElements = document.querySelectorAll(
  'input[name = "speed-list"]'
);
const personageElementWidth = personageElement.getBoundingClientRect().width;
const personageElementHeight = personageElement.getBoundingClientRect().height;
let positionIncrement;

init();

function defineColumnAndRowNumbers(element) {
  let columnNumber, rowNumber;

  for (const className of element.classList) {
    if (className.slice(0, 6) === 'column') {
      columnNumber = Number(className.split('-')[1]);
    }

    if (className.slice(0, 3) === 'row') {
      rowNumber = Number(className.split('-')[1]);
    }
  }

  return [rowNumber, columnNumber];
}

resetBtnElement.addEventListener('click', function () {
  init();

  startBtnElement.disabled = false;
  startBtnElement.classList.remove('start-btn-disabled');

  window.removeEventListener('keydown', navigationKeysHandler);

  for (const speedListElement of speedListElements) {
    if (speedListElement.checked) {
      positionIncrement = Number(speedListElement.value);
    }

    speedListElement.disabled = false;
  }

  let [rowNumber, columnNumber] = defineColumnAndRowNumbers(
    personageImageElement
  );
  personageImageElement.classList.remove('row-' + rowNumber);
  personageImageElement.classList.remove('column-' + columnNumber);
  personageElement.classList.remove('row-' + rowNumber);
  personageElement.classList.remove('column-' + columnNumber);
  personageImageElement.classList.add('row-1');
  personageImageElement.classList.add('column-1');
  personageElement.classList.add('row-1');
  personageElement.classList.add('column-1');

  speedListElements[0].checked = true;
});

startBtnElement.addEventListener('click', function () {
  let [rowNumber, columnNumber] = defineColumnAndRowNumbers(personageElement);
  personageElement.classList.remove('row-' + rowNumber);
  personageElement.classList.remove('column-' + columnNumber);

  [rowNumber, columnNumber] = defineColumnAndRowNumbers(personageImageElement);
  personageElement.classList.add('row-' + rowNumber);
  personageElement.classList.add('column-' + columnNumber);

  for (const speedListElement of speedListElements) {
    if (speedListElement.checked) {
      positionIncrement = Number(speedListElement.value);
    }

    speedListElement.disabled = true;
  }

  window.addEventListener('keydown', navigationKeysHandler);

  leftArrowElement.removeEventListener('click', leftArrowElementOnClickHandler);
  rightArrowElement.removeEventListener(
    'click',
    rightArrowElementOnClickHandler
  );

  this.disabled = true;
  this.classList.add('start-btn-disabled');
});

function leftArrowElementOnClickHandler() {
  let [rowNumber, columnNumber] = defineColumnAndRowNumbers(
    personageImageElement
  );

  personageImageElement.classList.remove('row-' + rowNumber);
  personageImageElement.classList.remove('column-' + columnNumber);

  if (columnNumber > 1) {
    columnNumber--;
  } else if (rowNumber > 1) {
    rowNumber--;
    columnNumber = 5;
  } else {
    rowNumber = 1;
    columnNumber = 1;
  }

  personageImageElement.classList.add('row-' + rowNumber);
  personageImageElement.classList.add('column-' + columnNumber);
}

function rightArrowElementOnClickHandler() {
  let [rowNumber, columnNumber] = defineColumnAndRowNumbers(
    personageImageElement
  );

  personageImageElement.classList.remove('row-' + rowNumber);
  personageImageElement.classList.remove('column-' + columnNumber);

  if (columnNumber < 5) {
    columnNumber++;
  } else if (rowNumber < 3) {
    rowNumber++;
    columnNumber = 1;
  } else {
    rowNumber = 3;
    columnNumber = 5;
  }

  personageImageElement.classList.add('row-' + rowNumber);
  personageImageElement.classList.add('column-' + columnNumber);
}

function navigationKeysHandler(event) {
  const gameboardWidth = gameboardElement.getBoundingClientRect().width - 10;
  const gameboardHeight = gameboardElement.getBoundingClientRect().height - 10;

  if (event.key === 'ArrowLeft') {
    personageElement.style.right =
      parseFloat(personageElement.style.right) +
        positionIncrement +
        personageElementWidth <=
      gameboardWidth
        ? parseFloat(personageElement.style.right) + positionIncrement + 'px'
        : gameboardWidth - personageElementWidth + 'px';
  }

  if (event.key === 'ArrowRight') {
    personageElement.style.right =
      parseFloat(personageElement.style.right) - positionIncrement >= 0
        ? parseFloat(personageElement.style.right) - positionIncrement + 'px'
        : 0;
  }

  if (event.key === 'ArrowUp') {
    personageElement.style.bottom =
      parseFloat(personageElement.style.bottom) +
        positionIncrement +
        personageElementHeight <=
      gameboardHeight
        ? parseFloat(personageElement.style.bottom) + positionIncrement + 'px'
        : gameboardHeight - personageElementHeight + 'px';
  }

  if (event.key === 'ArrowDown') {
    personageElement.style.bottom =
      parseFloat(personageElement.style.bottom) - positionIncrement >= 0
        ? parseFloat(personageElement.style.bottom) - positionIncrement + 'px'
        : 0;
  }
}

function init() {
  personageElement.style.right = 0;
  personageElement.style.bottom = 0;

  rightArrowElement.addEventListener('click', rightArrowElementOnClickHandler);
  leftArrowElement.addEventListener('click', leftArrowElementOnClickHandler);
}
