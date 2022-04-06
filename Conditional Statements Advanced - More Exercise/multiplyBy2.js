function multiplyBy2(input){
    
    let index = 0;
    let num = input[index];
    index++;
    let sum = 0;

    while(true){
        if(num < 0){
            console.log("Negative number!");
            break;
        }
        sum = num * 2;
        console.log(`Result: ${sum.toFixed(2)}`);
        num = input[index];
        index++;
    }
}

multiplyBy2([12,
    43.2144,
    12.3,
    543.23,
    -20
    ])