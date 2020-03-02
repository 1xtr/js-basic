// function getRandomRange(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
function NumberObj() {
    this.units = 0;
    this.tens = 0;
    this.hundreds = 0;
    this.add = function (str) {
        numberObj.units = str[str.length - 1];
        if (str.length >= 2) {
            numberObj.tens = str[str.length - 2];
        }
        if (str.length >= 3) {
            numberObj.hundreds = str[str.length - 3];
        }
    };
}

function getNumber() {
    let number = +prompt("Введите целое число от 0 до 999");
    //console.log(number + " " + typeof number);
    if (isNaN(number)) {
        console.log("Nan, try again");
        return getNumber();
    } else if (!(number === parseInt(number, 10))) {
        console.log("float number, try again");
        return getNumber();
    } else if (number < 0 || number > 999) {
        console.log("Not in range [0 - 999], try again");
        return getNumber();
    } else {
        return String(number);
    }
}

let numStr = getNumber();
let numberObj = new NumberObj();
if (!(numStr === "0")) {
    numberObj.add(numStr);
}

console.log(numberObj);