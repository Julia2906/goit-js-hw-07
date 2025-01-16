function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumberEl = document.querySelector('input');
const btnCreateEl = document.querySelector('.create-btn');
const btnDestroyEl = document.querySelector('.destroy-btn');
const boxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = '5px';
    elements.push(div);
    size += 10;
  }

  boxesEl.innerHTML = '';
  boxesEl.append(...elements);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

btnCreateEl.addEventListener('click', () => {
  const amount = Number(inputNumberEl.value.trim());

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNumberEl.value = '';
  } else {
    alert('Please enter a number between 1 and 100!');
  }
});

btnDestroyEl.addEventListener('click', () => {
  destroyBoxes();
});
