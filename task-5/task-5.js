const liveButton = document.querySelector('.live-btn');
const messageDisplay = document.querySelector('.message-display');
const liveButtonEventHandler = function (event) {
  messageDisplay.innerHTML += `<p>${messages[event.type]}</p>`;
};
const messages = {
  click: 'I was pressed',
  mouseenter: 'Mouse on me!',
  mouseleave: 'Mouse is not on me!',
};

liveButton.onclick =
  liveButton.onmouseenter =
  liveButton.onmouseleave =
    liveButtonEventHandler;
