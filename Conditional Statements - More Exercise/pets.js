function pets(input){

    let days = Number(input[0]);
    let foodLeftKG = Number(input[1]);
    let dogFoodPerDayKG = Number(input[2]);
    let catFoodPerDayKG = Number(input[3]);
    let turtleFoodPerDayG = Number(input[4]);

    let dogFood = days * dogFoodPerDayKG;
    let catFood = days * catFoodPerDayKG;
    let turtleFood = days * turtleFoodPerDayG / 1000;

    let totalFood = dogFood + catFood + turtleFood;

    let diff = Math.abs(foodLeftKG - totalFood);

    if(foodLeftKG >= totalFood){
        console.log(`${Math.floor(diff)} kilos of food left.`);
    }else if(foodLeftKG < totalFood){
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }

}

pets([5,
    10,
    2.1,
    0.8,
    321
    
    ])