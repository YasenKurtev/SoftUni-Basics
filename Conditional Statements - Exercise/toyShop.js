function toyShop(input){

    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let totalCount = puzzleCount + dollCount
    + bearCount + minionCount + truckCount;
    let totalPrice = puzzleCount * 2.60 + dollCount * 3
    + bearCount * 4.10 + minionCount * 8.20 + truckCount * 2;

    if(totalCount >= 50){
        totalPrice = totalPrice * 0.75;
    }

    totalPrice = totalPrice * 0.90;
    let diff = Math.abs(totalPrice - tripPrice);

    if(totalPrice >= tripPrice){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    }else{
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }

}

toyShop([320, 8, 2, 5, 5, 1])