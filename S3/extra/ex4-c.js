const countries = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
  ];
  
  const countriesList = document.getElementById('countriesList');
  
  countries.forEach((country, index) => {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');
    const deleteButton = document.createElement('button'); // Crear el botón
  
    h4.textContent = country.title;
    img.src = country.imgUrl;
    deleteButton.textContent = 'Eliminar'; // Texto del botón
  
    // Agregar evento de clic al botón para eliminar el elemento correspondiente
    deleteButton.addEventListener('click', () => {
      div.remove(); // Eliminar el div que contiene el botón clicado
    });
  
    div.appendChild(h4);
    div.appendChild(img);
    div.appendChild(deleteButton); // Agregar el botón al div
    countriesList.appendChild(div);
  });
  