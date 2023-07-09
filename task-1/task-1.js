const createWindowButton = document.querySelector('.create-window');

createWindowButton.addEventListener('click', function () {
  const popupWindow = window.open('', '', 'popup');
  const resizingTimeDelay = 2000;
  const movingTimeDelay = 4000;
  const closingTimeDelay = 6000;
  const initialWidth = 300;
  const initialHeight = 300;
  const newWidth = 500;
  const newHeight = 500;
  const newCoordinateX = 200;
  const newCoordinateY = 200;

  popupWindow.resizeTo(initialWidth, initialHeight);

  window.setTimeout(
    () => popupWindow.resizeTo(newWidth, newHeight),
    resizingTimeDelay
  );

  window.setTimeout(
    () => popupWindow.moveTo(newCoordinateX, newCoordinateY),
    movingTimeDelay
  );

  window.setTimeout(() => popupWindow.close(), closingTimeDelay);
});
