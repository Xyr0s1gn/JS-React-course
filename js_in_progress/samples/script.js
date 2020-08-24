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

// console.log('Requesting data...');

// const req = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     console.log('Data almost ready...');

//     const product = {
//       name: 'TV',
//       price: 5000,
//     };

//     resolve(product);
//   }, 2000);
// });

// req.then(
//   product =>
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         product.status = 'order';
//         resolve(product);
//       }, 2000);
//     })
//       .then(data => {
//         data.modify = true;
//         return data;
//         // console.log(`Product Status: ${product.status}`);
//         // console.log(data);
//       })
//       .then(data => {
//         console.log(data);
//       })
//   // setTimeout(() => {
//   //   console.log('Data received.');
//   // }, 2000);
//   // setTimeout(() => {
//   //   console.log('Data display.');
//   // }, 2000);
// );

// const test = time =>
//   new Promise(resolve => {
//     setTimeout(() => resolve(), time);
//   });

// test(1000).then(() => console.log('1000 ms'));
// test(1000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
//   console.log('All');
// });

// Promise.race([test(1000), test(2000)]).then(() => {
//   console.log('All');
// });

// /////////// Massive sort methods

// const telescopeNames = [
//   'Celestron',
//   'Meade',
//   'Sky-Watcher',
//   'Takahashi',
//   'Coronado',
//   'Bresser',
//   'Orion',
// ];

// ///////// filter
// const shortNames = names.filter(function(name) {
//   return name.length < 8;
// });

// console.log(shortNames);

// ////////     map
// new array with case changed names
// const result = names.map(item => item.toLowerCase());

// console.log(result);

// ///////////// every/some
// every item in array is a (bool sort.method)
// console.log(telescopeNames.every(item => typeof item === 'number'));

// ///////////// reduce
// const arr = [4, 5, 1, 3, 2, 6, 3];
//              5   1
//              6   3
//              9   2

// const res = arr.reduce((sum, current) => sum + current, 4);
// console.log(res);
// //////////////

// const res = telescopeNames.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

// const obj = {
//   ivan: 'persone',
//   ann: 'persone',
//   dog: 'animal',
//   cat: 'animal',
// };

// const newArr = Object.entries(obj)
//   .filter(item => item[1] === 'persone')
//   .map(item => item[0]);

// console.log(newArr);
localStorage.setItem('number', 5);

localStorage.clear();
console.log(localStorage.getItem('number'));
localStorage.removeItem('number');
