'use strict';
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
// var balance = 10500;
// var cameraOn = true;
// function steal(balance, amount) {
//   cameraOn = false;
//   if (amount < balance) {
//     balance = balance - amount;
//   }
//   return amount;
//   cameraOn = true;
// }
// var amount = steal(balance, 1500);
// alert('Criminal: you stole ' + amount + '!');
//
////////////////////////////////////////////
// Arrays
////////////////////////////////////////////
// let scores = [60, 50, 60, 58, 54, 54, 58, 50, 54];
// let solution2 = scores[2];
// alert('Solution 2 produced ' + solution2 + ' bubbles.');

// let flavors = [
//   'vanilla',
//   'butterscotch',
//   'lavender',
//   'chocolate',
//   'cookie dough',
// ];
// flavors[3] = 'vanilla chocolate chip';
// console.log(flavors[flavors.length - 1]);

// function makePhrases() {
// let words1 = ['24/7', 'multi-tier', '30,000 foot', 'B-to-B', 'win-win'];
// let words2 = ['empowered', 'value-added', 'oriented', 'focused', 'aligned'];
// let words3 = ['process', 'solution', 'tipping-point', 'strategy', 'vision'];

//   let rand1 = Math.floor(Math.random() * words1.length);
//   let rand2 = Math.floor(Math.random() * words2.length);
//   let rand3 = Math.floor(Math.random() * words3.length);
//   let phrase = words1[rand1] + ' ' + words2[rand2] + ' ' + words3[rand3];
//   console.log(phrase);
// }
// for (let i = 0; i < 5; i++) {
//   makePhrases();
// }

// let scores = [
//   60,
//   50,
//   60,
//   58,
//   54,
//   54,
//   58,
//   50,
//   52,
//   54,
//   48,
//   69,
//   34,
//   55,
//   51,
//   52,
//   44,
//   51,
//   69,
//   64,
//   66,
//   55,
//   52,
//   61,
//   46,
//   31,
//   57,
//   52,
//   44,
//   18,
//   41,
//   53,
//   55,
//   61,
//   51,
//   44,
// ];
// let costs = [
//   0.25,
//   0.27,
//   0.25,
//   0.25,
//   0.25,
//   0.25,
//   0.33,
//   0.31,
//   0.25,
//   0.29,
//   0.27,
//   0.22,
//   0.31,
//   0.25,
//   0.25,
//   0.33,
//   0.21,
//   0.25,
//   0.25,
//   0.25,
//   0.28,
//   0.25,
//   0.24,
//   0.22,
//   0.2,
//   0.25,
//   0.3,
//   0.25,
//   0.24,
//   0.25,
//   0.25,
//   0.25,
//   0.27,
//   0.25,
//   0.26,
//   0.29,
// ];

// function printAndGetHighScore(scores) {
//   let highScore = 0;
//   for (let i = 0; i < scores.length; i++) {
//     console.log('Bubble solution #' + i + ' score: ' + scores[i]);
//     if (scores[i] > highScore) {
//       highScore = scores[i];
//     }
//   }
//   return highScore;
// }

// function getBestResults(scores, highScore) {
//   let bestSolutions = [];
//   for (let i = 0; i < scores.length; i++) {
//     if (scores[i] == highScore) {
//       bestSolutions.push(i);
//     }
//   }
//   return bestSolutions;
// }

// let highScore = printAndGetHighScore(scores);
// console.log('Bubbles tests: ' + scores.length);
// console.log('Highest bubble score: ' + highScore);

// let bestSolutions = getBestResults(scores, highScore);
// console.log('Solutions with the highest score: ' + bestSolutions);

// function getMostCostEffectiveSolution(scores, costs, highscore) {
//   let cost = 100;
//   let index;
//   for (let i = 0; i < scores.length; i++) {
//     if (scores[i] == highScore) {
//       if (cost > costs[i]) {
//         index = i;
//         cost = costs[i];
//       }
//     }
//   }
//   return index;
// }
//let mostCostEffective = getMostCostEffectiveSolution(scores, costs,highScore);
// console.log(
//   'Bubble Solution #' + mostCostEffective + ' is the most cost effective'
// );
//////////////////////////////////////////////////////////////////////////
// OBJECTS
//////////////////////////////////////////////////////////////////////////
// let taxi = {
//   make: 'Webville Motors',
//   model: 'Taxi',
//   year: 1955,
//   color: 'yellow',
//   passengers: 4,
//   convertible: false,
//   mileage: 281341,
// };

// let cadi = {
//   make: 'GM',
//   model: 'Cadillac',
//   year: 1955,
//   color: 'tan',
//   passengers: 5,
//   convertible: false,
//   mileage: 12892,
// };

// let fiat = {
//   make: 'Fiat',
//   model: '500',
//   year: 1957,
//   color: 'Medium Blue',
//   passengers: 2,
//   convertible: false,
//   mileage: 88000,
// };

