function accountBalance(input){

    let sum = 0;
    let index = 0;
    let deposit = input[index];
    
    while(deposit !== "NoMoreMoney"){

        depositAsNumber = Number(deposit);
        if(depositAsNumber < 0){
            console.log("Invalid operation!");
            break;
        }
        sum += depositAsNumber;
        console.log(`Increase: ${depositAsNumber.toFixed(2)}`);
        index++;
        deposit = input[index];
    }
    console.log(`Total: ${sum.toFixed(2)}`);

}

accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])
