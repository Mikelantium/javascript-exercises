getCharacters();
async function getCharacters() {
  const res = await fetch("https://digimon-api.vercel.app/api/digimon");
  const characters = await res.json();
  printCharacters(characters);
}

function printCharacters(characters) {
  for (const character of characters) {
    const character$$ = createCharacter(character);
    document.body.appendChild(character$$);
  }
}

function createCharacter(character) {
  const figure$$ = document.createElement("figure");

  figure$$.innerHTML = `<figcaption>${character.name}</figcaption><img src=${character.img}/>`;

  return figure$$;
}
