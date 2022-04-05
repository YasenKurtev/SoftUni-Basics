function fuelTankPart2(input) {

    let fuelType = input[0];
    let fuelQuantity = Number(input[1]);
    let discountCard = input[2];

    let sum = 0;

    switch (fuelType) {
        case "Gas":
            if (discountCard === "Yes") {
                sum = fuelQuantity * 0.85;
            } else if (discountCard === "No") {
                sum = fuelQuantity * 0.93;
            } break;
        case "Gasoline":
            if (discountCard === "Yes") {
                sum = fuelQuantity * 2.04;
            } else if (discountCard === "No") {
                sum = fuelQuantity * 2.22;
            } break;
        case "Diesel":
            if (discountCard === "Yes") {
                sum = fuelQuantity * 2.21;
            } else if (discountCard === "No") {
                sum = fuelQuantity * 2.33;
            } break;
    }

    if(fuelQuantity >= 20 && fuelQuantity <= 25){
        sum = sum * 0.92;
    }else if(fuelQuantity > 25){
        sum = sum * 0.90;
    }

    console.log(`${sum.toFixed(2)} lv.`);

}

fuelTankPart2(["Diesel",
    19,
    "No"
    ])