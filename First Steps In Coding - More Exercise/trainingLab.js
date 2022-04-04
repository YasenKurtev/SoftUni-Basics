function trainingLab(input){

    let w = Number(input[0]);
    let h = Number(input[1]);

    let wInCM = w * 100;
    let hInCM = h * 100;

    let realH = hInCM - 100;
    let desksPerRowCount = (realH - (realH % 70)) / 70;

    let rowCount = (wInCM - (wInCM % 120)) / 120;

    let seatCount = desksPerRowCount * rowCount - 3;

    console.log(seatCount);
}

trainingLab([8.4,
    5.2
    ])