const searchContainer = document.querySelector(`[data-function="search"]`);
const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Buscar";
searchInput.addEventListener("input", charactersByPlanet);
searchContainer.appendChild(searchInput);

loadPlanets();
async function fetchPlanets() {
  const response = await fetch("http://localhost:3000/planets");
  const data = await response.json();
  return data;
}

function createPlanetCard(planet, onPlanetClick) {
    const planetCard = document.createElement("div");
    planetCard.innerHTML = `<h3>${planet.name}</h3>
        <img src="${planet.image}" alt="${planet.name}" style="width: 200px; height: 200px;">`;
    planetCard.addEventListener("click", function () {
      onPlanetClick(planet.id);
    });
    return planetCard;
  }

async function loadPlanets() {
    const planets = await fetchPlanets();
    const planetsGallery = document.querySelector(`[data-function="planets"]`);
  
    planets.forEach(function (planet) {
      const planetCard = createPlanetCard(planet, charactersByPlanet);
      planetsGallery.appendChild(planetCard);
    });
  }

async function fetchCharacters(idPlanet) {
  const url = idPlanet
    ? "http://localhost:3000/characters?idPlanet=" + idPlanet
    : "http://localhost:3000/characters";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function createCharacterCard(character) {
  const characterCard = document.createElement("div");
  characterCard.innerHTML = `<h3>${character.name}</h3><img src="${character.avatar}" alt="${character.name}" ><p class="description" style="display: none;">${character.description}</p>`;

  characterCard.addEventListener("click", function () {
    const description = characterCard.querySelector(".description");
    description.style.display =
      description.style.display === "none" ? "block" : "none";
  });
  return characterCard;
}

async function charactersByPlanet(planetId) {
  const charactersContainer = document.querySelector(`[data-function="characters"]`);
  charactersContainer.innerHTML = "";

  const characters = await fetchCharacters(planetId);
  const searchTerm = searchInput.value.toLowerCase();
  const filteredCharacters = characters.filter(function (character) {
    return character.name.toLowerCase().includes(searchTerm);
  });

  filteredCharacters.forEach(function (character) {
    const characterCard = createCharacterCard(character);
    charactersContainer.appendChild(characterCard);
  });
}


