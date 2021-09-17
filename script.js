const num = 266219;

const numArr = Array.from(String(num), Number);
let res = 1;

for (let i = 0; i <= numArr.length - 1; i++) {
    res *= numArr[i];
    console.log(res);
}

res = res ** 3;

console.log(String(res).slice(0, 2));