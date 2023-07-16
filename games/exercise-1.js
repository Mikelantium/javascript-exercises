let cardArray = [
    {
        id: 1,
        name: 'earth',
        img: 'public/exercise-1/earth.svg'
    },
    {
        id: 2,
        name: 'jupiter',
        img: 'public/exercise-1/jupiter.svg'
    },
    {
        id: 3,
        name: 'mars',
        img: 'public/exercise-1/mars.svg'
    },
    {
        id: 4,
        name: 'mercury',
        img: 'public/exercise-1/mercury.svg'
    },
    {
        id: 5,
        name: 'saturn',
        img: 'public/exercise-1/saturn.svg'
    },
    {
        id: 6,
        name: 'uranus',
        img: 'public/exercise-1/uranus.svg'
    },
    {
        id: 7,
        name: 'earth',
        img: 'public/exercise-1/earth.svg'
    },
    {
        id: 8,
        name: 'jupiter',
        img: 'public/exercise-1/jupiter.svg'
    },
    {
        id: 9,
        name: 'mars',
        img: 'public/exercise-1/mars.svg'
    },
    {
        id: 10,
        name: 'mercury',
        img: 'public/exercise-1/mercury.svg'
    },
    {
        id: 11,
        name: 'saturn',
        img: 'public/exercise-1/saturn.svg'
    },
    {
        id: 12,
        name: 'uranus',
        img: 'public/exercise-1/uranus.svg'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid$$ = document.querySelector('[data-function="grid"]');
const score$$ = document.querySelector('[data-function="score"]');
const attempts$$ = document.querySelector('[data-function="attempts"]');
let cardsChosen = [];
let cardsWon = [];

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const cardItem = cardArray[i];
        const card$$ = document.createElement('img');
        card$$.setAttribute('src', 'public/exercise-1/universe.svg');
        card$$.setAttribute('data-id', cardItem.id);
        card$$.addEventListener('click', ($event) => flipCard($event.target, i));
        grid$$.appendChild(card$$);
    }
}

function checkForMatch () {

    const optionOne = cardsChosen[0];
    const optionTwo = cardsChosen[1];

    const cardOne$$ = document.querySelector('[data-id="' + optionOne.id + '"]');
    const cardTwo$$ = document.querySelector('[data-id="' + optionTwo.id + '"]');

    if (optionOne.id === optionTwo.id) {
        cardOne$$.setAttribute('src', 'public/exercise-1/universe.svg');
        cardTwo$$.setAttribute('src', 'public/exercise-1/universe.svg');
        alert('You have clicked the same image!');
    } else if (optionOne.name === optionTwo.name && optionOne.id !== optionTwo.id) {
        cardOne$$.setAttribute('src', 'public/exercise-1/tick.svg');
        cardTwo$$.setAttribute('src', 'public/exercise-1/tick.svg');
        cardOne$$.removeEventListener('click', flipCard);
        cardTwo$$.removeEventListener('click', flipCard);
        cardsWon.push(optionOne);
    } else {
        cardOne$$.setAttribute('src', 'public/exercise-1/universe.svg');
        cardTwo$$.setAttribute('src', 'public/exercise-1/universe.svg');
    }

    cardsChosen = [];

    checkScore();
}

function flipCard (target$$, i) {
    const card = cardArray[i];
    const cardWon = cardsWon.find(findCard => findCard.name === card.name);

    if (cardWon) {
        alert('This card is marked ;)')
    } else {
        cardsChosen.push(card);
        target$$.setAttribute('src', card.img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

}

function checkScore () {
    score$$.textContent = cardsWon.length;
    attempts$$.textContent = Number(attempts$$.textContent) + 1;
    if (cardsWon.length === cardArray.length / 2) {
        score$$.textContent = ' Congratulations! You found them all!';
    }
}

createBoard()
