function depositCalculator (input){
    let depositAmount = Number(input[0]);
    let depositTerm = Number(input[1]);
    let annualIncrease = Number(input[2]);
    
    let increaseForOneYear = depositAmount * (annualIncrease / 100);
    let increaseForOneMonth = increaseForOneYear / 12;
    let res = depositAmount + increaseForOneMonth * depositTerm;
    console.log(res);
}

depositCalculator([200, 3, 5.7]);