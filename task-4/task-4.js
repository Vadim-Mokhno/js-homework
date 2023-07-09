const deleteNamesListItemButton = document.querySelector(
  '.delete-names-list-item-btn'
);
const namesListElement = document.getElementById('names-list');
const deleteNamesListItem = function (index) {
  namesListElement.remove(index);
};

deleteNamesListItemButton.onclick = event => {
  event.preventDefault();

  for (const [index, item] of Array.from(namesListElement.children).entries()) {
    if (item.selected) {
      deleteNamesListItem(index);
      break;
    }
  }
};
