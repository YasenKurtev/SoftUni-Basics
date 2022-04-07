function logistics(input){

    let cargoCount = Number(input[0]);
    let index = 1;
    let cargoTons = Number(input[index]);

    let withVan = 0;
    let withTruck = 0;
    let withTrain = 0;
    let totalTons = 0;
    let totalPrice = 0;
    
    for(let i = 1; i <= cargoCount; i++){
        cargoTons = Number(input[index]);
        if(cargoTons <= 3){
            totalPrice += cargoTons * 200;
            withVan += cargoTons;
            totalTons += cargoTons;
            index++;
        }else if(cargoTons >= 4 && cargoTons <= 11){
            totalPrice += cargoTons * 175;
            withTruck += cargoTons;
            totalTons += cargoTons;
            index++;
        }else if(cargoTons >= 12){
            totalPrice += cargoTons * 120;
            withTrain += cargoTons;
            totalTons += cargoTons;
            index++;
        }
    }

    console.log((totalPrice / totalTons).toFixed(2));
    console.log(`${(withVan / totalTons * 100).toFixed(2)}%`);
    console.log(`${(withTruck / totalTons * 100).toFixed(2)}%`);
    console.log(`${(withTrain / totalTons * 100).toFixed(2)}%`);
}

logistics([4,
    1,
    5,
    16,
    3
    ])