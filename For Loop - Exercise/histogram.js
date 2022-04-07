function histogram(input) {

    let index = 0;
    let n = Number(input[index]);
    index++;

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 0; i <= n; i++) {
        let x = Number(input[index]);
        index++;
        if (x < 200) {
            p1++;
        } else if (x >= 200 && x < 400) {
            p2++;
        } else if (x >= 400 && x < 600) {
            p3++;
        } else if (x >= 600 && x < 800) {
            p4++;
        } else if(x >= 800){
            p5++;
        }
            
    }

    let p1Pr = p1 / n * 100;
    let p2Pr = p2 / n * 100;
    let p3Pr = p3 / n * 100;
    let p4Pr = p4 / n * 100;
    let p5Pr = p5 / n * 100;

    console.log(`${p1Pr.toFixed(2)}%`);
    console.log(`${p2Pr.toFixed(2)}%`);
    console.log(`${p3Pr.toFixed(2)}%`);
    console.log(`${p4Pr.toFixed(2)}%`);
    console.log(`${p5Pr.toFixed(2)}%`);

}

histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])

