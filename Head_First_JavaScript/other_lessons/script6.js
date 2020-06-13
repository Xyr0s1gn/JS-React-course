// 'use strict';
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
////////////////////////////////////////////////////////////
function Coffee(roast, ounces) {
  this.roast = roast;
  this.ounces = ounces;

  // method #1
  this.getSize = function (size) {
    if (this.ounces == 16) {
      return 'large';
    } else if (this.ounces == 12) {
      return 'medium';
    } else {
      return 'small';
    }
  };

  // method #2
  this.toString = function (roast, getSize) {
    // You’ve ordered a small House Blend coffee
    return 'You`ve ordered a ' + getSize + ' ' + roast + ' coffee';
  };
}
let houseBlend = new Coffee('House Blend', 12);
console.log(houseBlend.toString());

let darkRoast = new Coffee('Dark Roast', 16);
console.log(darkRoast.toString());
