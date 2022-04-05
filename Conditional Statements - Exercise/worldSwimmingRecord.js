function worldSwimmingRecord(input){

    let recordSec = Number(input[0]);
    let distanceM = Number(input[1]);
    let timeSecForOneM = Number(input[2]);

    let delay = Math.floor(distanceM / 15);
    let delayInSec = delay * 12.5;

    let time = distanceM * timeSecForOneM + delayInSec;

    let diff = Math.abs(recordSec - time);

    if (time < recordSec){
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }

}

worldSwimmingRecord(["55555.67", "3017", "5.03"])