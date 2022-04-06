function hotelRoom(input) {

    let month = input[0];
    let nights = Number(input[1]);

    let priceApartment = 0;
    let priceStudio = 0;

    switch (month) {
        case "May":
        case "October":
            if (nights > 7 && nights <= 14) {
                priceStudio = 50 * nights * 0.95;
                priceApartment = 65 * nights;
            } else if (nights > 14) {
                priceStudio = 50 * nights * 0.70;
                priceApartment = 65 * nights * 0.90;
            } else {
                priceStudio = 50 * nights;
                priceApartment = 65 * nights;
            } break;
        case "June":
        case "September":
            if (nights > 14) {
                priceStudio = 75.20 * nights * 0.80;
                priceApartment = 68.70 * nights * 0.90;
            } else {
                priceStudio = 75.20 * nights;
                priceApartment = 68.70 * nights;
            } break;
        case "July":
        case "August":
            if (nights > 14) {
                priceStudio = 76 * nights;
                priceApartment = 77 * nights * 0.90;
            } else {
                priceStudio = 76 * nights;
                priceApartment = 77 * nights;
            } break;
    }

    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`)
}

hotelRoom(["October",
"15"])



