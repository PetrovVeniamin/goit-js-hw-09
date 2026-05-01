const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  try {
    const parseData = JSON.parse(savedData);

    formData = parseData;
  } catch (e) {
    console.error('Invalid JSON');
  }

  form.elements.email.value = parseData.email || '';
  form.elements.message.value = parseData.message || '';
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
    return;
  }

  console.log(formData);

  form.reset();

  localStorage.removeItem(STORAGE_KEY);

  formData = { email: '', message: '' };
});
