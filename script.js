const arr = ['232', '2', '432', '88', '4323', '123', '768'];

const res = arr
    .filter(item => item[0] === '2' || item[0] === '4')
    .forEach(item => console.log(item));


function isprimeNum(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

const numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}
numbers
    .filter(item => isprimeNum(item))
    .forEach(item => console.log(item + ` Делители этого числа: 1 и ${item}`));