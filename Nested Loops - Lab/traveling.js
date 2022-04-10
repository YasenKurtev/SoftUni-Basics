function traveling(input){

    let index = 0;
    let command = input[index];

    let budget = 0;
    let savings = 0;

    while(command !== "End"){
        index++;
        budget = Number(input[index]);
        savings = 0;

        while (savings < budget){
            index++;
            savings += Number(input[index]);
        }
        console.log(`Going to ${command}!`);
        index++;
        command = input[index];
    }

}

traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
