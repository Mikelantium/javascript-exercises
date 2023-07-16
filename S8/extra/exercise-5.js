async function getPokemons(){
  const res = await fetch("https://pokeapi.co/api/v2/pokemon")
  const resPokemons = await res.json();
  getDetailPokemons(resPokemons.results);
}

async function getDetailPokemons(pokemons){
  const pokemonsPromises = pokemons.map(pokemon => fetch(pokemon.url).then(res => res.json()))
  const detailPokemons = await Promise.all(pokemonsPromises);
  console.log(detailPokemons)
  printPokemons(detailPokemons)
}

function printPokemons(pokemons){
  for (const pokemon of pokemons) {
    const container$$ = document.createElement("div");
    container$$.innerHTML = `<div>
      <h2>${pokemon.name}</h2>
      <img src="${pokemon.sprites.front_default}"/>
    </div>`
    document.body.appendChild(container$$)
  }
}

getPokemons()

// async function getPokemons(){
//   const res = await fetch("https://pokeapi.co/api/v2/pokemon")
//   const resPokemons = await res.json();
//   getDetailPokemons(resPokemons.results);
// }

// async function getDetailPokemons(pokemons){
//   const pokemonsPromises = []
//   for (const pokemon of pokemons) {
//     pokemonsPromises.push(fetch(pokemon.url))
//   }

//   const resDetailPokemons = await Promise.all(pokemonsPromises);
//   const detailPokemons = [];

//   for (const resDetailPokemon of resDetailPokemons) {
//     detailPokemons.push(await resDetailPokemon.json())
//   }
  
//   console.log(detailPokemons)

// }

// getPokemons()