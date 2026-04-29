const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const parseData = JSON.parse(savedData);

  formData = parseData;

  form.nextElementSibling.email.value = parseData.email || '';
  form.nextElementSibling.message.value = parseData.message || '';
}

form.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('sumbit', event => {
  event.preventDefault();

  const { email, message } = formData;

  if (email === '' || message === '') {
    alert('Fill please all fiels');
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.requestFullscreen();
  formData = { email: '', message: '' };
});
