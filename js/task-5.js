function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const bodyColorEl = document.querySelector('body');
const textColorEl = document.querySelector('.color');

btnEl.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  bodyColorEl.style.backgroundColor = randomColor;
  textColorEl.textContent = randomColor;
});
