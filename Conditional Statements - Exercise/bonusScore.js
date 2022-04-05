function bonusScore(input){

    let num = Number(input[0]);

    let bonusPoints = 0;
    let extraBonus = 0;

    if(num % 2 === 0){
        extraBonus = 1;
    }else if(num % 10 === 5){
        extraBonus = 2;
    }

    if(num <= 100){
        bonusPoints = 5;
    }else if(num > 100, num <= 1000){
        bonusPoints = num * (20 / 100);
    }else if(num > 1000){
        bonusPoints = num * (10 / 100);
    }

    console.log(bonusPoints + extraBonus);
    console.log(num + bonusPoints + extraBonus);
}

bonusScore(["2703"]);