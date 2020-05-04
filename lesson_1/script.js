'use strict';

let money, time;

function start(params) {
  money = +prompt('Ваш бюджет на месяц?');
  time = prompt('Введите дату в формате YYYY-MM-DD');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?');
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
      b = prompt('Во сколько обойдется ?', '');

    if (
      typeof a === 'string' &&
      typeof a != null &&
      typeof b != null &&
      a != '' &&
      b != '' &&
      a.length < 50
    ) {
      console.log('done');
      appData.expenses[a] = b;
    }
  }
}
chooseExpenses();

function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
    let a = prompt('Статья необязательных расходов?', ''),
      b = prompt('Во сколько обойдется ?', '');

    if (
      typeof a === 'string' &&
      typeof a != null &&
      typeof b != null &&
      a != '' &&
      b != '' &&
      a.length < 50
    ) {
      console.log('done');
      appData.optionalExpenses[i + 1] = b;
    }
  }
}
// chooseOptExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert('бюджет на 1 день - ' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 500) {
    console.log('Минимальный уровень достатка');
  } else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 1000) {
    console.log('Средний уровень достатка');
  } else if (appData.moneyPerDay > 1000) {
    console.log('Высокий уровень достатка');
  } else {
    console.log('Error!');
  }
}
detectLevel();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt('Какова сумма накоплений?'),
      percent = +prompt('Какой процент?');

    appData.monthIncome = (save / 100 / 12) * percent;
    alert('Доход в месяц с депозита: ' + appData.monthIncome);
  }
}

checkSavings();
