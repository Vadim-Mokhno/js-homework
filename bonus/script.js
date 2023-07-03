const timeSetterElement = document.querySelector('.form__set-time');
const dateSetterElement = document.querySelector('.form__set-date');
const formBtnElement = document.querySelector('.form__btn');
const timeDisplayElement = document.querySelector('.clock-display__time');
const leapSecondDisplayElement = document.querySelector(
  '.clock-display__leap-second'
);
const dayOfMonthDisplayElement = document.querySelector(
  '.clock-display__day-month'
);
const namesOfMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
let currentDate = new Date();
let clockDisplayUpdateTimer = null;

// Set current date and time as date and time values in form controls
timeSetterElement.value = `${String(currentDate.getHours()).padStart(
  2,
  0
)}:${String(currentDate.getMinutes()).padStart(2, 0)}:${String(
  currentDate.getSeconds()
).padStart(2, 0)}`;
dateSetterElement.value = `${currentDate.getFullYear()}-${String(
  currentDate.getMonth() + 1
).padStart(2, 0)}-${String(currentDate.getDate()).padStart(2, 0)}`;

displayDayOfMonth();
displayTime();

// Set user date
formBtnElement.addEventListener('click', function (e) {
  e.preventDefault();

  currentDate = new Date(
    parseInt(dateSetterElement.value),
    parseInt(
      dateSetterElement.value.slice(dateSetterElement.value.indexOf('-') + 1)
    ) - 1,
    parseInt(
      dateSetterElement.value.slice(
        dateSetterElement.value.lastIndexOf('-') + 1
      )
    ),
    parseInt(timeSetterElement.value),
    parseInt(
      timeSetterElement.value.slice(timeSetterElement.value.indexOf(':') + 1)
    ),
    parseInt(
      timeSetterElement.value.slice(
        timeSetterElement.value.lastIndexOf(':') + 1
      )
    )
  );

  setClockDisplayUpdateTimer();
});

function displayTime() {
  timeDisplayElement.textContent = `${String(currentDate.getHours()).padStart(
    2,
    0
  )}:${String(currentDate.getMinutes()).padStart(2, 0)}:${String(
    currentDate.getSeconds()
  ).padStart(2, 0)}`;
}

function displayDayOfMonth() {
  dayOfMonthDisplayElement.textContent = `${
    namesOfMonths[currentDate.getMonth()]
  } ${currentDate.getDate()}`;
}

function updateClockDisplay() {
  displayDayOfMonth();

  if (
    currentDate.getHours() === 0 &&
    currentDate.getMinutes() === 0 &&
    currentDate.getSeconds() === 0 &&
    !isLeapSecondDisplayed()
  ) {
    displayLeapSecond();
  } else {
    hideLeapSecond();
    displayTime();
    updateCurrentDate();
  }
}

function updateCurrentDate() {
  currentDate.setTime(currentDate.getTime() + 1000);
}

function displayLeapSecond() {
  timeDisplayElement.textContent = '23:59:60';
  leapSecondDisplayElement.style.display = 'block';
}

function hideLeapSecond() {
  leapSecondDisplayElement.style.display = 'none';
}

function setClockDisplayUpdateTimer() {
  clearInterval(clockDisplayUpdateTimer);
  clockDisplayUpdateTimer = setInterval(updateClockDisplay, 1000);
}

function isLeapSecondDisplayed() {
  return leapSecondDisplayElement.style.display === 'block' ? true : false;
}
