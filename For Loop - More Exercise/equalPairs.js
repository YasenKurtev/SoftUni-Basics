function equalPairs(input){

    let couplesCount = Number(input[0]);
    let index = 1;
    let command = Number(input[index]);

    let firstNum = 0;
    let secondNum = 0;
    let sumPrevious = 0;
    let sumNumbers = 0;
    let equalPairs = 0;
    let maxDiff = 0;
    for(let i = 1; i <= couplesCount; i++){
        sumPrevious = firstNum + secondNum;
        command = Number(input[index]);
        firstNum = command;
        index++;
        command = Number(input[index]);
        secondNum = command;
        index++;
        sumNumbers = firstNum + secondNum;
        if(sumNumbers != sumPrevious && sumNumbers != firstNum + secondNum){
        maxDiff = Math.abs(sumNumbers - sumPrevious);
        }else{
            sumNumbers = firstNum + secondNum;
        }
        
    }
    if(maxDiff === 0){
        console.log(`Yes, value=${sumNumbers}`);
    }else{
        console.log(`No, maxdiff=${maxDiff}`);
    }
    
}

equalPairs([2, 1, 2, 2, 2
    
    
    
    ])