function circleAreaAndParameter(input){

    let r = Number(input[0]);

    let areaCircle = Math.PI * r * r;
    let parameterCircle = 2 * Math.PI * r;

    console.log(areaCircle.toFixed(2));
    console.log(parameterCircle.toFixed(2));

}

circleAreaAndParameter([3])