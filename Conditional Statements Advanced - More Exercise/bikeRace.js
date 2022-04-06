function bikeRace(input) {

    let juniorsCount = Number(input[0]);
    let seniorsCOunt = Number(input[1]);
    let trackType = input[2];

    let totalSum = 0;

    switch (trackType) {
        case "trail":
            totalSum = (juniorsCount * 5.50 + seniorsCOunt * 7) * 0.95;
            break;
        case "cross-country":
            if (juniorsCount + seniorsCOunt >= 50) {
                totalSum = (juniorsCount * (8 * 0.75) + seniorsCOunt * (9.50 * 0.75)) * 0.95;
            } else {
                totalSum = (juniorsCount * 8 + seniorsCOunt * 9.50) * 0.95;
            }
            break;
        case "downhill":
            totalSum = (juniorsCount * 12.25 + seniorsCOunt * 13.75) * 0.95;
            break;
        case "road":
            totalSum = (juniorsCount * 20 + seniorsCOunt * 21.50) * 0.95;
            break;
    }

    console.log(totalSum.toFixed(2))

}

bikeRace([30,
    25,
    "cross-country"
])