// let chevy = {
//   make: 'Chevy',
//   model: 'Bel Air',
//   year: 1957,
//   color: 'red',
//   passengers: 2,
//   convertible: false,
//   mileage: 1021,
// };

// function prequal(car) {
//   if (car.mileage > 10000) {
//     return false;
//   } else if (car.year > 1960) {
//     return false;
//   }
//   return true;
// }

// function lookACar(car) {
//   prequal(car);
//   if (prequal(car)) {
//     console.log('You gotta check out this ' + car.make + ' ' + car.model);
//   } else {
//     console.log('You should pass on the ' + car.make + ' ' + car.model);
//   }
// }

// lookACar(taxi);
// lookACar(cadi);
// lookACar(fiat);
// lookACar(chevy);
////////////////////////////////////////////////////////
// function makeCar() {
//   let makes = ['Chevy', 'GM', 'Fiat', 'Webville Motors', 'Tucker'];
//   let models = ['Cadillac', '500', 'Bel-Air', 'Taxi', 'Torpedo'];
//   let years = [1955, 1957, 1948, 1954, 1961];
//   let colors = ['red', 'blue', 'tan', 'yellow', 'white'];
//   let convertible = [true, false];

//   let rand1 = Math.floor(Math.random() * makes.length);
//   let rand2 = Math.floor(Math.random() * models.length);
//   let rand3 = Math.floor(Math.random() * years.length);
//   let rand4 = Math.floor(Math.random() * colors.length);
//   let rand5 = Math.floor(Math.random() * 5 + 1);
//   let rand6 = Math.floor(Math.random() * 2);

//   let car = {
//     make: makes[rand1],
//     model: models[rand2],
//     year: years[rand3],
//     color: colors[rand4],
//     passengers: rand5,
//     convertible: convertible[rand6],
//     mileage: 0,
//   };

//   return car;
// }

// function displayCar(car) {
//   console.log(
//     'Your new car is a ' + car.year + ' ' + car.make + ' ' + car.model
//   );
// }

// for (let i = 0; i < 5; i++) {
//   let carToSell = makeCar();
//   displayCar(carToSell);
// }
//////////////////////////////////////////////////////////////////////

// let fiat = {
//   make: 'Fiat',
//   model: '500',
//   year: 1957,
//   color: 'Medium Blue',
//   passengers: 2,
//   convertible: false,
//   mileage: 88000,
//   started: false,
//   fuel: 0,
//   start: function () {
//     if (this.fuel != 0) {
//       this.started = true;
//     } else {
//       console.log('The car is on empty, fill up before starting!');
//     }
//   },
//   stop: function () {
//     this.started = false;
//   },
//   drive: function () {
//     if (this.started) {
//       if (this.fuel > 0) {
//         console.log(this.make + ' ' + this.model + ' goes zoom zoom!');
//         this.fuel = this.fuel - 1;
//       } else {
//         console.log('Uj oh, out of fuel.');
//         this.stop();
//       }
//     } else {
//       console.log('You need to start the engine first.');
//     }
//   },
//   addFuel: function (amount) {
//     this.fuel = this.fuel + amount;
//   },
// };
//////////////////////////////////////////////////////////////////////
// function lieDetectorTest() {
//   let lies = 0;

//   let stolenDiamond = {};
//   if (stolenDiamond) {
//     console.log('You stole the diamond');
//     lies++;
//   }
//   let car = {
//     keysInPocket: null,
//   };
//   if (car.keysInPocket) {
//     console.log('Uh oh, guess you stole the car!');
//     lies++;
//   }
//   if (car.emptyGasTank) {
//     console.log('You drove the car after you stole it!');
//     lies++;
//   }
//   let foundYouAtTheCrimeScene = [];
//   if (foundYouAtTheCrimeScene) {
//     console.log('A sure sign of guilt');
//     lies++;
//   }
//   if (foundYouAtTheCrimeScene[0]) {
//     console.log('Caught with a stolen item!');
//     lies++;
//   }
//   let yourName = ' ';
//   if (yourName) {
//     console.log('Guess you lied about your name');
//     lies++;
//   }
//   return lies;
// }
// let numberOfLies = lieDetectorTest();
// console.log('You told ' + numberOfLies + ' lies!');
// if (numberOfLies >= 3) {
//   console.log('Guilty as charged');
// }
//////////////////////////////////////////////////////////////////////
let emot = 'XOxxOO';
let hugs = 0;
let kisses = 0;

emot = emot.trim();
emot = emot.toUpperCase();

for (let i = 0; i < emot.length; i++) {
  if (emot.charAt(i) === 'X') {
    hugs++;
  } else if (emot.charAt(i) == 'O') {
    kisses++;
  }
}
console.log(hugs);
console.log(kisses);
