function summerOutfit(input) {

    let degrees = Number(input[0]);
    let dayTime = input[1];

    let outfit = 0;
    let shoes = 0;

    if (dayTime === "Morning") {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (degrees >= 18 && degrees <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    }
    if (dayTime === "Afternoon") {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees >= 18 && degrees <= 24) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
    }
    if (dayTime === "Evening") {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees >= 18 && degrees <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)

}

    /*switch (dayTime) {
        case "Morning":
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Swetshirt";
                shoes = "Sneakers";
            } else if (degrees >= 18 && degrees <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else {
                outfit = "T-Shirt";
                shoes = "Sandals";
            }
        case "Afternoon":
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (degrees >= 18 && degrees <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            } else {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            }
        case "Evening":
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (degrees >= 18 && degrees <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else {
                outfit = "Shirt";
                shoes = "Moccasins";
            }
    }*/

summerOutfit(["22",
    "Afternoon"])



