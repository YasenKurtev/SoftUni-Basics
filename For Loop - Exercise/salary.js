function salary(input) {
    let index = 0;
    let tabs = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;

    for (let i = 1; i <= tabs; i++) {
        let website = (input[index]);
        index++;

        switch (website) {
            case "Facebook":
                salary -= 150; break;
            case "Instagram":
                salary -= 100; break;
            case "Reddit":
                salary -= 50; break;
        }
        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            break;
        } 

    }
    if (salary > 0){
    console.log(Math.trunc(salary));
    }else{

    }

}

salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])



