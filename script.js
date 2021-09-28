'use strict';

// const week  = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// const today = new Date();
// let numWeekDay = today.getDay();

// if (numWeekDay === 0) {
//     numWeekDay = 6;
// } else {
//     numWeekDay--;
// }

// week.forEach((day, i) => {
//     let str = day;
//     if (i === numWeekDay) {
//         str = `<b>${day}</b>`;
//     } else {
//         str = `${day}`;
//     }

//     if (i === 5 || i === 6) {
//         str = `<i>${str}</i>`;
//     }
//     document.body.nsertAdjacentHTML('beforeend', `<div>${str}</div>`);
// });

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const div = document.createElement('div');
document.body.append(div);

const today = new Date();
let numWeekDay = today.getDay();

week.forEach((day, i) => {
    let str = day;
    if (i === (numWeekDay - 1)) {
        str = `<b>${day}</b>`;
    } else {
        str = `${day}`;
    }
    if (i === 5 || i === 6) {
        str = `<i>${str}</i>`; 
    }
    div.insertAdjacentHTML('beforeend', `<p>${str}</p>`);
});