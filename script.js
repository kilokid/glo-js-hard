const lang = 'ru';
const ruDay = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const enDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Решите задачу через if
if (lang === 'ru') {
    console.log(ruDay);
} else {
    console.log(enDay);
}

// Решите задачу через switch-case
switch (lang) {
    case 'ru':
        console.log(ruDay);
        break;
    case 'en':
        console.log(enDay);
        break;
    default:
        console.log('Непредвиденное значение!');
}

// Решите задачу через многомерный массив без ифов и switch
// const dayArr = [];
// dayArr.ru = ruDay;
// dayArr.en = enDay;
// console.log(dayArr);
// console.log(dayArr[lang]);
let days = new Map();
days.set('ru', ruDay);
days.set('en', enDay);
console.log(days.get(lang));

/*
У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести 
в консоль “директор”, если значение “Максим” то вывести в консоль “преподаватель”, 
с любым другим значением вывести в консоль “студент”
Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
*/
const namePerson = 'Артем';
namePerson === 'Артем' ? console.log('Директор') : 
(namePerson === 'Максим') ? console.log('Преподаватель') 
: console.log('Студент');