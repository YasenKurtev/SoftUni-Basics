function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishermanCount = Number(input[2]);

    shipCost = 0;

    if (season === "Spring") {
        shipCost = 3000;
    } else if (season === "Summer" || season === "Autumn") {
        shipCost = 4200;
    } else {
        shipCost = 2600;
    }

    if (fishermanCount <= 6) {
        shipCost = shipCost * 0.90;
    } else if (fishermanCount >= 7 && fishermanCount <= 11) {
        shipCost = shipCost * 0.85;
    } else {
        shipCost = shipCost * 0.75;
    }

    if (fishermanCount % 2 === 0 && season !== "Autumn") {
        shipCost = shipCost * 0.95;
    }

    let diff = Math.abs(budget - shipCost);
    if (budget >= shipCost) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }

}

fishingBoat(["2000",
"Winter",
"13"])


