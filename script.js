// 1
let tempC = +prompt('Insert temperature in Celsius');
let tempF = (9/5) * tempC + 32;
alert(`Temperature ${tempC}C in Fahrenheit ${tempF}F `);

// 2
let admin, name;
name = 'Vasili';
admin = name;
alert(admin);

// 3
console.log(10 + 10 + "10");
// 2010
console.log(10 + "10" + 10);
// 101010
console.log(10 + 10 + +"10");
// 30
console.log(10/-"");
// -Infinity
console.log(10/+"2,5");
// NaN