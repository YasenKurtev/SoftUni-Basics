function cake(input) {

    let w = Number(input[0]);
    let l = Number(input[1]);
    let index = 2;
    let command = input[index];
    index++;

    let cakeSize = w * l;
    let isCake = true;

    while (command !== "STOP") {
        let piecesCount = Number(command);
        cakeSize -= piecesCount;

        if(cakeSize < 0){
            isCake = false;
            break;
        }
        command = input[index];
        index++;

    }

    if (isCake){
        console.log(`${cakeSize} pieces are left.`)
    }else{
        console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`)
    }

}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

