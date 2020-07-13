/* eslint-disable no-plusplus */
// <div id="box"></div>
const box = document.getElementById('box');

// <button></button>
const btns = document.getElementsByTagName('button');
console.log(btns[1]);

// <div class="circles"></div>
const circles = document.getElementsByClassName('circle');
console.log(circles);

// select all times with any described selector bellow
// class="heart", id=heart etc
const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
  console.log(item);
});

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: green; width: 450px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';
circles[1].style.backgroundColor = 'yellow';
circles[2].style.backgroundColor = 'green';

for (let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = 'gray';
}

hearts.forEach(item => {
  item.style.backgroundColor = 'darkgray';
});

const div = document.createElement('div');
div.classList.add('black');
// document.body.append(div);
const wrapper = document.querySelector('.wrapper');
// wrapper.append(div); // adding element into end
// wrapper.prepend(div); // adding element into start
// hearts[1].before(div);
hearts[1].after(div);

circles[0].remove();
