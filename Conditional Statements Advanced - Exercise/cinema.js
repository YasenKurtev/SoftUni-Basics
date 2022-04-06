function cinema(input){

    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);

    let income = 0;

    switch(type){
        case "Premiere": income = r * c * 12.00;
        console.log(`${income.toFixed(2)} leva`); break;
        case "Normal": income = r * c * 7.50;
        console.log(`${income.toFixed(2)} leva`); break;
        case "Discount": income = r * c * 5.00;
        console.log(`${income.toFixed(2)} leva`); break;
    }

}

cinema(["Normal",
"21",
"13"])

