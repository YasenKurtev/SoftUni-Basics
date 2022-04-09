function examPreparation(input) {

    let index = 0;
    let badGrades = Number(input[index]);
    index++;
    let problemName = input[index];
    index++;

    let badGradesCount = 0;
    let sumGrades = 0;
    let problemsCount = 0;
    let isNeedABreak = false;
    let lastProblem = "";

    while (problemName !== "Enough") {
        let taskName = problemName;
        lastProblem = taskName;
        let grade = Number(input[index]);
        index++;
        problemsCount++;
        sumGrades += grade;

        if (grade <= 4) {
            badGradesCount++;
        }

        if (badGradesCount === badGrades) {
            console.log(`You need a break, ${badGradesCount} poor grades.`);
            isNeedABreak = true;
            break;
        }

        problemName = input[index];
        index++;
    }

    if (!isNeedABreak) {
        let averageGrade = sumGrades / problemsCount;
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${problemsCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
