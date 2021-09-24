const arr = ['232', '5', '132', '88', '1323', '123', '768'];
let res = [];
arr.forEach((item) => {
    if (item[0] == 2 || item[0] == 4) {
        res.push(item);
    }
});
console.log(res);

function simpleNum(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

let arr = [];
for (let i = 2; i < 100; i++) {
    if (simpleNum(i)) {
        arr.push(i);
    }
}
console.log(arr);