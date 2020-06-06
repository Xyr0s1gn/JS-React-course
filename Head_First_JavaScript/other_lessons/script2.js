let passengers = [
  { name: 'Jane Doloop', paid: true, ticket: 'coach' },
  { name: 'Dr. Evel', paid: true, ticket: 'firstclass' },
  { name: 'Sue Property', paid: false, ticket: 'firstclass' },
  { name: 'John Funcall', paid: true, ticket: 'coach' },
  { name: 'Lara Croft', paid: true, ticket: 'ecoplus' },
];

// function processPassengers(passengers, testFunction) {
//   for (let i = 0; i < passengers.length; i++) {
//     if (testFunction(passengers[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// function checkNoFlyList(passenger) {
//   return passenger.name === 'Dr. Evel';
// }

// function checkNotPaid(passenger) {
//   return !passenger.paid;
// }

// let allCanFly = processPassengers(passengers, checkNoFlyList);
// if (!allCanFly) {
//   console.log('The plane can`t take of: we have a persona non-grata.');
// }

// let allPaid = processPassengers(passengers, checkNotPaid);
// if (!allPaid) {
//   console.log('Not everyone has paid');
// }

// function printPassengers(passenger) {
//   console.log('Name: ' + passenger.name + ' Paid: ' + passenger.paid);
// }

// processPassengers(passengers, printPassengers);
function serveCustomer(passenger) {
  // drinks
  let getDrinkOrderFunction = createDrinkOrder(passenger);
  getDrinkOrderFunction();
  // eat
  let getDinnerOrderFunction = createDinnerOrder(passenger);
  getDinnerOrderFunction();
  // getDrinkOrderFunction();
  // clean trash
  // getDrinkOrderFunction();
}
function createDrinkOrder(passenger) {
  let orderFunction;
  if (passenger.ticket === 'firstclass') {
    orderFunction = function () {
      alert('Cocktail or wine?');
    };
  } else if (passenger.ticket === 'ecoplus') {
    orderFunction = function () {
      alert('Cola, water or wine?');
    };
  } else {
    orderFunction = function () {
      alert('Cola or water?');
    };
  }
  return orderFunction;
}

function createDinnerOrder(passenger) {
  let orderFunction;
  if (passenger.ticket === 'firstclass') {
    orderFunction = function () {
      alert('Chicken or pasta?');
    };
  } else if (passenger.ticket === 'ecoplus') {
    orderFunction = function () {
      alert('Snack or cheese plate?');
    };
  } else {
    orderFunction = function () {
      alert('Nuts or pancake?');
    };
  }
  return orderFunction;
}

function servePassengers(passengers) {
  for (let i = 0; i < passengers.length; i++) {
    serveCustomer(passengers[i]);
  }
}
servePassengers(passengers);
