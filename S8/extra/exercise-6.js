const characters$$ = document.querySelector("[data-fn='characters']")
let page = 1;
init()
async function init() {
    getAndPrintCharacters()
    printButton()
}

async function getCharacters() {
    const res = await fetch(`http://localhost:3000/characters?_page=${page}&_limit=5`)
    return res.json();
}

function printCharacters(characters) {
    for (const character of characters) {
        const div$$ = document.createElement("div");

        div$$.classList.add("b-gallery__item")

        div$$.innerHTML = `
            <img class="b-gallery__img" src="${character.image}"/>
            <h2 class="b-gallery__text">${character.name}</h2>
        `

        characters$$.appendChild(div$$)
    }
};

async function getAndPrintCharacters() {
    const characters = await getCharacters();

    addTransition();

    setTimeout(() => {


        printCharacters(characters);

        page++;
        if (page > 4) {
            document.querySelector("button").remove();
        }
    }, 1000)
}

function addTransition() {
    characters$$.classList.add("b-gallery--transition")
    setTimeout(() => {
        characters$$.classList.remove("b-gallery--transition")
    }, 1000)
}

function printButton() {
    const btn$$ = document.createElement("button");
    btn$$.classList.add("b-btn")
    btn$$.textContent = "Cargar más";
    btn$$.addEventListener("click", getAndPrintCharacters)
    document.body.appendChild(btn$$)
}