function cleverLily(input){

    let age = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let priceToy = Number(input[2]);

    let toy = 0;
    let money = 0;
    let moneyBro = 0;
    let moneyCash = 0;

    for (let i = 1; i <= age; i++){
        if (i % 2 === 0){
            money += 10;
            moneyCash += money;
            moneyBro += 1;
        }else{
            toy +=1;
        }
    }

    let moneyToy = toy * priceToy;
    let totalMoney = moneyCash + moneyToy - moneyBro; 

    let diff = Math.abs(totalMoney - priceWashingMachine);

    if(totalMoney >= priceWashingMachine){
        console.log(`Yes! ${diff.toFixed(2)}`);
    }else{
        console.log(`No! ${diff.toFixed(2)}`);
    }
}

cleverLily(["21",
"1570.98",
"3"])

