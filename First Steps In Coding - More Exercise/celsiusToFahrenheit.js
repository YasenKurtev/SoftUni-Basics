function celsiusToFahrenheit(input){

    let tempInC = Number(input[0]);

    let tempInF = tempInC * 1.8 + 32;

    console.log(tempInF.toFixed(2));

}

celsiusToFahrenheit([25])