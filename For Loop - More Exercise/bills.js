function bills(input) {

    let months = Number(input[0]);
    let index = 1;
    let taxElectricity = Number(input[index]);

    let totalElectricity = 0;
    let totalWater = months * 20;
    let totalInternet = months * 15;
    let totalOther = 0;

    for(let i = 1; i <= months; i++){
        taxElectricity = Number(input[index]);
        totalElectricity += taxElectricity;
        totalOther += (taxElectricity + 20 + 15) * 1.20;
        index++;
    }

    let totalTax = totalElectricity + totalInternet + totalWater + totalOther;

    console.log(`Electricity: ${totalElectricity.toFixed(2)} lv`);
    console.log(`Water: ${totalWater.toFixed(2)} lv`);
    console.log(`Internet: ${totalInternet.toFixed(2)} lv`);
    console.log(`Other: ${totalOther.toFixed(2)} lv`);
    console.log(`Average: ${(totalTax / months).toFixed(2)} lv`);

}

bills([5,
    68.63,
    89.25,
    132.53,
    93.53,
    63.22
    ])


