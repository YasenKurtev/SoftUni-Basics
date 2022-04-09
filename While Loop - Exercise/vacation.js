function vacation(input) {

    let index = 0;
    let vacationPrice = Number(input[index]);
    index++;
    let moneyAvailable = Number(input[index]);
    index++;

    let daysSpend = 0;
    let daysTotal = 0;

    while (moneyAvailable < vacationPrice) {
        let command = input[index];
        index++;
        let moneyTemp = Number(input[index]);
        index++;
        daysTotal++;

        switch (command) {
            case "save":
                moneyAvailable += moneyTemp;
                daysSpend = 0;
                break;
            
            case "spend":
                daysSpend++;
                moneyAvailable -= moneyTemp;
                if (moneyAvailable < 0) {
                    moneyAvailable = 0;
                }
                break;
        }

        if (daysSpend === 5) {
            console.log(`You can't save the money.`);
            console.log(daysTotal);
            break;
        }
    }

    if (moneyAvailable >= vacationPrice) {
        console.log(`You saved the money for ${daysTotal} days.`);
    }

}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
