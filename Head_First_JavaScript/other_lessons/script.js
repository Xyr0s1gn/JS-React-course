// let soldier = {
//   health: 400,
//   armor: 100,
// };

// let john = {
//   health: 100,
// };

// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor);

// What should i wear. (A function test)
// let temperature, temp;
// function whatShallIWear(temp) {
//   if (temp < 60) {
//     console.log('wear a jacket');
//   } else if (temp < 70) {
//     console.log('wear a sweater');
//   } else {
//     console.log('wear a t-shirt');
//   }
// }
// function doIt(param) {
//   param = 2;
// }
// var test = 1;
// doIt(test);
// console.log(test);
////////////////////////////////////////////
// function calculateCircleArea(r) {
//   let area;
//   if (r <= 0) {
//     return 0;
//   } else {
//     area = Math.PI * r * r;
//     return area;
//   }
// }
// let radius = 5.2;
// let theArea = calculateCircleArea(radius);
// console.log('The area is: ' + theArea);
////////////////////////////////////////////
// function clunk(times) {
//   let num = times;
//   while (num > 0) {
//     display('clunk');
//     num = num - 1;
//   }
// }

// function thingamajig(size) {
//   let facky = 1;
//   clunkCounter = 0;
//   if (size == 0) {
//     display('clank');
//   } else if (size == 1) {
//     display('thunk');
//   } else {
//     while (size > 1) {
//       facky = facky * size;
//       size = size - 1;
//     }
//     clunk(facky);
//   }
// }

// function display(output) {
//   console.log(output);
//   clunkCounter = clunkCounter + 1;
// }
// let clunkCounter = 0;
// thingamajig(5);
// console.log(clunkCounter);
////////////////////////////////////////////
var balance = 10500;
var cameraOn = true;
function steal(balance, amount) {
  cameraOn = false;
  if (amount < balance) {
    balance = balance - amount;
  }
  return amount;
  cameraOn = true;
}
var amount = steal(balance, 1500);
alert('Criminal: you stole ' + amount + '!');
