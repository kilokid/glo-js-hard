'use strict';

// function getZero(num){
//     if (num >= 0 && num < 10) { 
//         return '0' + num;
//     } else {
//         return num;
//     }
// }

// function declOfNum(num, text_forms) {  
//     num = Math.abs(num) % 100; 
//     const num1 = num % 10;
//     if (num > 10 && num < 20) { return `${num} ${text_forms[2]}`; }
//     if (num1 > 1 && num1 < 5) { return `${num} ${text_forms[1]}`; }
//     if (num1 == 1) { return `${num} ${text_forms[0]}`; }
//     return `${num} ${text_forms[2]}`;
// }

// function todays() {
//     const Data = new Date();
//     const year = Data.getFullYear();
//     const month = Data.getMonth() + 1;
//     const day = Data.getDate();
//     const hour = Data.getHours();
//     const minutes = Data.getMinutes();
//     const seconds = Data.getSeconds();

//     return {
//         'Data': Data,
//         'year': year,
//         'month': month,
//         'day': day,
//         'hour': hour,
//         'minutes': minutes,
//         'seconds': seconds
//     };
// }

// const nameMonth = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
// const nameDay = ['Четверг', 'Пятница', 'Суббота', 'Воскресенье', 'Понедельник', 'Вторник', 'Среда']

// const fullTimer = document.createElement('div');
// fullTimer.classList.add('todays-fulltime');
// document.body.append(fullTimer);

// setInterval(() => {
//     const time = todays();

//     fullTimer.innerHTML = 
//     `Сегодня ${nameDay[time.day]}, ${time.day} ${nameMonth[time.month - 1]} ${time.year} года,
//     ${declOfNum(time.hour, ['час', 'часа', 'часов'])} ${declOfNum(time.minutes, ['минута', 'минуты', 'минут'])} ${declOfNum(time.seconds, ['секунда', 'секунды', 'секунд'])}`;
// });

// const miniTimer = document.createElement('div');
// miniTimer.classList.add('todays-time');
// document.body.append(miniTimer);

// setInterval(() => {
//     const time = todays();

//     miniTimer.innerHTML = `${getZero(time.day)}.${getZero(time.month)}.${time.year} - ${getZero(time.hour)}:${getZero(time.minutes)}:${getZero(time.seconds)}`;
// });

function addZero(num){
    return num >= 0 && num < 10 ? '0' + num : num;
}

const fullTimer = document.createElement('div');
fullTimer.classList.add('fullTimer');
fullTimer.style.color = 'red';
document.body.append(fullTimer);

const miniTimer = document.createElement('div');
miniTimer.classList.add('mini-timer');
miniTimer.style.color = 'red';
document.body.append(miniTimer);

function declOfNum(num, textForms) {  
    num = Math.abs(num) % 100; 
    const num1 = num % 10;
    if (num > 10 && num < 20) { return `${num} ${textForms[2]}`; }
    if (num1 > 1 && num1 < 5) { return `${num} ${textForms[1]}`; }
    if (num1 == 1) { return `${num} ${textForms[0]}`; }
    return `${num} ${textForms[2]}`;
}

setInterval(() => {
    const data = new Date();
    const year = data.getFullYear();
    const month = data.getMonth() + 1;
    const day = data.getDate();
    const hours = data.getHours();
    const minutes = data.getMinutes();
    const seconds = data.getSeconds();

    fullTimer.innerHTML = `
    Сегодня ${data.toLocaleString('ru-RU', {weekday: 'long'})},
    ${data.toLocaleString('ru-RU', {day: 'numeric', month: 'long', year: 'numeric'})},
    ${declOfNum(hours, ['час', 'часа', 'часов'])} ${declOfNum(minutes, ['минута', 'минуты', 'минут'])} ${declOfNum(seconds, ['секунда', 'секунды', 'секунд'])}
    `;

    miniTimer.innerHTML = `
    ${addZero(day)}.${addZero(month)}.${addZero(year)} - 
    ${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}, 1000);