function truckDriver(input) {

    let season = input[0];
    let kmPerMonth = Number(input[1]);

    let money = 0;

    if(kmPerMonth > 10000 && kmPerMonth <= 20000){
        money = kmPerMonth * 1.45;
    }

    if(season === "Spring" || season === "Autumn"){
        if(kmPerMonth < 5000){
            money = kmPerMonth * 0.75;
        }else if(kmPerMonth > 5000 && kmPerMonth <= 10000){
            money = kmPerMonth * 0.95;
        }
    }else if(season === "Summer"){
        if(kmPerMonth < 5000){
            money = kmPerMonth * 0.90;
        }else if(kmPerMonth > 5000 && kmPerMonth <= 10000){
            money = kmPerMonth * 1.10;
        }
    }else if(season === "Winter"){
        if(kmPerMonth < 5000){
            money = kmPerMonth * 1.05;
        }else if(kmPerMonth > 5000 && kmPerMonth <= 10000){
            money = kmPerMonth * 1.25;
        }
    }


    console.log((money * 4 * 0.90).toFixed(2));

}

truckDriver(["Autumn",
    8600
    ])