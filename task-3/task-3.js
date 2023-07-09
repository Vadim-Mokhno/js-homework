const elements = document.querySelector('div').children;
let isThirdButtonClicked = false;
let isMouseButtonPressed = false;

elements[0].onclick = function () {
  this.parentElement.style.backgroundColor = '#0000ff';
};

elements[1].ondblclick = function () {
  this.parentElement.style.backgroundColor = '#ff44ff';
};

elements[2].onmousedown = function () {
  this.parentElement.style.backgroundColor = '#964B00';
  isThirdButtonClicked = true;
  isMouseButtonPressed = true;
};

elements[2].onmouseup = function () {
  this.parentElement.style.backgroundColor = '#fff';
  isThirdButtonClicked = false;
  isMouseButtonPressed = false;
};

elements[2].onmouseleave = function () {
  if (isThirdButtonClicked) {
    this.parentElement.style.backgroundColor = '#fff';
  }
};

elements[2].onmouseenter = function () {
  if (isMouseButtonPressed) {
    this.parentElement.style.backgroundColor = '#964B00';
  }
};

elements[3].onmouseenter = function () {
  this.parentElement.style.backgroundColor = '#ffff00';
};

elements[3].onmouseleave = function () {
  this.parentElement.style.backgroundColor = '#fff';
};

document.onmouseup = function () {
  isMouseButtonPressed = false;
  isThirdButtonClicked = false;
};
