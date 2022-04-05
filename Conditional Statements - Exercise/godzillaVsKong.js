function godzillaVskong(input){

    let budget = Number(input[0]);
    let statsCount = Number(input[1]);
    let clothingPriceForOnePerson = Number(input[2]);

    let decor = budget * 0.10;
    let clothingPrice = clothingPriceForOnePerson * statsCount;

    if (statsCount > 150){
        clothingPrice = clothingPrice * 0.90;
    }

    let filmPrice = decor + clothingPrice;
    let diff = Math.abs(budget - filmPrice);

    if (filmPrice > budget){
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    }else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }

}

godzillaVskong(["9587.88", "222", "55.68"])