'use strict';

let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

let buy1 = prompt('Введите обязательную статью расходов в этом месяце');
let buy1Price = prompt('Во сколько обойдется ' + 'buy1 ' + '?');
let buy2 = prompt('Введите обязательную статью расходов в этом месяце');
let buy2Price = prompt('Во сколько обойдется ' + 'buy2 ' + '?');

appData.expenses[buy1] = buy1Price;
appData.expenses[buy2] = buy2Price;

alert('бюджет на 1 день - ' + money / 30);
