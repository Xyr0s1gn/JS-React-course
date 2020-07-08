'use strict';
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
hearts.forEach((item) => {
  console.log(item);
});

box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';
