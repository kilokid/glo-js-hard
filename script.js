const arr = ['232', '2', '432', '88', '4323', '123', '768'];

const res = arr.filter(item => item[0] === '2' || item[0] === '4').forEach(item => console.log(item));


function primeNum(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

const array = [];
for (let i = 1; i < 100; i++) {
    array.push(i);
}
array.filter(item => primeNum(item)).forEach(item => console.log(item));