function repainting(input){

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let hoursWork = Number(input[3]);

    let totalPaint = paint + (paint * (10 / 100));
    let totalNylon = nylon + 2;
    
    let bagsPrice = 0.40;
    let nylonPrice = totalNylon * 1.50;
    let paintPrice = totalPaint * 14.50;
    let paintThinnerPrice = paintThinner * 5.00;
    
    let totalPrice = bagsPrice + nylonPrice + paintPrice +
    paintThinnerPrice;
    
    let workPriceForOneHour = totalPrice * (30 / 100);

    let totalWorkPrice = workPriceForOneHour * hoursWork;

    let res = totalPrice + totalWorkPrice;

    console.log(res);
}

repainting(["10", "11", "4", "8"])