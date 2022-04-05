function firm(input){

    let hours = Number(input[0]);
    let days = Number(input[1]);
    let workersOvertime = Number(input[2]);

    let hoursWork = Math.floor(days * 0.90 * 8);
    let hoursOvertime = Math.floor(workersOvertime * (2 * days));
    let totalHours = Math.floor(hoursWork + hoursOvertime);
    let diff = Math.abs(hours - totalHours);

    if(hours <= totalHours){
        console.log(`Yes!${Math.floor(diff)} hours left.`);
    }else if(hours > totalHours){
        console.log(`Not enough time!${Math.floor(diff)} hours needed.`)
    }

}

firm([99,
    3,
    1
    ])