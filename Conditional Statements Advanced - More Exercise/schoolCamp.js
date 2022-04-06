function schoolCamp(input) {

    let season = input[0];
    let group = input[1];
    let studentsCount = Number(input[2]);
    let nightsCount = Number(input[3]);

    let sport = "";
    let price = 0;

    switch (season) {
        case "Winter":
            if (group === "boys") {
                sport = "Judo";
                price = studentsCount * nightsCount * 9.60;
            } else if (group === "girls") {
                sport = "Gymnastics";
                price = studentsCount * nightsCount * 9.60;
            } else if (group === "mixed") {
                sport = "Ski";
                price = studentsCount * nightsCount * 10;
            }
            break;
        case "Spring":
            if (group === "boys") {
                sport = "Tennis";
                price = studentsCount * nightsCount * 7.20;
            } else if (group === "girls") {
                sport = "Athletics";
                price = studentsCount * nightsCount * 7.20;
            } else if (group === "mixed") {
                sport = "Cycling";
                price = studentsCount * nightsCount * 9.50;
            }
            break;
        case "Summer":
            if (group === "boys") {
                sport = "Football";
                price = studentsCount * nightsCount * 15;
            } else if (group === "girls") {
                sport = "Volleyball";
                price = studentsCount * nightsCount * 15;
            } else if (group === "mixed") {
                sport = "Swimming";
                price = studentsCount * nightsCount * 20;
            }
            break;
            
    }

    if(studentsCount >= 50){
        price = price * 0.50;
    }else if(studentsCount >= 20 && studentsCount < 50){
        price = price * 0.85;
    }else if(studentsCount >= 10 && studentsCount < 20){
        price = price * 0.95;
    }

    console.log(`${sport} ${price.toFixed(2)} lv.`);
}

schoolCamp(["Winter",
    "mixed",
    9,
    15
    ])