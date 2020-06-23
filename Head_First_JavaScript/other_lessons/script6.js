'use strict';
// function Duck(type, canFly) {
//   this.type = type;
//   this.canFly = canFly;
// }
///////////////////////////////////////////////////////////////
// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
//   this.bark = function () {
//     if (this.weight > 25) {
//       alert(this.name + ' says Woof!');
//     } else {
//       alert(this.name + ' says Yip!');
//     }
//   };
// }

// let fido = new Dog('Fido', 'Mixed', 38);
// let fluffy = new Dog('Fluffy', 'Poodle', 30);
// let spot = new Dog('Spot', 'Chihuahua', 10);

// let dogs = [fido, fluffy, spot];
// for (let i = 0; i < dogs.length; i++) {
//   let size = 'small';
//   if (dogs[i].weight > 10) {
//     size = 'large';
//   }
//   dogs[i].bark();
//console.log('Dog: ' + dogs[i].name + ' is a ' + size + ' ' + dogs[i].breed);
// }
//////////////////////////////////////////////////////////////////
// function widget(partNo, size) {
//   let no = partNo;
//   let breed = size;
// }

// function FormFactor(material, widget) {
//   this.material = material;
//   this.widget = widget;
//   return this;
// }
// let widgetA = new widget(100, 'large');
// let widgetB = new widget(101, 'small');
// let formFactorA = new FormFactor('plastic', widgetA);
// let formFactorB = new FormFactor('metal', widgetB);
// ////////////////////////////////////////////////////////////
// function Coffee(roast, ounces) {
//   this.roast = roast;
//   this.ounces = ounces;

//   // method #1
//   this.getSize = function (size) {
//     if (this.ounces == 16) {
//       return 'large';
//     } else if (this.ounces == 12) {
//       return 'medium';
//     } else {
//       return 'small';
//     }
//   };

//   // method #2
//   this.toString = function (roast, getSize) {
//     // You’ve ordered a small House Blend coffee
//     return 'You`ve ordered a ' + getSize + ' ' + roast + ' coffee';
//   };
// }
// let houseBlend = new Coffee('House Blend', 12);
// console.log(houseBlend.toString());

// let darkRoast = new Coffee('Dark Roast', 16);
// console.log(darkRoast.toString());
////////////////////////////////////////////////////////////
//
// let cea = {
//   make: 'Chevy',
//   model: 'Bel Air',
//   year: 1957,
//   color: 'red',
//   passengers: 2,
//   convertible: false,
//   mileage: 1021,
//   started: false,

//   start: function () {
//     this.started = true;
//   },
//   stop: function () {
//     this.started = false;
//   },
//   drive: function () {
//     if (this.started) {
//       console.log(this.make + ' ' + this.model + ' goez zoom zoom');
//     } else {
//       console.log('Start the engine first');
//     }
//   },
// };
////////////////////////////////////////////////////////////
// class Car {
//   constructor(params) {
//     this.make = params.make;
//     this.model = params.model;
//     this.year = params.year;
//     this.color = params.color;
//     this.passengers = params.passengers;
//     this.convertible = params.convertible;
//     this.mileage = params.mileage;

//     this.start = function () {
//       this.started = true;
//       console.log(this.model + ' engine started');
//     };
//     this.stop = function () {
//       this.started = false;
//       console.log(this.model + ' engine stopped');
//     };
//     this.drive = function () {
//       if (this.started) {
//         console.log(this.make + ' ' + this.model + ' goez zoom zoom');
//       } else {
//         console.log('Start the engine first');
//       }
//     };
//   }
// }
// // First we describe params inside a one parameter
// const chevyParams = {
//   make: 'Chevy',
//   model: 'Bel Air',
//   year: 1957,
//   color: 'red',
//   passengers: 2,
//   convertible: false,
//   mileage: 1021,
// };
// // then, we drop a discribed parameter into a object creation function
// const chevy = new Car(chevyParams);
// //
// const cadiParams = {
//   make: 'GM',
//   model: 'Cadillac',
//   year: 1955,
//   color: 'tan',
//   passengers: 5,
//   convertible: false,
//   mileage: 12892,
// };
// const cadi = new Car(cadiParams);
// //
// const taxiParams = {
//   make: 'Webville Motors',
//   model: 'Taxi',
//   year: 1955,
//   color: 'yellow',
//   passengers: 4,
//   convertible: false,
//   mileage: 281341,
// };
// const taxi = new Car(taxiParams);
// //
// const fiatParams = {
//   make: 'Fiat',
//   model: '500',
//   year: 1957,
//   color: 'blue',
//   passengers: 2,
//   convertible: false,
//   mileage: 88000,
// };
// const fiat = new Car(fiatParams);
// //
// const testCarParams = {
//   make: 'Webville Motors',
//   model: 'Test Car',
//   year: 2020,
//   color: 'navy',
//   passengers: 2,
//   convertible: true,
//   mileage: 21,
// };
// const testCar = new Car(testCarParams);

