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
// let mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
// console.log(
//   'Bubble Solution #' + mostCostEffective + ' is the most cost effective'
// );
//////////////////////////////////////////////////////////////////////////
// OBJECTS
//////////////////////////////////////////////////////////////////////////
