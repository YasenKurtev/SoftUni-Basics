function areaOfFigures(input){

    let shape = (input[0]);

    if(shape === "square"){
        let squareNum = Number(input[1]);
        console.log((squareNum * squareNum).toFixed(3));
    }else if(shape === "rectangle"){
        let rectangleNum1 = Number(input[1]);
        let rectangleNum2 = Number(input[2]);
        console.log((rectangleNum1 * rectangleNum2).toFixed(3));
    }else if(shape === "circle"){
        let circleNum = Number(input[1]);
        console.log((Math.PI * (circleNum * circleNum)).toFixed(3));
    }else if(shape === "triangle"){
        let triangleNum1 = Number(input[1]);
        let triangleNum2 = Number(input[2]);
        console.log(((triangleNum1 / 2) * triangleNum2).toFixed(3));
    }
}

areaOfFigures(["triangle", "4.5", "20"]);