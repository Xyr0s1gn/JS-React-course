// const btn = document.querySelector('.btn');
// let timerId;
// const i = 0;

// function myAnimation() {
//   const elem = document.querySelector('.box');
//   let pos = 0;

//   const id = setInterval(frame, 10);
//   function frame() {
//     if (pos == 300) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = `${pos}px`;
//       elem.style.left = `${pos}px`;
//     }
//   }
// }
// btn.addEventListener('click', myAnimation);

// function logger() {
//   if (i === 3) {
//     clearInterval(timerId);
//   }
//   console.log('text');
//   i += 1;
// }

// let id = setTimeout(function log() {
//   console.log('Hello');
//   id = setTimeout(log, 500);
// }, 500);

// const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());

// const start = new Date();
// for (let i = 0; i < 100000; i++) {
//   const some = i ** 3;
// }
// const end = new Date();

// alert(`Working time - ${end - start} ms`);

// const box = document.querySelector('.box');

// const width = box.offsetWidth;
// const height = box.offsetHeight;

// console.log(width, height);

// ///////////////////////////////////////////
// Constructors
// ///////////////////////////////////////////
// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function() {
//     if (this.human) {
//       console.log(`Hello ${this.name}!`);
//       console.log(`${this.name} is human.`);
//     } else {
//       console.log(`Alarm! Alarm! Alarm!`);
//       console.log(`${this.name} is alien!`);
//     }
//   };
// }

// const bertran = new User('Bertran', '0');
// const alex = new User('Alex', '2');

// alex.human = false;

// bertran.hello();
// alex.hello();

// User.prototype.exit = function() {
//   console.log(`${this.name} was leave area 51`);
// };

// alex.exit();
// ///////////////////////////////////////////
// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }
// showThis(4, 3);

// const obj = {
//   a: 20,
//   b: 15,
//   sum() {
//     console.log(this);
//   },
// };
// obj.sum();

// function sayName() {
//   console.log(this);
//   console.log(this.name);
// }

// const user = {
//   name: 'John',
// };

// sayName.call(user);
// sayName.apply(user);

// function count(num) {
//   return this * num;
// }

// const double = count.bind(2);

// console.log(double(3));
// console.log(double(13));

// const btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//   this.style.backgroundColor = 'brown';
// });

// const obj = {
//   num: 5,
//   sayNumber() {
//     const say = () => {
//       console.log(this);
//     };
//     say();
//   },
// };

// obj.sayNumber();

// const double = a => a * 2;

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width);
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Text: ${this.text}, color: ${this.bgColor}`);
  }
}

const div = new ColoredRectangleWithText(25, 19, 'Hello, World', 'red');

div.showMyProps();
console.log(div.calcArea());
// const square = new Rectangle(10, 10);
// const anotherSquare = new Rectangle(25, 14);

// console.log(` ${square.calcArea()}`);
// console.log(`${anotherSquare.calcArea()}`);
