const body = document.body;
const button = document.querySelector('button');
console.log(button);

const generateRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

button.addEventListener('click', () => {
  console.log('selam');
  body.style.background = generateRGB();
});