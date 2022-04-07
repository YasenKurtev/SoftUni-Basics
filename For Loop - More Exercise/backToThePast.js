function backToThePast(input){

    let moneyWill = Number(input[0]);
    let yearLast = Number(input[1]);

    let moneySpend = 0;
    let age = 18;

    for(let i = 1800; i <= yearLast; i++){
        if(i % 2 === 0){
            moneySpend += 12000;
            age++;
        }else{
            moneySpend += 12000 + 50 * age;
            age++;
        }
    }

    let diff = Math.abs(moneyWill - moneySpend);
    if(moneySpend <= moneyWill){
        console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`);
    }else{
        console.log(`He will need ${diff.toFixed(2)} dollars to survive.`);
    }

}

backToThePast([50000,
    1802
    ])