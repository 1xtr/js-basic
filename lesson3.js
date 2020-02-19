// Lesson 3.1
let result = "";
function simpleNumber(min, max) {
    let i = min;
    nextStep:
    while (i <= max) {
        let j = 2;
        while (j < i) {
            if (i % j === 0) {
                i++;
                continue nextStep;
            } else {
                j++;
            }
        }
        result += `${i} `;
        i++;
    }
    return result
    // for (let  i = min; i <= max; i++) {
    //     let j = 2;
    //     while (i % j === 0) {
    //         if (j < i)
    //     }
    //     for (let j = 2; j < i; j++) {
    //         if (i % j === 0) continue nextStep;
    //     }
    //     result += `${i},`;
    //     console.log(result);
    // }

}

console.log(simpleNumber(2, 100));


// Lesson 3.2

// Lesson 3.3

// Lesson 3.4

//for (let i = 0; i <= 9; console.log(i++));

// Lesson 3.5
// let i = x = "";
// for (let i = 0; i <= 20; i++) console.log(x += "x");
// or
// while (i <= 20) {
//     console.log(x += "x");
//     i++;
// }