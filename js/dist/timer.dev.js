"use strict";

var timer = function timer() {
  var timerItems = document.querySelectorAll('.timer-number');
  var countName = document.querySelectorAll('.timer-text');

  var timing = function timing() {
    var dateStop = new Date('31 march 2022').getTime();
    var dateNow = new Date().getTime();
    var timeGap = (dateStop - dateNow) / 1000;
    var days = Math.floor(timeGap / 60 / 60 / 24);
    var hours = Math.floor(timeGap / 60 / 60) % 24;
    var minutes = Math.floor(timeGap / 60) % 60;
    var seconds = Math.floor(timeGap % 60);
    return {
      timeGap: timeGap,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  };

  var wordDeclension = function wordDeclension(name, value, className) {
    countName.forEach(function (item) {
      if (item.classList.contains("".concat(className))) {
        if (value % 10 > 1 && value % 10 < 5) item.textContent = name[0];else if (value % 10 == 1 && value != 11) item.textContent = name[1];else item.textContent = name[2];
      }
    });
  };

  var timeReload = function timeReload() {
    var getTime = timing();
    timerItems.forEach(function (item) {
      var daysArr = ['Дня', 'День', 'Дней'];
      var hoursArr = ['Часа', 'Час', 'Часов'];
      var minutesArr = ['Минуты', 'Минута', 'Минут'];
      var secondsArr = ['Секунды', 'Секунда', 'Секунд'];

      if (item.classList.contains('days-number')) {
        item.textContent = getTime.days;
        wordDeclension(daysArr, item.textContent, 'days-name');
      }

      if (item.classList.contains('hours-number')) {
        item.textContent = getTime.hours;
        wordDeclension(hoursArr, item.textContent, 'hours-name');
      }

      if (item.classList.contains('minutes-number')) {
        item.textContent = getTime.minutes;
        wordDeclension(minutesArr, item.textContent, 'minutes-name');
      }

      if (item.classList.contains('seconds-number')) {
        item.textContent = getTime.seconds;
        wordDeclension(secondsArr, item.textContent, 'seconds-name');
      }

      if (item.textContent.length < 2) {
        item.textContent = "0" + item.textContent;
      }
    });
  };

  var getTime = timing();
  var idInterval = setInterval(function () {
    if (getTime.timeGap > 0) {
      timeReload();
    } else {
      clearTimeout(idInterval);
    }
  }, 1000);
};

timer();