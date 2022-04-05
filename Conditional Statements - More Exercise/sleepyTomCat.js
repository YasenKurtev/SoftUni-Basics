function sleepyTomCat(input){

    let restDays = Number(input[0]);

    let workDays = 365 - restDays;
    let playTime = workDays * 63 + restDays * 127;
    let diff = Math.abs(30000 - playTime);
    let h = Math.trunc(diff / 60);
    let m = diff % 60;

    if(playTime > 30000){
        console.log(`Tom will run away`);
        console.log(`${h} hours and ${m} minutes more for play`);
    }else if(playTime <= 30000){
        console.log(`Tom sleeps well`);
        console.log(`${h} hours and ${m} minutes less for play`);
    }

}

sleepyTomCat([20])