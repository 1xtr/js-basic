let result = "";
function simpleNumber(min, max) {
    nextStep:
    for (let  i = min; i <= max; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) continue nextStep;
        }
        result += `${i},`;
        console.log(result);
    }

}

console.log(simpleNumber(2, 100));
