const btns = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');
const link = document.querySelector('a');

const deleteElement = e => {
  console.log(e.currentTarget);
  console.log(e.type);
};

btns.forEach(btn => {
  btn.addEventListener('click', deleteElement);
});

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

link.addEventListener('click', event => {
  event.preventDefault();
  console.log(event.target);
});
