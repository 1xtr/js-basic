// Lesson 2.1
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 перфикс, сначала инкремент потом результат
// d = b++; alert(d);           // 1 постфикс, тут наоборот, сначала вывод потом инкремент
// c = (2+ ++a); alert(c);      // 5 а=2, инкремент а=3, 2 +3 = 5
// d = (2+ b++); alert(d);      // 4 b=2 после инкеремнта из стр2, 2+2 =4, инкремент b=3
// alert(a);                    // 3 из строки c = (2+ ++a); alert(c);
// alert(b);                    // 3 из последней строки d = (2+ b++); alert(d);


// // Lesson 2.2
// var a = 2;
// var x = 1 + (a *= 2); // 5
// // (a *= 2) = a * 2 = 2 * 2 = 4
// // 1 + 4 = 5


// Lesson 2.3
function getRandomNumber(max) {
    return Math.round(Math.random() * max);
}

function isNegative(num1, num2) {
    if ((num1 >= 0) && (num2 >= 0)) {
        return num1 - num2;
    } else if ((num1 < 0) && (num2 < 0)) {
        return num1 * num2;
    } else {
        return num1 + num2;
    }
}

a = getRandomNumber(100);
b = getRandomNumber(100);

alert(isNegative(a, b));