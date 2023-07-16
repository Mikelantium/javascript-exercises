const characters$$ = document.querySelector("[data-function='characters']")
const arena$$ = document.querySelector("[data-function='arena']")
let playerOne;
let playerTwo;

init();
async function init() {
    const characters = await getCharacters();
    printCharacters(characters);
}

async function getCharacters() {
    try {
        const res = await fetch("http://localhost:3000/characters");
        return await res.json();
    } catch (e) {
        console.error(e)
    }
}

function printCharacters(characters) {
    for (const character of characters) {
        const div$$ = document.createElement("div");
        div$$.classList.add("c-characters__item")
        div$$.innerHTML = `
            <img src="${character.avatar}"/>
            <h2>${character.name}</h2>
        `

        div$$.addEventListener("click", () => { selectPlayer(character) })
        characters$$.appendChild(div$$)
    }
}

function selectPlayer(character) {
    if (playerOne) {
        playerTwo = character;
        readyForBattle();
    } else {
        playerOne = character;
    }
}

function readyForBattle() {
    const button$$ = document.createElement("button");
    button$$.innerHTML = "Fight!"
    button$$.addEventListener('click', battle)
    characters$$.appendChild(button$$)
}

function battle() {
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    if (randomNumber === 1) {
        round(playerOne, playerTwo);
    } else {
        round(playerTwo, playerOne);
    }
}

function round(playerFighting, playerDefending) {
    let roundDamage = 0;
    for (const dice of playerFighting.damage) {
        roundDamage += rollADice(dice, playerFighting.critic);
    }

    finalDamage(roundDamage, playerDefending);

    if (playerDefending.vitality > 0) {
        setTimeout(() => { round(playerDefending, playerFighting) }, 250);
    }
    console.log(playerFighting.name + " pegando");
    console.log(playerDefending.name + " vida: " + playerDefending.vitality);
}

function finalDamage(damage, playerDefending) {
    const finalDamage = damage - playerDefending.defense;
    playerDefending.vitality -= finalDamage;
}

function rollADice(dice, critic) {
    const indexOfD = dice.indexOf("d");
    const timesToRoll = dice.substring(0, indexOfD);
    const sides = dice.substring(indexOfD + 1, dice.length);
    let diceDamage = 0;

    for (let index = 0; index < timesToRoll; index++) {
        rollingDamage = Math.floor(Math.random() * Number(sides)) + 1;
        diceDamage += rollingDamage === critic ? rollingDamage * 2 : rollingDamage;
    }

    return diceDamage;
}



function battleRound(attackingChar, defendingChar){

const totalDamage = 0;
for (const damage of attackingChar.damage) {
    const num = Number(damage.substring(0,1));
    const num2 = Number(damage.substring(2,damage.length));

    for (let index = 0; index < num; index++) {
      totalDamage +=  Math.floor(Math.random() * num2) + 1;
    }
}


    if(){
        battleRound(defendingChar, attackingChar);
    }
}