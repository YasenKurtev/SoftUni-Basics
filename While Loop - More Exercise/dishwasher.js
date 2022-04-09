function dishwasher(input) {

    let bottlesCount = Number(input[0]);
    let index = 1;
    let command = input[index];

    let totalPlates = 0;
    let totalPots = 0;
    let detergentTotal = bottlesCount * 750;
    let isEnough = true;
    
    while (command !== "End") {
        if (index % 3 === 0) {
            detergentTotal -= command * 15;
            totalPots += Number(command);
            index++;
        } else {
            detergentTotal -= command * 5;
            totalPlates += Number(command);
            index++;
        }
        command = input[index];
        

        if(detergentTotal < 0){
            console.log(`Not enough detergent, ${Math.abs(detergentTotal)} ml. more necessary!`);
            isEnough = false;
            break;
        }
        

    }

    if(isEnough){
    console.log(`Detergent was enough!`);
    console.log(`${totalPlates} dishes and ${totalPots} pots were washed.`);
    console.log(`Leftover detergent ${detergentTotal} ml.`);
    }
}

dishwasher([1,
    10,
    15,
    10,
    12,
    13,
    30])