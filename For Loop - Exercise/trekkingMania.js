function trekingMania(input) {

    let index = 0;
    let groupCount = Number(input[index]);
    index++;

    let musala = 0;
    let montBlanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 0; i <= groupCount; i++) {
        let peopleCount = Number(input[index]);;
        index++;

        if (peopleCount <= 5) {
            musala += peopleCount;
        } else if (peopleCount >= 6 && peopleCount <= 12) {
            montBlanc += peopleCount;
        } else if (peopleCount >= 13 && peopleCount <= 25) {
            kilimanjaro += peopleCount;
        } else if (peopleCount >= 26 && peopleCount <= 40) {
            k2 += peopleCount;
        } else if (peopleCount >= 41) {
            everest += peopleCount;
        }
    }

    let sum = musala + montBlanc + kilimanjaro + k2 + everest;

    console.log(`${(musala / sum * 100).toFixed(2)}%`);
    console.log(`${(montBlanc / sum * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / sum * 100).toFixed(2)}%`);
    console.log(`${(k2 / sum * 100).toFixed(2)}%`);
    console.log(`${(everest / sum * 100).toFixed(2)}%`);

}

trekingMania(["5",
"25",
"41",
"31",
"250",
"6"])



