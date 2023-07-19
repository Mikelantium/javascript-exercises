const galleryContainer = document.querySelector('.b-gallery');
const loadMoreButton = document.createElement('button');
loadMoreButton.classList.add('b-btn');
loadMoreButton.innerText = 'Cargar más';
let currentPage = 1;
const limit = 5;

async function fetchCharacters(page) {
  const response = await fetch(`http://localhost:3000/characters?_page=${page}&_limit=${limit}`);
  return response.json();
}

function createLolCharacters(character) {
  const galleryItem = document.createElement('div');
  const image = document.createElement('img');
  const text = document.createElement('p');

  galleryItem.classList.add('b-gallery__item');

  image.classList.add('b-gallery__img');
  image.src = character.image;

  text.classList.add('b-gallery__text');
  text.innerText = character.name;

  galleryItem.appendChild(image);
  galleryItem.appendChild(text);
  galleryContainer.appendChild(galleryItem);
}

async function loadCharacters(page) {
  const characters = await fetchCharacters(page);
  characters.forEach((character) => {
    createLolCharacters(character);
  });

  if (characters.length < limit) {
    loadMoreButton.style.display = 'none';
  } else {
    loadMoreButton.style.display = 'block';
  }
}

function loadMore() {
  currentPage += 1;
  loadCharacters(currentPage);
}

loadCharacters(currentPage);
loadMoreButton.addEventListener('click', loadMore);
document.body.appendChild(loadMoreButton);
