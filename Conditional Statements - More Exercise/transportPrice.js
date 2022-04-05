function transportPrice(input){

    let n = Number(input[0]);
    let d = input[1];

    if(n < 20 && d === "day"){
        console.log((0.70 + n * 0.79).toFixed(2));
    }else if(n < 20 && d === "night"){
        console.log((0.70 + n * 0.90).toFixed(2));
    }else if(n >= 20 && n < 100 && d === "day"){
        console.log((n * 0.09).toFixed(2));
    }else if(n >= 20 && n < 100 && d === "night"){
            console.log((n * 0.09).toFixed(2));
    }else if(n >= 100 && d === "day"){
        console.log((n * 0.06).toFixed(2));
    }else if(n >= 100 && d === "night"){
        console.log((n * 0.06).toFixed(2));
    }

}

transportPrice([7,
    "night"
    
    ])