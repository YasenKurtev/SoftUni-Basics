function sumPrimeNonPrime(input) {

    let index = 0;
    let command = input[index];

    let sumPrime = 0;
    let sumNonPrime = 0;

    while (command !== "stop") {
        let num = Number(command);

        if (num < 0) {
            console.log(`Number is negative.`);
            index++;
            command = input[index];
            continue;
        }

        if (num === 1) {
            sumPrime += num;
            index++;
            command = input[index];
            continue;
        }

        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
            }
        }

        if (isPrime) {
            sumPrime += num;
        } else {
            sumNonPrime += num;
        }

        index++;
        command = input[index];
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

sumPrimeNonPrime(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"])

