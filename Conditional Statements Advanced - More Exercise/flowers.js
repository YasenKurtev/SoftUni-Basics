function flowers(input){

    let c = Number(input[0]);
    let r = Number(input[1]);
    let t = Number(input[2]);
    let season = input[3];
    let day = input[4];

    let flowersPrice = 0;

    if(season === "Spring" || season === "Summer"){
        if(season === "Spring" && t > 7){
            flowersPrice = (c * 2 + r * 4.10 + t * 2.50) * 0.95;
        }else{
            flowersPrice = c * 2 + r * 4.10 + t * 2.50;
        }
    }else if(season === "Autumn" || season === "Winter"){
        if(season === "Winter" && r >= 10){
            flowersPrice = (c * 3.75 + r * 4.50 + t * 4.15) * 0.90;
        }else{
            flowersPrice = c * 3.75 + r * 4.50 + t * 4.15;
        }
    }

    if(day === "Y"){
        flowersPrice = flowersPrice * 1.15;
    }else if(day === "N"){
        flowersPrice = flowersPrice;
    }

    if(c + r + t > 20){
        flowersPrice = flowersPrice * 0.80;
    }

    let totalPrice = flowersPrice + 2;

    console.log(totalPrice.toFixed(2));

}

flowers([3,
    10,
    9,
    "Winter",
    "N"
    ])