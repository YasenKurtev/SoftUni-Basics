function flowerShop(input){

    let flower1 = Number(input[0]);
    let flower2 = Number(input[1]);
    let flower3 = Number(input[2]);
    let flower4 = Number(input[3]);
    let giftPrice = Number(input[4]);

    let sumFlower1 = flower1 * 3.25;
    let sumFlower2 = flower2 * 4;
    let sumFlower3 = flower3 * 3.50;
    let sumFlower4 = flower4 * 8;
    let sumTotal = sumFlower1 + sumFlower2 + sumFlower3 + sumFlower4;
    let sumFinal = sumTotal * 0.95;

    let diff = Math.abs(giftPrice - sumFinal);

    if(giftPrice <= sumFinal){
        console.log(`She is left with ${Math.floor(diff)} leva.`);
    }else if(giftPrice > sumFinal){
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
    }
    
}

flowerShop([15,
    7,
    5,
    10,
    100
    ])