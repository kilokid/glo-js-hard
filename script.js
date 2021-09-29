'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const div = document.createElement('div');
document.body.append(div);

const today = new Date();
let numWeekDay = today.getDay();

week.forEach((day, i) => {
    let str = day;
    if (i === (numWeekDay - 1)) {
        str = `<b>${day}</b>`;
    }

    if (i === 5 || i === 6) {
        str = `<i>${str}</i>`; 
    }
    div.insertAdjacentHTML('beforeend', `<p>${str}</p>`);
});