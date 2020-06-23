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

function SpaceRobot(name, year, owner, homePlanet) {
  this.name = name;
  this.year = year;
  this.owner = owner;
  this.homePlanet = homePlanet;
}
// const game = new Game();

SpaceRobot.prototype = new Robot();
SpaceRobot.prototype.speak = function () {
  alert(this.name + ' says Sir, If I may venture an opinion...');
};
SpaceRobot.prototype.pilot = function () {
  alert(this.name + ' says Thrusters? Are they important?');
};

Robot.prototype.maker = 'ObjectsRUs';
Robot.prototype.errorMessage = 'All systems go.';
Robot.prototype.reportError = function () {
  console.log(this.name + ' says ' + this.errorMessage);
};
Robot.prototype.spillWater = function () {
  this.errorMessage = 'I appear to have a short circuit';
};
Robot.prototype.speak = function () {
  console.log('Warning! Warning!');
};

Robot.prototype.makeCoffee = function () {
  console.log(this.name + ' is making coffee');
};

Robot.prototype.blinkLights = function () {
  console.log('Blink blink!');
};

const robby = new Robot('Robby', 1956, 'Dr Morbius');
const rosie = new Robot('Rosie', 1962, 'George Jetson');
const c3po = new SpaceRobot('C3PO', 1977, 'Luke Skywalker', 'Tatooine');
const simon = new SpaceRobot('Simon', 2009, 'Carla Diana', 'Earth');

// rosie.reportError();
// robby.reportError();
// robby.spillWater();
// rosie.reportError();
// robby.reportError();

simon.makeCoffee();
simon.blinkLights();
simon.speak();

c3po.speak();
c3po.pilot();
console.log(c3po.name + ' was made by ' + c3po.maker);

// console.log(robby.hasOwnProperty('errorMessage')); //true
// console.log(rosie.hasOwnProperty('errorMessage')); //false
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
