const changeStyleButton = document.querySelector('.change-style');
const textElement = document.getElementById('text');
const changeCSS = function () {
  textElement.style.color = 'orange';
  textElement.style.fonSize = '20px';
  textElement.style.fontFamily = 'Comic Sans MS';
};

changeStyleButton.onclick = changeCSS;

// p>: колір шрифту – оранжевий/ розмір шрифту 20px, шрифт сімейства "Comic Sans MS".
