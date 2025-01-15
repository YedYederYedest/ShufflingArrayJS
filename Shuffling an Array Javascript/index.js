//Shuffling an Array using Fisher-Yates Algorithm

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

shuffle(cards);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }
}

function displayCards(cards)
{
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = cards.join('');
}

document.getElementById('shuffle-btn').addEventListener('click', () => 
{
    shuffle(cards);
    displayCards(cards);
}
)

displayCards(cards);

console.log(cards);
