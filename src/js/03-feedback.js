import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector("input[name='email']");
const textarea = document.querySelector('textarea');

const LOCALSTOREG_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInputTextarea, 500));
form.addEventListener('submit', onTypSubmit);

let formData = {};

localStorageChak();

function onInputTextarea(e) {
  e.preventDefault();
  formData[e.target.name] = e.target.value;

  const formDataString = JSON.stringify(formData);
  localStorage.setItem(LOCALSTOREG_KEY, formDataString);
}

function onTypSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.clear();

  console.log(formData);
}

// функцыя парса строки
function localStorageChak() {
  const sevMassegr = localStorage.getItem(LOCALSTOREG_KEY);
  const parsMasseg = JSON.parse(sevMassegr);

  if (parsMasseg) {
    input.value = parsMasseg.email || '';
    textarea.value = parsMasseg.message || '';
  }

  if (parsMasseg) {
    formData = parsMasseg;
  }
}
