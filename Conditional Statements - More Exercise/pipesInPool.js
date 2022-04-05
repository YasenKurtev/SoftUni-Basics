function pipesInPool(input){

    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let p1Liters = h * p1;
    let p2Liters = h * p2;
    let totalLiters = p1Liters + p2Liters;
    let poolPercent = (100 * totalLiters) / v;
    let p1Percent = (100 * p1Liters) / totalLiters;
    let p2Percent = (100 * p2Liters) / totalLiters;

    let diff = Math.abs(v - totalLiters);

    if(v >= totalLiters){
        console.log(`The pool is ${poolPercent.toFixed(2)}% full. Pipe 1: ${p1Percent.toFixed(2)}%. Pipe 2: ${p2Percent.toFixed(2)}%.`);
    }else if(v < totalLiters){
        console.log(`For ${h.toFixed(2)} hours the pool overflows with ${diff.toFixed(2)} liters.`);
    }

}

pipesInPool([100,
    100,
    100,
    2.5
    ])