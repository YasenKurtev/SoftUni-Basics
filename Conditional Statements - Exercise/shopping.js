function shopping(input){

    let budget = Number(input[0]);
    let GPU = Number(input[1]);
    let CPU = Number(input[2]);
    let RAM = Number(input[3]);

    let priceGPU = GPU * 250;
    let priceCPU = CPU * (priceGPU * 0.35);
    let priceRAM = RAM * (priceGPU * 0.10);

    let totalPrice = priceGPU + priceCPU + priceRAM;

    if (GPU > CPU){
        totalPrice = totalPrice * 0.85;
    }

    let diff = Math.abs(budget - totalPrice);

    if (budget >= totalPrice){
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    }else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);

    }

}

shopping(["920.45", "3", "1", "1"])