const num = 266219;

const numArr = Array.from(String(num), Number);
let res = numArr.reduce((sum, current) => sum * current);
console.log(res);

res = res ** 3;

console.log(String(res).slice(0, 2));