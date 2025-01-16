const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const emailValue = formEl.elements.email.value.trim();
  const passwordValue = formEl.elements.password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    [formEl.elements.email.name]: emailValue,
    [formEl.elements.password.name]: passwordValue,
  };
  console.log(formData);

  formEl.reset();
});
