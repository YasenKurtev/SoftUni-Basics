function suppliesForSchool(input){

    let penPack = Number(input[0]);
    let markerPack = Number(input[1]);
    let detegentLiters = Number(input[2]);
    let discount = Number(input[3]);

    let penPrice = penPack * 5.80;
    let markerPrice = markerPack * 7.20;
    let detergentPrice = detegentLiters * 1.20;

    let totalPrice = penPrice + markerPrice + detergentPrice;
    let discountAmount = totalPrice * (discount / 100);
    let finalPrice = totalPrice - discountAmount;

    console.log(finalPrice);
}

suppliesForSchool(["4", "2", "5", "13"])