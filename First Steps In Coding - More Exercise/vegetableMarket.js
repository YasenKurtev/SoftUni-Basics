function vegetableMarket(input){

    let vegiesPriceKG = Number(input[0]);
    let fruitsPriceKG = Number(input[1]);
    let vegiesKG = Number(input[2]);
    let fruitsKG = Number(input[3]);

    let totalVegiesPrice = vegiesKG * vegiesPriceKG;
    let totalFruitsPrice = fruitsKG * fruitsPriceKG;

    let totalPriceInEuro = (totalFruitsPrice + totalVegiesPrice) / 1.94;

    console.log(totalPriceInEuro.toFixed(2));

}

vegetableMarket([0.194,
    19.4,
    10,
    10
    ])