const circleElements = document.querySelectorAll('.circle');

for (const circleElement of circleElements) {
  circleElement.classList.add(circleElement.getAttribute('data-anim'));
}
