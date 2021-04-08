'use strict';
// Используйте функции alert, confirm, prompt для общения с пользователем.
// Написать игровой бот.
// "Загадывание случайного числа от 1 до 100"
// Что должна делать программа:
// — спрашивает пользователя: "Угадай число от 1 до 100".
// — если пользовательское число больше, то бот выводит "Загаданное число меньше" и предлагает ввести новый вариант;
// — если пользовательское число меньше, то бот выводит "Загаданное число больше" и предлагает ввести новый вариант;
// — если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
// — если пользователь нажимает "Отмена", то игра заканчивается и выводится сообщение "Игра окончена".
// — если пользовательское число равно загаданному, то игра заканчивается и выводит сообщение  "Поздравляю, Вы угадали!!!".
// Программа должны быть выполнена с помощью рекурсии, без единого цикла.
// Загаданное число должно храниться «в замыкании»

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