function graduation(input){

    let name = input[0];
    let index = 1;
    let grade = Number(input[index]);

    let sumGrade = 0;

    while(grade >= 4.00){
        
        if(grade < 4.00){
            console.log(`${name} has been excluded at ${index} grade`)
        }
        
        sumGrade += grade;
        console.log(sumGrade)
        index++;
        grade = input[index];

    }

}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
