function maxNumber(input) {

    let num = input[0];
    let index = 1;
    let min = Number.MAX_SAFE_INTEGER;

    while (num !== "Stop") {
        let numAsNumber = Number(num);
        if (numAsNumber < min) {
            min = num;
        }
        num = input[index];
        index++;
    }
    console.log(min);
}

maxNumber(["100",
"99",
"80",
"70",
"Stop"])

