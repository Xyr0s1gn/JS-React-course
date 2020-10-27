// const sampleObject = {
//   name: 'test',
//   width: 20,
//   height: 20,
//   radius: 20,
//   func: {
//     roll: true,
//     fall: true,
//     fly: true,
//     material: {
//       resin: true,
//       elastic: true,
//       transparent: false,
//     },
//   },
//   makeTest: function () {
//     console.log('test');
//   },
// };

//
// destructurization
// const { resin, elastic, transparent } = sampleObject.func.material;
// const { roll, fall, fly } = sampleObject.func;

// console.log(roll, fall, fly);
// console.log(resin, elastic, transparent);

// let counter = 0;
// for (let key in sample) {
//   if (typeof (sample[key] === 'object')) {
//     for (let i in sample[key]) {
//       console.log(`${i} -> ${sample[key][i]}`);
//       counter++;
//     }
//   }
//   console.log(`${key} -> ${sample[key]}`);
//   counter++;
// }
// console.log(counter);

// const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];
// remove last element
// arr.pop();
// add element to last position
// arr.push('lastElement');
// console.log(arr);

// arr.forEach(function (item, i, arr) {
//   console.log(`Index "${i}" = item "${item}" indside arr "${arr}"`);
// });

// const arr = [2, 41, 13, 4, 56, 11];

// function compareNum(a, b) {
//   return a - b;
// }

// arr.sort(compareNum);
// console.log(arr);

// Clone object
// const nums = {
//   x: 10,
//   y: 20,
// };

// const clone = Object.assign({}, nums);
// clone.x = 35;
// console.log(nums);
// console.log(clone);

// const arr = ['1', '2', '3', '4', '5'];

// const newArr = arr.slice();

// newArr[1] = 'text';

// console.log(arr);
// console.log(newArr);

// SPREAD operator
// const video = ['oneVideo', 'cloneVideo', 'wasteTime'],
//   blogs = ['manyWord', 'askTime', 'sciPen'],
//   mixedArray = [...video, ...blogs, 'search', 'gameHub'];
// console.log(mixedArray);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// const num = [11, 22, 42, 33];

// log(...num);

// const soldier = {
//   health: 400,
//   armor: 100,
// };
// Object.setPrototypeOf(child, parent);
// const john = Object.create(soldier);
// const btn = document.querySelector('button');

// btn.onClick = function() {
//   alert('Click');
// };

// const telescope = {
//   names: [
//     'Meade',
//     'Sky-Watcher',
//     'Celestron',
//     'Coronado',
//     'Takahashi',
//     'Orion',
//     'Delta Optical-GSO',
//     'Lunt',
//   ],

//   get telescopeNames() {
//     return this.names;
//   },

//   set telescopeNames(list) {
//     this.names = list;
//   },
// };

// console.log(
//   (telescope.telescopeNames[0] = 'This TELESCOPE_NAME has been wiped by setter')
// );
