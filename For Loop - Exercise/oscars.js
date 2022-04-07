function oscars(input) {
    let index = 0;
    let actorName = input[index];
    index++;
    let points = Number(input[index]);
    index++;
    let juryCount = Number(input[index]);
    index++;

    for (let i = 1; i <= juryCount; i++) {
        let juryName = input[index];
        index++;
        let juryPoints = Number(input[index]);
        index++;

        points += juryName.length * juryPoints / 2;

        if (points > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`)
            break;
        }
    }

    let diff = Math.abs(points - 1250.5);

    if (points < 1250.5) {
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
    }

}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

