const lang = 'ru';
const ruWeekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const enWeekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Решите задачу через if
if (lang === 'ru') {
    console.log(ruWeekDays);
} else if (lang === 'en') {
    console.log(enWeekDays);
} else {
    console.log('Непредвиденное значение!');
}

// Решите задачу через switch-case
switch (lang) {
    case 'ru':
        console.log(ruWeekDays);
        break;
    case 'en':
        console.log(enWeekDays);
        break;
    default:
        console.log('Непредвиденное значение!');
}

// Решите задачу через многомерный массив без ифов и switch
const daysOfTheWeek = new Map([
    ['ru', ruWeekDays],
    ['en', enWeekDays]
]);
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