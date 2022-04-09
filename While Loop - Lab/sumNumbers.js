function sumNumbers(input){

    let goalNum = input[0];
    let sumNum = 0;
    let index = 1;
    
    while(sumNum <= goalNum){
        let currentNum = input[index];
        sumNum += currentNum;
        index++;
    }

    console.log(sumNum);

}

sumNumbers(["100",
"10",
"20",
"30",
"40"])

