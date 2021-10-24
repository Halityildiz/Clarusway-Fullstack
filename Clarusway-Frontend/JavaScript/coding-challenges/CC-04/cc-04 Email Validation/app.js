const input = document.querySelector('input');
const button = document.querySelector('button');
const result = document.querySelector('.result');
button.addEventListener('click', () => {
  const email = input.value;
  if (!email.includes('@')) {
    result.textContent = `${email} is invalid`;
    return;
  }

  const extension = email.split('@')[1].split('.')[1];
  if (extension == undefined || extension.length == 0 || extension.length > 3) {
    result.textContent = `${email} is invalid`;
    return;
  }

  result.textContent = `${email} is valid`;
});