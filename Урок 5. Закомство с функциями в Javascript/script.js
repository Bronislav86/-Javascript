// function helloName(name) {
//   console.log(name);
// }

// helloName('Ivan');

//------------------------------------------------------------
// let age = Number(prompt('Сколько вам лет?'));

// const lvlUpAge = () => age + 5;

// console.log(`Через 5 лет Вам будет ${lvlUpAge()}`);

//------------------------------------------------------------

// function hello (){
//   console.log('Hello function');
// }

// hello();

// const sum = (param1, param2) => {
//   return param1 + param2;
// }

// console.log(sum(2, 5));

//------------------------------------------------------------
// function hello (){
//   console.log('Hello function');
// }

// hello();

// const salary = (money) => {
//   money = money * 0.87;
//   return money * 0.75;
// }

// const userMoney = Number(prompt('Сколько ты зарабатываешь?'));

// let moneyMonth = salary(userMoney);

// console.log(`Для расходов можно использовать ${salary(userMoney)}`);

// console.log(`Теперь на еду желательно потратить не более чем ${moneyMonth * 0.3}`);

//-------------Браузерные события-----------------------------
// function sayHallo() {
//   alert('Hello');
//   alert('Нажали на кнопку');
// }

//---------------------Загадки--------------------------------

function askQuestion(answer, question) {
  const userAnswer = prompt(question);

  if (userAnswer.toLowerCase() === answer) {
    console.log('Угадал!');
  } else {
    console.log('Не угадал...');
  }
}

function puzzle(){
  askQuestion('лук', 'Сидит дед во 100 шуб одет. Кто его раздевает, тот слезы проливает');
  askQuestion('елка', 'Зимой и летом одним цветом');
}