// const cars = [chevy, cadi, taxi, fiat, testCar];
// for (let i = 0; i < cars.length; i++) {
//   cars[i].start();
//   cars[i].drive();
//   cars[i].drive();
//   cars[i].stop();
// }

// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
//   this.bark = function () {
//     if (this.weight > 25) {
//       alert(this.name + ' says Woof!');
//     } else {
//       alert(this.name + ' says Yip!');
//     }
//   };
// }

// const limoParams = {
//   make: 'Webville Motors',
//   model: 'limo',
//   year: 1983,
//   color: 'black',
//   passengers: 12,
//   convertible: true,
//   mileage: 21120,
// };
// const limo = new Car(limoParams);
// const limoDog = new Dog('Rhapsody In Blue', 'Poodle', 40);

// console.log(limo.make + ' ' + limo.model + ' is a ' + typeof limo);
// console.log(limoDog.name + ' is a ' + typeof limoDog);
//////////////////////////////////////////////

// function dogCatcher(obj) {
//   this.obj = obj;
//   if (obj instanceof Dog) {
//     return obj;
//   }
// }

// function Cat(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }

// let meow = new Cat('Meow', 'Siamese', 10);
// let whiskers = new Cat('Whiskers', 'Mixed', 12);

// let fido = { name: 'Fido', breed: 'Mixed', weight: 38 };

// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
//   this.bark = function () {
//     if (this.weight > 25) {
//       alert(this.name + ' says Woof!');
//     } else {
//       alert(this.name + ' says Yip!');
//     }
//   };
// }
// let fluffy = new Dog('Fluffy', 'Poodle', 30);
// let spot = new Dog('Spot', 'Chihuahua', 10);
// let dogs = [meow, whiskers, fido, fluffy, spot];

// for (let i = 0; i < dogs.length; i++) {
//   if (dogCatcher(dogs[i])) {
//     console.log(dogs[i].name + ' is a dog!');
//   }
// }
// fido.owner = 'Bob';
// delete fido.weight;
// fido.trust = function (person) {
//   return person === 'Bob';
// };
// let notBite = fido.trust('Bob');
///////////////////////////////////////////////////////
// const now = new Date();
// const dateString = now.toString();
// const theYear = now.getFullYear();
// const theDayOfWeek = now.getDay();
// const birthday = new Date('May 19, 1986 12:30 PM');

// console.log(birthday);

// let emptyArray = new Array();
// //
// let n = getNumberOfWidgetsFromDatabase();
// let widgets = new Array(n);
// for (let i = 0; i < n; i++) {
//   widgets[i] = getDatabaseRecord(i);
// }
/////////////////////////////////////////////////////////
function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}
function ShowDog(name, breed, weight, handler) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  this.handler = handler;
}
ShowDog.prototype = new Dog();

ShowDog.prototype.league = 'Webville';
ShowDog.prototype.stack = function () {
  console.log('Stack');
};
ShowDog.prototype.bait = function () {
  console.log('Bait');
};
ShowDog.prototype.gait = function () {
  console.log(kind + 'ing');
};
ShowDog.prototype.groom = function () {
  console.log('Groom');
};

Dog.prototype.species = 'Canine';
Dog.prototype.bark = function () {
  if (this.weight > 25) {
    console.log(this.name + ' says Woof!');
  } else {
    console.log(this.name + ' says Yip!');
  }
};

Dog.prototype.run = function () {
  console.log('Run!');
};

Dog.prototype.wag = function () {
  console.log('Wag!');
};

Dog.prototype.sitting = false;

Dog.prototype.sit = function () {
  if (this.sitting) {
    console.log(this.name + ' is already sitting');
  } else {
    this.sitting = true;
    console.log(this.name + ' is now sitting');
  }
};

const fido = new Dog('Fido', 'Mixed', 38);
const fluffy = new Dog('Fluffy', 'Poodle', 30);
const spot = new Dog('Spot', 'Chihuahua', 30);
const barnaby = new Dog('Barnaby', 'Basset Hound', 55);
const scotty = new ShowDog('Scotty', 'Scottish Terrier', 15, 'Cookie');
const stompy = new ShowDog('Stompy', 'Spaniel', 21, 'Terry');

spot.bark = function () {
  console.log(this.name + ' says WOOF!');
};

fido.bark();

scotty.stack();
scotty.bark();
console.log(scotty.league + ' league');
console.log('Scotty handler is ' + scotty.handler);
console.log('===========================================');
stompy.stack();
stompy.bark();
console.log(stompy.league + ' league');
console.log('Stompy handler is ' + stompy.handler);

// fluffy.bark();
// fluffy.run();
// fluffy.wag();

// spot.bark();
// spot.run();
// spot.wag();
///////////////////////////////////////////////////
