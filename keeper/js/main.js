'use strict';



let startButton = document.getElementById('start'),
budgetValue = document.getElementsByClassName('budget-value')[0],
dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
levelValue = document.getElementsByClassName('level-value')[0],
expensesValue = document.getElementsByClassName('expenses-value')[0],
optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
incomeValue = document.getElementsByClassName('income-value')[0],
monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
expensesItems = document.getElementsByClassName('expenses-item'),
approveButton = document.getElementsByTagName('button')[0],
approveOptionalButton = document.getElementsByTagName('button')[1],
calculateButton = document.getElementsByTagName('button')[2],
optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
incomeInput = document.querySelector('#income'),
checkSavings = document.querySelector('#savings'),
depositSum = document.querySelector('#sum'),
depositPersent = document.querySelector('#percent'),
yearValue = document.querySelector('.year-value'),
monthValue = document.querySelector('.month-value'),
dayValue = document.querySelector('.day-value');


let money,time;

approveButton.disabled = true;
approveOptionalButton.disabled = true;
calculateButton.disabled = true;
approveButton.classList.add("banned");
approveOptionalButton.classList.add("banned");
calculateButton.classList.add("banned");


startButton.addEventListener('click', function(){
  
  time = prompt('Введите дату в формате YYYY-MM-DD','YYYY-MM-DD');

  money = +prompt('Ваш бюджет на месяц?','Введите Ваш бюджет здесь...');

  while( isNaN(money) || money == "" || money == null){
    money = +prompt('Ваш бюджет на месяц?','Введите Ваш бюджет здесь...');
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money;
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
  

  approveButton.disabled = false;
  approveOptionalButton.disabled = false;
  calculateButton.disabled = false;
  approveButton.classList.remove("banned");
  approveOptionalButton.classList.remove("banned");
  calculateButton.classList.remove("banned");
});

approveButton.addEventListener('click',function(){
  let sum = 0;
  for (let i = 0; i < expensesItems.length; i++){
    let ans1 = expensesItems[i].value,
    ans2 = expensesItems[++i].value;// i = 1
    console.log(typeof(ans2));
    if (ans1 != '' && ans2 != '' && typeof(ans1) == 'string' && typeof(ans2) == 'string' && typeof(ans1) != null && typeof(ans2) != null){
      appData.expenses[ans1] = ans2;
      sum += +ans2;
      
    } else {
      alert('Введите корректные данные');
      return;
    }
    
  }
  expensesValue.textContent = sum;
});

calculateButton.addEventListener('click',function(){
  if (appData.budget != undefined){
    appData.budgetPerDay = ((appData.budget - expensesValue.textContent) / 30).toFixed();
    dayBudgetValue.textContent = appData.budgetPerDay;
    if ( appData.budgetPerDay <= 100 ){
      levelValue.textContent = 'low';
    } else if ( appData.budgetPerDay <= 500 ){
      levelValue.textContent = 'middle';
    } else if ( appData.budgetPerDay <= 1000){
      levelValue.textContent = 'high';
    } else {levelValue.textContent = 'very high';}
  } else {
    dayBudgetValue.textContent = 'Произошла ошибка';
  }
});

approveOptionalButton.addEventListener('click',function(){
  for (let i = 0; i < optionalExpensesItem.length; i++){
    let ans1 = optionalExpensesItem[i].value;
      appData.optionalExpenses[i] = ans1;
      optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

incomeInput.addEventListener('input',function(){
  let items = incomeInput.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click',function(){
  if (appData.saving == false){
    appData.saving = true;
  } else {
    appData.saving = false;
  }
});

depositSum.addEventListener('input',function(){
  if (appData.saving == true){
    let sum = +depositSum.value,
    percent = +depositPersent.value;
    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

depositPersent.addEventListener('input',function(){
  if (appData.saving == true){
    let sum = +depositSum.value,
    percent = +depositPersent.value;
    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});




let appData = {
  budget : money,
  timeData : time,
  expenses : {},
  optionalExpenses : {},
  income : [],
  saving : false,
  log : function (){
    console.log(appData);
  }
};



