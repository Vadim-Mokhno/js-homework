const fullNameElement = document.getElementById('fullName');
const emailElement = document.getElementById('email');
const phoneElement = document.getElementById('phone');
const passwordElement = document.getElementById('password');
const confirmPasswordElement = document.getElementById('confirmPassword');
const btnElement = document.getElementById('createAccount');
const checkboxElement = document.getElementById('flexCheckDefault');
const fullNameExampleElement = document.querySelector('.full-name-example');
const emailExampleElement = document.querySelector('.email-example');
const phoneExampleElement = document.querySelector('.phone-example');

fullNameElement.addEventListener('input', function () {
  if (
    !/^\s*[A-Z][a-z]*[ ]+[A-Z][a-z]*\s*$/.test(fullNameElement.value) &&
    fullNameElement.value.length
  ) {
    fullNameElement.classList.add('invalid-input');
    fullNameExampleElement.classList.add('show-example');
  } else {
    fullNameElement.classList.remove('invalid-input');
    fullNameExampleElement.classList.remove('show-example');
  }
});

emailElement.addEventListener('input', function () {
  if (
    !/^\s*[\w]+[\w\.-]*@[a-zA-Z]+\.[a-zA-Z]+\s*$/.test(emailElement.value) &&
    emailElement.value.length
  ) {
    emailElement.classList.add('invalid-input');
    emailExampleElement.classList.add('show-example');
  } else {
    emailElement.classList.remove('invalid-input');
    emailExampleElement.classList.remove('show-example');
  }
});

phoneElement.addEventListener('input', function () {
  if (
    !/^\s*\+\d{2}-\d{3}-\d{3}-\d{2}-\d{2}\s*$/.test(phoneElement.value) &&
    phoneElement.value.length
  ) {
    phoneElement.classList.add('invalid-input');
    phoneExampleElement.classList.add('show-example');
  } else {
    phoneElement.classList.remove('invalid-input');
    phoneExampleElement.classList.remove('show-example');
  }
});

btnElement.addEventListener('click', function (event) {
  event.preventDefault();

  if (
    fullNameElement.value.length === 0 ||
    emailElement.value.length === 0 ||
    phoneElement.value.length === 0 ||
    passwordElement.value.length === 0 ||
    confirmPasswordElement.value.length === 0
  ) {
    alert('You must fill all the fields in the form!');
    return;
  }

  if (fullNameElement.classList.contains('invalid-input')) {
    alert('Fill "Full Name" field correctly!');
    return;
  }

  if (emailElement.classList.contains('invalid-input')) {
    alert('Fill "Email address" field correctly!');
    return;
  }

  if (phoneElement.classList.contains('invalid-input')) {
    alert('Fill "Phone" field correctly!');
    return;
  }

  if (passwordElement.value !== confirmPasswordElement.value) {
    alert('Passwords must match!');
    return;
  }

  if (!checkboxElement.checked) {
    alert('You must agree to the terms and conditions!');
    return;
  }

  alert('Account has been created!');
});
