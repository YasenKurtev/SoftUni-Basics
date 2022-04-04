function fishTank(input){

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let stuff = Number(input[3]);

    let aquariumSize = (length * width * height) * 0.001;

    let stuffSize = aquariumSize * (stuff / 100);

    let litersWater = aquariumSize - stuffSize;

    console.log(litersWater);
}

fishTank(["85", "75", "47", "17"]);

