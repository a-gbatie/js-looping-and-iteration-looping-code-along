// Code your solutions in this file

function writeCards(names, event) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cards
}

function countDown(startNum) {
    while (startNum > -1) {
        console.log(startNum--)
    }
}

