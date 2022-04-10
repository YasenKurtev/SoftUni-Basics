function combinations(input){

    let n = Number(input[0]);
    let combinations = 0;

    for(let a = 0; a <= 25; a++){
        for(let b = 0; b <= 25; b++){
            for(let c = 0; c <= 25; c++){
                if(a + b + c === n){
                    combinations++;
                }
            }
        }
    }
    console.log(combinations);
}

combinations([25])