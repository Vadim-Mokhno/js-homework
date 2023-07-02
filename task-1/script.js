const listElement = document.getElementById('list');
const listItemElements = listElement.children;

alert(listElement.firstElementChild.textContent);
alert(listElement.lastElementChild.textContent);
alert(listItemElements[1].textContent);
alert(listItemElements[3].textContent);
alert(listItemElements[2].textContent);
