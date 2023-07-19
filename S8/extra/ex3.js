fetch("http://localhost:3000/movies")
  .then((response) => response.json())
  .then((characterData) => createdCharacters (characterData))
  const createdCharacters = (characterData) => {
    for (const character of characterData) {
      const img$$ = document.createElement ("img")
      img$$.setAttribute("src", `http://localhost:3000/${character.img}`)
      document.body.appendChild(img$$)
    }
  }