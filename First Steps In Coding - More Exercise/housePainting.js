function housePainting(input){

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let areaFrontAndBack = (x * x) * 2 - 1.2 * 2;
    let areaSides = (y * x) * 2 - (1.5 * 1.5) * 2;

    let wallsArea = areaFrontAndBack + areaSides;
    let paintWalls = wallsArea / 3.4;
    
    let areaRoofTop = (x * y) * 2;
    let areaRoofSide = (x * h / 2) * 2;

    let roofArea = areaRoofTop + areaRoofSide;
    let paintRoof = roofArea / 4.3;

    console.log(paintWalls.toFixed(2));
    console.log(paintRoof.toFixed(2));

}

housePainting([6,
    10,
    5.2
    ])