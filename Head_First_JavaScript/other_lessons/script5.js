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

function makeCounter() {
  let count = 0;

  let countMethod = {
    increment: function () {
      count = count + 1;
      return count;
    },
  };
  return countMethod.increment;
}

let doCount = makeCounter();

console.log(doCount());
console.log(doCount());
console.log(doCount());
console.log(doCount());
console.log(doCount());

function makePassword(password) {
  return function passwordGuess() {
    return passwordGuess === password;
  };
}

function multiN(n) {
  return function (m) {
    return m * n;
  };
}
////////////////////////////////////
function makeTimer(doneMessage, n) {
  setTimeout(function () {
    alert(doneMessage);
  });
}

makeTimer('Some message', 1000);
