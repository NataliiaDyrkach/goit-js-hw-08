import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const STOREGE_KEY = 'feedback-form-state';
let formData = {
  email: email.value,
  message: message.value,
};

populateInput();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

function onTextareaInput() {
  formData[email.name] = email.value;
  formData[message.name] = message.value;

  localStorage.setItem(STOREGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(`email: "${email.value}", message: "${message.value}"`);
  e.target.reset();
  localStorage.removeItem(STOREGE_KEY);
}

function populateInput() {
  const savedData = JSON.parse(localStorage.getItem(STOREGE_KEY));

  if (savedData) {
    email.value = savedData.email;
    message.value = savedData.message;
  }
}
