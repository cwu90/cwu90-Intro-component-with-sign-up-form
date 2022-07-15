'strict';

const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
// const allInputControl = document.querySelectorAll('inputcontrol');

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement; //This select the area outside of the input field
  const errorDisplay = inputControl.querySelector('.error'); //This select the error div
  const errorIcon = inputControl.querySelector('.error-icon');

  errorDisplay.innerText = message; //this is the text within the error div
  inputControl.classList.add('error');
  errorIcon.classList.add('icon');
};

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  const errorIcon = inputControl.querySelector('.error-icon');

  errorDisplay.innerText = '';
  inputControl.classList.remove('error');
  errorIcon.classList.remove('icon');
  inputControl.classList.add('success');
};

const signUpComplete = () => {
  alert('Thank you');
};

const isValidEmail = email => {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstnameValue === '') {
    setError(firstname, 'First name is required');
  } else {
    setSuccess(firstname);
  }
  if (lastnameValue === '') {
    setError(lastname, 'Last name is required');
  } else {
    setSuccess(lastname);
  }
  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Looks like this is not an email');
  } else {
    setSuccess(email);
  }
  if (passwordValue === '') {
    setError(password, 'Password cannot be empty');
  } else if (passwordValue.length < 8) {
    setError(password, 'Password must be more than 8 words');
  } else {
    setSuccess(password);
  }
};
