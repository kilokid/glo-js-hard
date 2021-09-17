let num = 266219;

let numStr = String(num);
let res = 1;

for (let i = 0; i <= numStr.length - 1; i++) {
    res *= +numStr[i];
    console.log(res);
}

res = res ** 3;

console.log(String(res).slice(0, 2));
