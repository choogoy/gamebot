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
  let attempts = 10; // количество попыток
  const random = Math.ceil(Math.random()*100); // загаданное число от 1 до 100
  
  // действие при исчерпании попыток
  const checkAttempts = function() {
    if (attempts <= 1) {
      let newGameQuestion = confirm('Попытки закончились, хотите сыграть еще?');
      if (newGameQuestion === false) {
        return false;
      } else {
        gameBot();
      }
    }
  };

  //проверка введенного числа, random и attempts - замкнуты для checkNumber
  const checkNumber = function(num) {
    if (checkAttempts() === false) {
      alert ('До встречи!');
      return;        
    } else if (num === null) {
        alert ('Игра окончена');
        return;
    } else {
      if (isNumber(num) && attempts > 0) {
        attempts--;
        if (+num === random) {
          let questionCongratulations = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще');
          if (!questionCongratulations) {
            return;
          } else {
            gameBot();
          }
        }
        if (+num > random) {
          alert(`Загаданное число меньше, осталось ${attempts} попыток`);
          checkNumber(question());
        }
        if (+num < random) {
          alert(`Загаданное число больше, осталось ${attempts} попыток`);
          checkNumber(question());
        }
      } else {
        alert(`Введите число`);
        checkNumber(question());
      }
    }
  };

  // попытка угадать число при наличии потыток
  if (attempts > 0) {
    checkNumber(question());
  }

}

gameBot();