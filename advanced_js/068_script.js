'use strict';

function User(name, age) {
  this.name = name;
  let userAge = age;

  this.say = function() {
    console.log(`Name: ${this.name}, age: ${userAge}`);
  };

  this.getAge = function(){
    return userAge;
  };
}

const persona = new User('Travis', 34);
console.log(persona.name);
console.log(persona.userAge);
persona.say();

persona.name = 'Sandro';
persona.userAge = 25;
persona.say();