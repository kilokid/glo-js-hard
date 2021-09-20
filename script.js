let lang = 'ru';

// Решите задачу через if
if (lang === 'ru') {
    console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
} else {
    console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
}

// Решите задачу через switch-case
switch (lang) {
    case 'ru':
        console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
        break;
    case 'en':
        console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
        break;
    default:
        console.log('Непредвиденное значение!');
}

// Решите задачу через многомерный массив без ифов и switch
let langArr = [];
langArr.ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
langArr.en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(langArr[lang]);


/*
У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести 
в консоль “директор”, если значение “Максим” то вывести в консоль “преподаватель”, 
с любым другим значением вывести в консоль “студент”
Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
*/
let namePerson = 'Артем';
namePerson === 'Артем' ? console.log('Директор') : (namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент'));