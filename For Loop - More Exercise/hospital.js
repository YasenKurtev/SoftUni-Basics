function hospital(input){

    let days = Number(input[0]);
    let index = 1;
    let patientsPerDay = Number(input[index]);

    let treatedCount = 0;
    let untreatedCount = 0;
    let doctorsCount = 7;

    for(let i = 1; i <= days; i++){
        patientsPerDay = Number(input[index]);
        if(index % 3 === 0 && untreatedCount > treatedCount){
            doctorsCount++;
        }
        if(patientsPerDay <= doctorsCount){
            treatedCount += patientsPerDay;
            index++;
        }else{
            untreatedCount += patientsPerDay - doctorsCount;
            treatedCount += doctorsCount;
            index++;
        }

    }

    console.log(`Treated patients: ${treatedCount}.`);
    console.log(`Untreated patients: ${untreatedCount}.`);

}

hospital([6,
    25,
    25,
    25,
    25,
    25,
    2
    
    ])