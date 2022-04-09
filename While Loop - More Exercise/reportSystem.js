function reportSystem(input) {

    let goalSum = Number(input[0]);
    let index = 1;
    let command = input[index];

    let sumCash = 0;
    let sumCard = 0;
    let payCash = 0;
    let payCard = 0;
    let tempSum = 0;
    let isSuccess = true;
    while (command !== "End") {
        if (index % 2 === 0 && command >= 100) {
            payCard++;
            sumCard += command;
            tempSum += command;
            console.log(`Product sold!`);
            index++;
        } else if (index % 2 !== 0 && command <= 100) {
            payCash++;
            sumCash += command;
            tempSum += command;
            console.log(`Product sold!`);
            index++;
        } else {
            console.log(`Error in transaction!`);
            index++;
        }
        command = input[index];

        if (tempSum >= goalSum) {
            isSuccess = true;
            break;
        } else {
            isSuccess = false;
        }
    }

    if (isSuccess) {
        console.log(`Average CS: ${(sumCash / payCash).toFixed(2)}`);
        console.log(`Average CC: ${(sumCard / payCard).toFixed(2)}`);
    }else if(!isSuccess){
        console.log(`Failed to collect required money for charity.`);
    }

}

reportSystem([500,
    120,
    8,
    63,
    256,
    78,
    317
])