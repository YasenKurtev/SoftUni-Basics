function lunchBreak(input){

    let seriesName = input[0];
    let episodeLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let lunchBreak = breakLength / 8;
    let relaxBreak = breakLength / 4;
    let leftBreak = breakLength - (lunchBreak + relaxBreak);

    let diff = Math.abs(leftBreak - episodeLength);

    if (leftBreak >= episodeLength){
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(diff)} minutes free time.`);
    }else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(diff)} more minutes.`)
    }
}

lunchBreak(["Game of Thrones", "60", "96"])