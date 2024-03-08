const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

const cards = []

function writeCards(names, event) {
    let messages = [];
    for  (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}
let names = ['Ozzy', 'Frank', 'Dick'];
let event = 'biethday';
let thankYouMessages = writeCards (names, event);
console.log(thankYouMessages);




let number = 10
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number --;
    }
}

countDown(number)