import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector("input[name='email']");
const textarea = document.querySelector('textarea');
form.addEventListener('input', throttle(onInputTextarea, 500));
form.addEventListener('submit', onTypSubmit);

localStorageChak();

const formData = {
  email: '',
  message: '',
};

function onInputTextarea(e) {
  console.log(e.target.value);
  ``;

  formData[e.target.name] = e.target.value;
  const formDataString = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', formDataString);
}

function onTypSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.clear();

  console.log(formData);
}

function localStorageChak() {
  const sevMassegr = localStorage.getItem('feedback-form-state');

  if (sevMassegr) {
    const parsMasseg = JSON.parse(sevMassegr);

    input.value = parsMasseg.email;
    textarea.value = parsMasseg.message;
  }
}
