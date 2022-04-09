function moving(input) {

    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);
    let index = 3;
    let command = input[index];
    index++;

    let flatSize = w * l * h;
    let isEnough = true;

    while (command !== "Done") {
        let boxSize = Number(command);
        flatSize -= boxSize;

        if (flatSize < 0) {
            isEnough = false;
            break;
        }

        command = input[index];
        index++;
    }

    if (isEnough) {
        console.log(`${flatSize} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${Math.abs(flatSize)} Cubic meters more.`);
    }
}

moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])

