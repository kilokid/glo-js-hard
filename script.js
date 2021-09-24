const onlyNumber = /^\d+$/;
function examination(arg) {
    if (typeof arg !== 'string' || arg === '') {
        console.log('Была передана не строка, или пустая строка');
        return;
    } else if (onlyNumber.test(arg)) {
        console.log('В переданной строке только цифры');
        return;
    }

    let str = arg.trim();
    if (str.length > 30) {
        str = str.slice(0, 30) + '...';
    }
    return str;
}

console.log(examination('1234'));
console.log(examination('sdc'));
console.log(examination('       helloo'));