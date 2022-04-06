function matchTickets(input) {

    let budget = Number(input[0]);
    let type = input[1];
    let peopleCount = Number(input[2]);

    let transportPrice = 0;
    let ticketsPrice = 0;

    if (peopleCount >= 1 && peopleCount <= 4) {
        transportPrice = budget * 0.75;
    } else if (peopleCount >= 5 && peopleCount <= 9) {
        transportPrice = budget * 0.60;
    } else if (peopleCount >= 10 && peopleCount <= 24) {
        transportPrice = budget * 0.50;
    } else if (peopleCount >= 25 && peopleCount <= 49) {
        transportPrice = budget * 0.40;
    } else if (peopleCount >= 50) {
        transportPrice = budget * 0.25;
    }

    switch (type) {
        case "Normal":
            ticketsPrice = 249.99 * peopleCount;
            break;
        case "VIP":
            ticketsPrice = 499.99 * peopleCount;
    }

    let totalPrice = transportPrice + ticketsPrice;
    let diff = Math.abs(budget - totalPrice);

    if(budget >= totalPrice){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    }else if(budget < totalPrice){
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }

}

matchTickets([30000,
    "VIP",
    49
    ])