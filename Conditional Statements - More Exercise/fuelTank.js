function fuelTank(input) {

    let fuelType = input[0];
    let fuelLeft = Number(input[1]);

    switch (fuelType) {
        case "Diesel":
            if (fuelLeft < 25) {
                console.log(`Fill your tank with diesel!`);
            } else {
                console.log(`You have enough diesel.`);
            } break;
        case "Gasoline":
            if (fuelLeft < 25) {
                console.log(`Fill your tank with gasoline!`);
            } else {
                console.log(`You have enough gasoline.`);
            } break;
        case "Gas":
            if (fuelLeft < 25) {
                console.log(`Fill your tank with gas!`);
            } else {
                console.log(`You have enough gas.`);
            } break;
        default:
            console.log(`Invalid fuel!`);
    }

}

fuelTank(["gas", 25])