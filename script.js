const num = 266219;

const numArr = Array.from(String(num), Number);
let res = numArr.reduce((sum, current) => sum * current);
console.log(res);

console.log(String(res ** 3).slice(0, 2));