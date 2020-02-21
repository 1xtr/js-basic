// // let a = b = c = d = e = f = g = h = i = j = "";
// // Lesson 2.1
// let a = 1, b = 1, c, d;
// c = ++a; alert(c);       // Ответ 2 перфикс, сначала инкремент потом результат, a=2
// d = b++; alert(d);       // Ответ 1 постфикс, тут наоборот, сначала вывод потом инкремент b=2
// c = (2+ ++a); alert(c);  // Ответ 5 в начале а=2, далее инкремент а=3, 2+3=5
// d = (2+ b++); alert(d);  // Ответ 4 в начале b=2, 2+2=4, после инкеремнта b=3,
// alert(a);                // Ответ 3 из строки c = (2+ ++a); alert(c);
// alert(b);                // Ответ 3 из последней строки d = (2+ b++); alert(d);
//
//
// // // Lesson 2.2
// let a = 2;
// let x = 1 + (a *= 2); // 5
// // (a *= 2) = a * 2 = 2 * 2 = 4
// // 1 + 4 = 5
//
//
// // // Lesson 2.3
// function getRandomNumber(max) {
//     return Math.round(Math.random() * max);
// }
function getRandomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//
// function compare(num1, num2) {
//     if ((num1 >= 0) && (num2 >= 0)) { // если оба положительные то разница 1 и 2
//         return num1 - num2;
//     } else if ((num1 < 0) && (num2 < 0)) { // если оба отрицательные то произведение
//         return num1 * num2;
//     } else { //во всех остальных знаки будут разные, делаем сложение
//         return num1 + num2;
//     }
// }
//
// a = getRandomRange(-100, 100);
// console.log(a);
// b = getRandomRange(-100, 100);
// console.log(b);
// console.log(compare(a, b));
// //alert(compare(a, b));
//
//
//
// // // Lesson 2.4
//
// function multiplication(x, y) {
//     return x * y;
// }
//
// function devision(x, y) {
//     return x / y;
// }
//
// function addiction(x, y) {
//     return x + y;
// }
//
// function deduction(x, y) {
//     return x - y;
// }
//
// // // Lesson 2.5
//
// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case multiplication:
//             return multiplication(arg1, arg2);
//         case devision:
//             return devision(arg1, arg2);
//         case addiction:
//             return addiction(arg1, arg2);
//         case deduction:
//             return deduction(arg1, arg2);
//     }
// }
//
// console.log(mathOperation(15, -44, deduction));

// Lesson 2.6
let summ = getRandomRange(1000, 1020); // получим случайное число в диапазоне
//console.log(summ);

function suffix(num) {
    let s = " рублей";
    num = num % 100;
    if (!(num >= 11 && num <= 14)) {
        num = num % 10;
        switch (num) { // на основе последнего числа, выбираем правильное окончание
            case 1:
                s = " рубль";
                break;
            case 2:
            case 3:
            case 4:
                s = " рубля";
                break;
            default:
                s = " рублей";
                break;
        }
    }
    return s;

}

console.log(summ + suffix(summ));



// // Lesson 2.7
//
// function power(val, pow) {
//     if (pow === 1) {
//         return val;
//     } else {
//         return val * power(val, pow - 1);
//     }
//
// }
//
// console.log(power(4, 5));