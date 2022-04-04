function vacationBooksList (input){

    let pagesNumber = Number(input[0]);
    let pagesForOneHour = Number(input[1]);
    let daysForOneBook = Number(input[2]);

    let hoursForOneBook = pagesNumber / pagesForOneHour;
    let res = hoursForOneBook / daysForOneBook;
    console.log(res);
}

vacationBooksList(["432", "15", "4"]);