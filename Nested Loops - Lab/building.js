function building(input){

    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for(let f = floors; f >= 1; f--){
        let printLine = "";
        for(let a = 0; a < rooms; a++){
            if(f === floors){
                printLine += `L${f}${a} `;
            }else if(f % 2 === 0){
                printLine += `O${f}${a} `;
            }else{
                printLine += `A${f}${a} `;
            }
        }
        console.log(printLine);
    }
}

building(["6", "4"])