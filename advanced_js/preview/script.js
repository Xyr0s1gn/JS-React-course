const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
  checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
  localStorage.setItem('isChecked', true);
});

if (localStorage.getItem('bg') === 'changed') {
  form.style.backgroundColor = 'yellow';
}

change.addEventListener('click', () => {
  if (localStorage.getItem('bg') === 'changed') {
    localStorage.removeItem('bg');
    form.style.backgroundColor = 'white';
  } else {
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = 'yellow';
  }
});

const persone = {
  name: 'Alex',
  age: 25,
};

// const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', persone);

console.log(localStorage.getItem('alex'));
