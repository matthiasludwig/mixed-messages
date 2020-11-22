const messageService = require('./messageService');
const userService = require('./userService');

let userChoice = undefined;

userService.userFeedback().then((answer) => {
    userChoice = parseInt(answer);

    switch (userChoice) {
        case 1:
            messageService.getJoke().then((response) => console.log(response.data.joke));
            break;
        case 2:
            messageService.getOpinion().then((response) => console.log(response.data.quotes[0].quote));
            break;
        case 3:
            messageService.getSwanson().then((response) => console.log(response.data[0]));
            break;
        default:
            console.log(`Could not identify the User Choice: ${userChoice}`);
    }
});