function examination(str) {
    if (str != String(str)) {
        console.log('Была передана не строка');
    } else if (str.length > 30) {
        str = str.slice(0, 30) + '...';
    }
    console.log(str.trim());
}
examination('Hello world!');