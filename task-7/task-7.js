const countriesElement = document.getElementById('country');
const citiesElement = document.getElementById('cities');
const selectionDisplayElement = document.querySelector('.selection-display');
const cities = {
  ger: ['Berlin', 'Hamburg', 'Munich', 'Frankfurt', 'Dortmund '],
  usa: ['New York', 'Boston', 'Chicago', 'Houston', 'Denver'],
  ukr: ['Kyiv', 'Kharkiv', 'Odesa', 'Dnipro', 'Lviv'],
};

function createOptionsForCitiesSelection() {
  for (const city of cities[countriesElement.selectedOptions[0].value]) {
    const cityElement = document.createElement('option');
    cityElement.textContent = city;
    citiesElement.append(cityElement);
  }
}

function removeOptionsFromCitiesSelection() {
  while (citiesElement.firstChild) {
    citiesElement.removeChild(citiesElement.firstChild);
  }
}

function displaySelectedOptions() {
  selectionDisplayElement.textContent =
    countriesElement.selectedOptions[0].textContent +
    ', ' +
    citiesElement.selectedOptions[0].textContent;
}

countriesElement.addEventListener('change', removeOptionsFromCitiesSelection);
countriesElement.addEventListener('change', createOptionsForCitiesSelection);
countriesElement.addEventListener('change', displaySelectedOptions);
citiesElement.addEventListener('change', displaySelectedOptions);
window.onload = () => {
  countriesElement.options[1].selected = 'selected';
  createOptionsForCitiesSelection();
  displaySelectedOptions();
};
