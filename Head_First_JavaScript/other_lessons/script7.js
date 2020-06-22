'use strict';
// Robots;
// function Game() {
//   this.level = 0;
// }

// Game.prototype.play = function () {
//   this.level++;
//   console.log('Welcome to level ' + this.level);
//   this.unlock();
// };

// Game.prototype.unlock = function () {
//   Robot.prototype.deployLaser = function () {
//     console.log(this.name + ' is blasting you with laser beams.');
//   };
// };

function Robot(name, year, owner) {
  this.name = name;
  this.year = year;
  this.owner = owner;
}

// const game = new Game();

Robot.prototype.maker = 'ObjectsRUs';
Robot.prototype.errorMessage = 'All systems go.';
Robot.prototype.reportError = function () {
  console.log(this.name + ' says ' + this.errorMessage);
};
Robot.prototype.spillWater = function () {
  this.errorMessage = 'I appear to have a short circuit';
};
// Robot.prototype.speak = function () {
//   console.log('Warning! Warning!');
// };

// Robot.prototype.makeCoffee = function () {
//   console.log('Making coffee');
// };

// Robot.prototype.blinkLights = function () {
//   console.log('Blink blink!');
// };

let robby = new Robot('Robby', 1956, 'Dr Morbius');
let rosie = new Robot('Rosie', 1962, 'George Jetson');

rosie.reportError();
robby.reportError();
robby.spillWater();
rosie.reportError();
robby.reportError();

console.log(robby.hasOwnProperty('errorMessage')); //true
console.log(rosie.hasOwnProperty('errorMessage')); //false
// while (game.level < 42) {
//   game.play();
// }

// robby.deployLaser();
// rosie.deployLaser();
// robby.onOffSwitch = true;
// robby.makeCoffee = function () {
//   console.log(this.name + ' is goes to coffee shop');
// };

// rosie.cleanHouse = function () {
//   console.log(this.name + " says 'cleaning the house in progress bip bip'");
// };

// console.log(
//   robby.name +
//     ' was made by ' +
//     robby.maker +
//     ' in ' +
//     robby.year +
//     ' and is owned by ' +
//     robby.owner
// );

// robby.makeCoffee();
// robby.blinkLights();

// console.log(
//   rosie.name +
//     ' was made by ' +
//     rosie.maker +
//     ' in ' +
//     rosie.year +
//     ' and is owned by ' +
//     rosie.owner
// );

// rosie.cleanHouse();
