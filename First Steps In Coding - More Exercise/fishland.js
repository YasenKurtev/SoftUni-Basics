function fishland(input){

    let mackerelPriceForKG = Number(input[0]);
    let spratPriceForKG = Number(input[1]);
    let bonitoKG = Number(input[2]);
    let horseMackerelKG = Number(input[3]);
    let clamsKG = Number(input[4]);

    let bonitoPriceForKG = mackerelPriceForKG * 1.60;
    let horseMackerelPriceForKG = spratPriceForKG * 1.80;
    let clamsPriceForKG = 7.50;

    let bonitoTotalPrice = bonitoKG * bonitoPriceForKG;
    let horseMackerelTotalPRice = horseMackerelKG * horseMackerelPriceForKG;
    let clamsTotalPrice = clamsKG * clamsPriceForKG;

    let totalPrice = bonitoTotalPrice + horseMackerelTotalPRice + clamsTotalPrice;

    console.log(totalPrice.toFixed(2));
}

fishland([6.90,
    4.20,
    1.5,
    2.5,
    1
    ])