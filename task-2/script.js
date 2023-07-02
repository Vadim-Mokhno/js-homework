const headerLevelOneElement = document.querySelector('h1');
headerLevelOneElement.style.backgroundColor = 'rgb(0, 240, 130)';

const myDivElements = document.getElementById('myDiv').children;
myDivElements[0].style.fontWeight = 'bold';
myDivElements[1].style.color = 'rgb(255, 0, 0)';
myDivElements[2].style.textDecoration = 'underline';
myDivElements[3].style.fontStyle = 'italic';

const myListElement = document.getElementById('myList');

myListElement.style.display = 'flex';
myListElement.style.listStyle = 'none';

const spanElements = document.getElementsByTagName('span');
spanElements[0].style.visibility = 'hidden';
