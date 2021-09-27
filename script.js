'use strict';

const week  = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const day = document.querySelectorAll('.day-of-week');
const today = new Date();

week.forEach((item, i, week) => {
    if (item === 'Суббота' || item === 'Воскресенье') {
        day[i].innerHTML = week[i].italics();
    } else if (i === today.getDay() - 1) {
        day[i].innerHTML = week[i].bold();
    } else {
        day[i].innerHTML = week[i];
    }
});