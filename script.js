const arr = [];
arr.push('32', '25', '2132', '88', '1323', '4123', '768');
arr.forEach((i) => {
    if (i[0] == 2 || i[0] == 4) {
        console.log(i);
    }
});

nextPrime:
for (let i = 2; i <= 100; i % i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    console.log(`${i} Делители этого числа: 1 и ${i}`)
}
