function tennisRanklist(input) {

    let index = 0;
    let tournamentsCount = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;

    let tournamentPoints = 0;
    let win = 0;

    for (let i = 0; i < tournamentsCount; i++) {
        let tournamentStage = input[index];
        index++;

        switch (tournamentStage) {
            case "W":
                tournamentPoints += 2000; win++; break;
            case "F":
                tournamentPoints += 1200; break;
            case "SF":
                tournamentPoints += 720; break;
        }

    }

    console.log(`Final points: ${tournamentPoints + startPoints}`);
    console.log(`Average points: ${Math.floor(tournamentPoints / tournamentsCount)}`);
    console.log(`${(win / tournamentsCount * 100).toFixed(2)}%`);

}

tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
