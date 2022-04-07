function gameOfIntervals(input){

    let movesCount = Number(input[0]);
    let index = 1;
    let num = Number(input[index]);

    let gropu1 = 0;
    let gropu2 = 0;
    let gropu3 = 0;
    let gropu4 = 0;
    let gropu5 = 0;
    let invalid = 0;
    let total = 0;

    for(let i = 1; i <= movesCount; i++){
        num = Number(input[index]);
        if(num >= 0 && num <= 9){
            gropu1++;
            total += num * 0.20;
            index++;
        }else if(num >= 10 && num <= 19){
            gropu2++;
            total += num * 0.30;
            index++;
        }else if(num >= 20 && num <= 29){
            gropu3++;
            total += num * 0.40;
            index++;
        }else if(num >= 30 && num <= 39){
            gropu4++;
            total += 50;
            index++;
        }else if(num >= 40 && num <= 50){
            gropu5++;
            total += 100;
            index++;
        }else if(num < 0 || num > 50){
            invalid++;
            total = total / 2;
            index++;
        }
    }
    console.log(total.toFixed(2));
    console.log(`From 0 to 9: ${(gropu1 / movesCount * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(gropu2 / movesCount * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(gropu3 / movesCount * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(gropu4 / movesCount * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(gropu5 / movesCount * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalid / movesCount * 100).toFixed(2)}%`);
}

gameOfIntervals([10,
    43,
    57,
    -12,
    23,
    12,
    0,
    50,
    40,
    30,
    20
    ])