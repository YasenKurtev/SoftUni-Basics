function streamOfLetters(input) {

    let index = 0;
    let command = input[index++];

    let finalMessage = '';
    let currentWord = '';
    let secretFirstCpassed = false;
    let secretFirstOpassed = false;
    let secretFirstNpassed = false;

    while (command !== "End") {
        if (!(('A' <= command && command <= 'Z') || ('a' <= command && command <= 'z'))) {
            command = input[index++];
            continue;
        }

        switch (command) {
            case 'c':
                if (secretFirstCpassed) {
                    currentWord += command;
                } else {
                    secretFirstCpassed = true;
                }
                break;
            case 'o':
                if (secretFirstOpassed) {
                    currentWord += command;
                } else {
                    secretFirstOpassed = true;
                }
                break;
            case 'n':
                if (secretFirstNpassed) {
                    currentWord += command;
                } else {
                    secretFirstNpassed = true;
                }
                break;
            default:
                currentWord += command;
                break;
        }

        if (secretFirstCpassed && secretFirstOpassed && secretFirstNpassed) {
            currentWord += ' ';
            secretFirstCpassed = false;
            secretFirstOpassed = false;
            secretFirstNpassed = false;
            finalMessage += currentWord;
            currentWord = '';
        }

        command = input[index++];
    }

    console.log(finalMessage);
}

streamOfLetters(["H",
    "n",
    "e",
    "l",
    "l",
    "o",
    "o",
    "c",
    "t",
    "c",
    "h",
    "o",
    "e",
    "r",
    "e",
    "n",
    "e",
    "End"
])