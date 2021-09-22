function examination(arg) {
    let res = 'Была передана не строка';
    if (typeof arg === 'string') {
        const str = arg.trim();

        if (str.length > 30) {
            res = str.slice(0, 30) + '...';
        } else {
            res = str;
        }
    }
    return res;
}
console.log(examination('   Hello, world!    '));