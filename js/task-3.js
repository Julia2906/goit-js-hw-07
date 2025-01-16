const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const nameInputValue = nameInput.value.trim();
  if (nameInputValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = nameInputValue;
  }
});
