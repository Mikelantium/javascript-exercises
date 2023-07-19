const callCatButton = document.querySelector('[data-fn="callACat"]');

function callACat() {
  return fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then(drawACat);
}

function drawACat(data) {
  const catUrl = data[0].url; 
  const catImage = document.createElement("img");
  const catContainer = document.createElement("div");
  const deleteButton = document.createElement("button");

  catImage.src = catUrl;
  catContainer.appendChild(catImage);
  catContainer.classList.add("cat-container");

  deleteButton.innerText = "Eliminar";
  deleteButton.addEventListener("click", () => {
    removeCat(catImage, deleteButton);
  });

  catContainer.appendChild(deleteButton);
  document.body.appendChild(catContainer);
}

function removeCat(catImage, deleteButton) {
  catImage.remove();
  deleteButton.remove();
}

callCatButton.addEventListener("click", () => {
  callACat();
});
