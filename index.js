// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"]


const messages = []

function writeCards(names, event) {

    for( let i = 0; i < names.length; i++) {

        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;

        messages.push(message);
    }

    return messages;
}

function countDown(countDown) {

    while (countDown > 0 ) {
        
        console.log(--countDown);
    }
    
}