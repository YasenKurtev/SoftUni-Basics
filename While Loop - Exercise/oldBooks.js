function oldBooks(input){

    let favouriteBook = input[0];
    let index = 1;
    let nextBook = input[index];
    
    let bookIsFound = false;

    while(nextBook !== "No More Books"){
        if(nextBook === favouriteBook){
            bookIsFound = true;
            break;
        }
        index++;
        nextBook = input[index];
    }

    if(bookIsFound === false){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`);
    }else{
        console.log(`You checked ${index - 1} books and found it.`)
    }

}

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


