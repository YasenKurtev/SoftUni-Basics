function operationsBetweenNumbers(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let op = input[2];

    let sum = 0;
    let isValid = true;

    if (op === "+") {
        sum = n1 + n2;
    } else if (op === "-") {
        sum = n1 - n2;
    } else if (op === "*") {
        sum = n1 * n2;
    } else if (op === "/") {
        if (n2 === 0) {
            isValid = false;
        } else {
            sum = n1 / n2;
        }
    } else if (op === "%") {
        if (n2 === 0) {
            isValid = false;
        } else {
            sum = n1 % n2;
        }
    }

    if (op === "+" || op === "-" || op === "*") {
        if (sum % 2 === 0) {
            console.log(`${n1} ${op} ${n2} = ${sum} - even`);
        } else {
            console.log(`${n1} ${op} ${n2} = ${sum} - odd`);
        }
    } else if ((op === "/" || op === "%") && isValid) {
        if (op === "/") {
            console.log(`${n1} / ${n2} = ${sum.toFixed(2)}`);
        } else {
            console.log(`${n1} % ${n2} = ${sum}`);
        }
    }else{
        console.log(`Cannot divide ${n1} by zero`)
    }

}

operationsBetweenNumbers(["123",
    "12",
    "/"])







