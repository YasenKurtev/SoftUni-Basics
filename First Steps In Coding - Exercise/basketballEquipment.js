function basketballEquipment(input){

    let annualTax = Number(input[0]);

    let sneakers = annualTax - annualTax * (40 / 100);
    let kit = sneakers - sneakers * (20 / 100);
    let ball = kit / 4;
    let accessories = ball / 5;

    let res = annualTax + sneakers + kit + ball + accessories;

    console.log(res);
}

basketballEquipment(["365"]);