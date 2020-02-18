let a = b = c = d = e = f = g = h = i = j = "";
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

function compare(num1, num2) {
    if ((num1 >= 0) && (num2 >= 0)) {
        return num1 - num2;
    } else if ((num1 < 0) && (num2 < 0)) {
        return num1 * num2;
    } else {
        return num1 + num2;
    }
}

a = getRandomRange(-100, 100);
console.log(a);
b = getRandomRange(-100, 100);
console.log(b);
console.log(compare(a, b));
//alert(compare(a, b));

// Lesson 2.4

function getRandomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

a = b = "";
a = getRandomRange(0, 15);
console.log(a);
switch (a) {
    case 0:
    console.log("0123456789101112131415");
    break;
    default:
    for (i=a; i <= 15; i++) {
        b += i + ",";
    }
        console.log(b);

}

// Lesson 2.5

function multiplication(x, y) {
    return x * y;
}

function devision(x, y) {
    return x / y;
}

function addiction(x, y) {
    return x + y;
}

function deduction(x, y) {
    return x - y;
}

// Lesson 2.6
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case multiplication:
            return multiplication(arg1, arg2);
        case devision:
            return devision(arg1, arg2);
        case addiction:
            return addiction(arg1, arg2);
        case deduction:
            return deduction(arg1, arg2);
    }
}

console.log(mathOperation(15, -44, deduction));

// Lesson 2.7
//
console.log(typeof null); // object
console.log(typeof 0); // number
// при сравнение будут false так как разные типы
// при арифм. операциях null приводится к 0

// Lesson 2.8

function power(val, pow) {
   if (pow === 1) {
       return val;
   } else {
       return val * power(val, pow - 1);
   }

}

console.log(power(4, 5));