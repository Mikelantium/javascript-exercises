fetch('https://breakingbadapi.com/api/characters').then(res => res.json()).then(characters => {
    createDomCharacters(characters)
})

const createDomCharacters = (characters) => {
    for (const character of characters) {
        const figure$$ = document.createElement('figure');

        figure$$.innerHTML = `<figcaption>${character.name}</figcaption><img src=${character.img}/>`;
        // IGUAL
        // const figcaption$$ = document.createElement('figcaption');
        // const img$$ = document.createElement('img');

        // figcaption$$.textContent = character.name;
        // img$$.setAttribute('src', character.img);

        // figure$$.appendChild(figcaption$$)
        // figure$$.appendChild(img$$)

        document.body.appendChild(figure$$);
    }
}

// getCharacters();
// async function getCharacters(){
//     const res = await fetch('https://breakingbadapi.com/api/characters')
//     const characters = await res.json()
//     printCharacters(characters)
// }

// function printCharacters(characters){
//     for (const character of characters) {
//         const character$$ = createCharacter(character);
//         document.body.appendChild(character$$);
//     }
// }

// function createCharacter(character){
//     const figure$$ = document.createElement('figure');

//     figure$$.innerHTML = `<figcaption>${character.name}</figcaption><img src=${character.img}/>`;

//     return figure$$;
// }