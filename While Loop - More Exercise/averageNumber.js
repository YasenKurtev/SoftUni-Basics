function averageNumber(input){

    let n = Number(input[0]);
    let index = 1;
    let command = Number(input[index]);

    let sum = 0;
    for(let i = index; i <= n; i++){
        command = Number(input[index]);
        index++;
        sum += command;
    }

    console.log((sum / n).toFixed(2));

}

averageNumber([4,
    3,
    2,
    4,
    2
    ])