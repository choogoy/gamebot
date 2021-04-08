'use strict';

// функция возвращает ответ на запрос
const question = function() {
  return prompt('Угадай число от 1 до 100');
};

// функция проверяет является ли ответ числом
const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

// функция запуска бота
function gameBot() {
  const random = Math.ceil(Math.random()*100); // загаданное число от 1 до 100
  
  //проверка введенного числа, random - замкнуто для checkNumber
  const checkNumber = function(num) {
    if (num === null) {
      alert ('Игра окончена');
      return;
    } else {
      if (isNumber(num)) {
        if (+num === random) {
          alert('Поздравляю, Вы угадали!!!');
          return;
        }
        if (+num > random) {
          alert('Загаданное число меньше');
          checkNumber(question());
        }
        if (+num < random) {
          alert('Загаданное число больше');
          checkNumber(question());
        }   
      } else {
        alert('Введи число!');
        checkNumber(question());
      } 
    }
  };
  checkNumber(question());
}

gameBot();