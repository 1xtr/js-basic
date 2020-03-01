// function getRandomRange(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function getNumber() {
    let number = +prompt("Введите целое число от 0 до 999");
    //console.log(number + " " + typeof number);
    if (isNaN(number)) {
        console.log("Nan");
        return getNumber();
    } else if (!(number === parseInt(number, 10))) {
        console.log("float number");
        return getNumber();
    } else if (number < 0 || number > 999) {
        console.log("Not in range [0 - 999], sorry");
        return getNumber();
    } else {
        console.log("gotcha!");
        return number;
    }

}

console.log(getNumber());
