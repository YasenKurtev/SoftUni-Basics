function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let destination = 0;
    let type = 0;
    let price = 0;

    switch (season) {
        case "summer":
            if (budget <= 100) {
                price = budget * 0.30;
                destination = "Bulgaria";
                type = "Camp";
            } else if (budget <= 1000) {
                price = budget * 0.40;
                destination = "Balkans";
                type = "Camp";
            } else {
                price = budget * 0.90;
                destination = "Europe";
                type = "Hotel";
            } break;
        case "winter":
            if (budget <= 100) {
                price = budget * 0.70;
                destination = "Bulgaria";
                type = "Hotel";
            } else if (budget <= 1000) {
                price = budget * 0.80;
                destination = "Balkans";
                type = "Hotel";
            } else {
                price = budget * 0.90;
                destination = "Europe";
                type = "Hotel";
            } break;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${price.toFixed(2)}`);

}

journey(["1500", "summer"])