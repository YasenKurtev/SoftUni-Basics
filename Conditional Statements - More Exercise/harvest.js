function harvest(input){

    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let workersCount = Number(input[3]);

    let totalGrapes = x * y;
    let wineLiters = (totalGrapes * 0.40) / 2.5;
    let diff = Math.abs(wineLiters - z);

    if(wineLiters >= z){
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineLiters)} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(diff / workersCount)} liters per person.`);
    }else if(wineLiters < z){
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);
    }

}

harvest([1020,
    1.5,
    425,
    4
    ])