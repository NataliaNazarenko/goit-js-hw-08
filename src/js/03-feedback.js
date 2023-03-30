import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('[name="email"]');
const textarea = document.querySelector('[name="message"]');
const FEEDBACK_FORM = 'feedback-form-state';

form.addEventListener('input', throttle(onGetDataFrom, 1000));
form.addEventListener('submit', onClickBtn);

addLocal();
const dataFrom = {};

function onGetDataFrom(event) {
  dataFrom[event.target.name] = event.target.value;

  saveLocal(FEEDBACK_FORM, dataFrom);
}

function saveLocal(key, value) {
  try {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  } catch (err) {
    console.log('Stringify error');
  }
}

function loadLocal(key) {
  try {
    const data = localStorage.getItem(key);
    return data === null ? undefined : JSON.parse(data);
  } catch (err) {
    console.log('Stringify error');
  }
}
function addLocal(event) {
  const currentData = loadLocal(FEEDBACK_FORM);

  if (currentData) {
    input.value = currentData.email;
    textarea.value = currentData.message;
  }
}

function onClickBtn(event) {
  event.preventDefault();
  console.log(loadLocal(FEEDBACK_FORM));
  event.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM);
}
