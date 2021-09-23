// const arr = ['232', '5', '132', '88', '1323', '123', '768'];
// let res = [];
// arr.forEach((item) => {
//     if (item[0] == 2 || item[0] == 4) {
//         res.push(item);
//     }
// });
// console.log(res);


// nextPrime:
// for (let i = 2; i <= 100; i % i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//     }
//     console.log(`${i} Делители этого числа: 1 и ${i}`)
// }

function isPrime(num) {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
        return false;
    }
    return num > 1;
  }
}

const array = [];
for (let i = 0; i < 100; i++) {
    array.push(i);
}

array.forEach((i) => {
    isPrime(i);
    console.log(i);
});