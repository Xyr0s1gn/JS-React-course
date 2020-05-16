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
let temperature, temp;
function whatShallIWear(temp) {
  if (temp < 60) {
    console.log('wear a jacket');
  } else if (temp < 70) {
    console.log('wear a sweater');
  } else {
    console.log('wear a t-shirt');
  }
}
