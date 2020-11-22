const readline = require('readline');

const userFeedback = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
        
    return new Promise(resolve => rl.question('What would you like to hear?\n(1) A joke\n(2) An opinion\n(3) something else\n', (answer) => {
        rl.close();
        resolve(answer);
    }))
}

exports.userFeedback = userFeedback;