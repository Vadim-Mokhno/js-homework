const priceElement = document.getElementById('outprice');
const colorElements = document.querySelectorAll('.color');
const shoeSizeElements = document.querySelectorAll('.shoe-size');
const materialElements = document.querySelectorAll('.material');

init();

addEventListenerToElements(colorElements);
addEventListenerToElements(shoeSizeElements);
addEventListenerToElements(materialElements);

function calculateShoePrice() {
  let elements = getElements(this);
  removeClassActive(elements);
  this.classList.add('active');
  priceElement.textContent = (
    parseFloat(getActiveElement(colorElements).getAttribute('data-price')) *
    parseFloat(getActiveElement(shoeSizeElements).getAttribute('data-price')) *
    parseFloat(getActiveElement(materialElements).getAttribute('data-price'))
  ).toFixed(2);
}

function removeClassActive(elements) {
  for (const element of elements) {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
      break;
    }
  }
}

function getActiveElement(elements) {
  for (const element of elements) {
    if (element.classList.contains('active')) {
      return element;
    }
  }
}

function getElements(element) {
  if (element.classList.contains('color')) {
    return colorElements;
  }

  if (element.classList.contains('shoe-size')) {
    return shoeSizeElements;
  }

  if (element.classList.contains('material')) {
    return materialElements;
  }

  return null;
}

function addEventListenerToElements(elements) {
  for (const element of elements) {
    element.addEventListener('click', calculateShoePrice);
  }
}

function init() {
  calculateShoePrice.call(colorElements[0]);
}
