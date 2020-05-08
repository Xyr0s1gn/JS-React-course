let box = document.getElementById('box'),
  btn = document.getElementsByTagName('button'),
  circle = document.getElementsByClassName('circle'),
  heart = document.querySelectorAll('.heart'),
  oneHeart = document.querySelector('.heart'),
  wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = '#FF9400';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//   heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function (item, i, hearts) {
//   item.style.backgroundColor = 'blue';
// });

let div = document.createElement('div'),
  text = document.createTextNode('Lili was here');
div.classList.add('black');

// div.innerHTML = '<h1>Hello, World!</h1>';

div.textContent = 'Hello, World!';

// document.body.appendChild(div);
// wrapper.appendChild(div);
document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);
// console.log(div);
document.body.replaceChild(btn[1], circle[1]);
