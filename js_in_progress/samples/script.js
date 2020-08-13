// const btns = document.querySelectorAll('button');
// const wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[2].classList.add('red'));
// console.log(btns[0].classList.remove('some'));

// btns[0].addEventListener('click', () => {
//   if (!btns[1].classList.contains('red')) {
//     btns[1].classList.add('red');
//   } else {
//     btns[1].classList.remove('red');
//   }
//   btns[4].classList.toggle('red');
//   btns[5].classList.toggle('red');
// });

// wrapper.addEventListener('click', event => {
//   if (event.target && event.target.matches('button.red')) {
//     console.log('hello');
//   }
// });

// THIS WILL NOT WORK
// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     console.log('another');
//   });
// });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);

// function logger() {
//   console.log('text');
// }

// const timerId = setTimeout(logger, 2000);

// clearInterval(timerId);

console.log('Requesting data...');

const req = new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log('Data almost ready...');

    const product = {
      name: 'TV',
      price: 5000,
    };

    resolve(product);
  }, 2000);
});

req.then(() => {
  // console.log('Data received...');
  setTimeout(() => {
    product.status = 'order';
    console.log(product);
  }, 2000);
});
