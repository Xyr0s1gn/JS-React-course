// function vaccine(dosage) {
//   if (dosage > 0) {
//     inject(dosage);
//   }
// }
// administer(patient, vaccine, time);

// // rework into anon function
// administer(
//   patient,
//   function (dosage) {
//     if (dosage > 0) {
//       inject(dosage);
//     }
//   },
//   time
// );

// //////////////////////////////////////
// let migrating = true;
// let fly = function (num) {
//   let sound = 'Flying';
//   function wingFlapper() {
//     console.log(sound);
//   }
//   for (let i = 0; i < num; i++) {
//     wingFlapper();
//   }
// };
// function quack(num) {
//   let sound = 'Quack';
//   let quacker = function () {
//     console.log(sound);
//   };
//   for (let i = 0; i < num; i++) {
//     quacker();
//   }
// }

// if (migrating) {
//   quack(4);
//   fly(4);
// }

// function makeCounter() {
//   let count = 0;

//   let countMethod = {
//     increment: function () {
//       count = count + 1;
//       return count;
//     },
//   };
//   return countMethod.increment;
// }
// === OR
function makeCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
  };
}
let counter = makeCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
// let doCount = makeCounter();

// console.log(doCount());
// console.log(doCount());
// console.log(doCount());
// console.log(doCount());
// console.log(doCount());

function makePassword(password) {
  return function guess(passwordGuess) {
    return passwordGuess === password;
  };
}

let tryGuess = makePassword('secret');
console.log("Guessing 'nope': " + tryGuess('nope'));
console.log("Guessing 'secret': " + tryGuess('secret'));
////////////////////////////////////
function multN(n) {
  return function multBy(m) {
    return m * n;
  };
}
let multBy3 = multN(3);
console.log('Multiplying 2: ' + multBy3(2));
console.log('Multiplying 3: ' + multBy3(3));
////////////////////////////////////
function makeTimer(doneMessage, n) {
  setTimeout(function () {
    alert(doneMessage);
  });
}

makeTimer('Some message', 1000);
