function grades(input){

    let studentsCount = Number(input[0]);
    let index = 1;
    let examGrade = Number(input[index]);

    let poorCount = 0;
    let goodCount = 0;
    let veryGoodCount = 0;
    let excellentCount = 0;
    let totalCount = 0;

    for(let i = 1; i <= studentsCount; i++){
        examGrade = Number(input[index]);
        if(examGrade >= 2.00 && examGrade <= 2.99){
            poorCount++;
            totalCount += examGrade;
            index++;
        }else if(examGrade >= 3.00 && examGrade <= 3.99){
            goodCount++;
            totalCount += examGrade;
            index++;
        }else if(examGrade >= 4.00 && examGrade <= 4.99){
            veryGoodCount++;
            totalCount += examGrade;
            index++;
        }else if(examGrade >= 5.00){
            excellentCount++;
            totalCount += examGrade;
            index++;
        }
    }

    console.log(`Top students: ${(excellentCount / studentsCount * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(veryGoodCount / studentsCount * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(goodCount / studentsCount * 100).toFixed(2)}%`);
    console.log(`Fail: ${(poorCount / studentsCount * 100).toFixed(2)}%`);
    console.log(`Average: ${(totalCount / studentsCount).toFixed(2)}`);
}

grades([10,
    3.00,
    2.99,
    5.68,
    3.01,
    4,
    4,
    6.00,
    4.50,
    2.44,
    5
    ])