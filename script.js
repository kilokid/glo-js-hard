function examination(arg) {
    if (typeof arg === 'boolean' ||typeof arg !== 'string' || arg === '' || arg === +'') {
        console.log('Была передана не строка, или пустая строка');
        return;
    } else if (arg == +arg) {
        console.log('В переданной строке только цифры');
        return;
    }

    let str = arg.trim();
    if (str.length > 30) {
        str = str.slice(0, 30) + '...';
    }
    return str;
}
console.log(examination(true));
console.log(examination(+''));
console.log(examination(''));