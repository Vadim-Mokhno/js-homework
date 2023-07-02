const mainElement = document.createElement('main');
mainElement.classList.add('mainClass');
mainElement.classList.add('check');
mainElement.classList.add('item');
document.body.append(mainElement);

const myDivElement = document.createElement('div');
myDivElement.setAttribute('id', 'myDiv');
mainElement.append(myDivElement);

const paragraphElement = document.createElement('p');
paragraphElement.textContent = 'First paragraph';
myDivElement.append(paragraphElement);
