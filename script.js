'use strict';

const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];   
const wrap = document.createElement('ul');
document.body.append(wrap);

week.forEach((day) => {
    const li = document.createElement('li');
    li.style.listStyleType = 'none';
    li.textContent = day;
    if (day === week[5] || day === week[6]) {
        li.style.fontStyle = 'italic';
    } if (week[new Date().getDay()] === day) {
        li.style.fontWeight = 'bold';
    }
    wrap.append(li);
});

const li = wrap.querySelectorAll('li');
li[6].after(li[0]);