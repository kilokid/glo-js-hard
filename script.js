// function examination(arg) {
//     let res = 'Была передана не строка';
//     if (typeof arg === 'string') {
//         const str = arg.trim();

//         if (str.length > 30) {
//             res = str.slice(0, 30) + '...';
//         } else {
//             res = str;
//         }
//     }
//     return res;
// }
// console.log(examination('   Hello, world!    '));

function examination(arg) {
    if (typeof arg !== 'string') {
        console.log('Была передана не строка');
        return;
    } else if (arg === +arg) {
        console.log('В переданной строке только цифры');
        return;
    }

    let str = arg.trim();
    if (str.length > 30) {
        str = str.slice(0, 30) + '...';
    }
    return str;
}
console.log(examination('Hello, world!'));
console.log(examination('Hello, world! Hello, world! Hello, world! Hello, world! Hello, world!'));
console.log(examination('Hello, world111!'));
console.log(examination('12331'));
console.log(examination(12));
console.log(examination(+''));