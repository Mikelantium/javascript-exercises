const countries = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
  ];

  
  const countriesList = document.getElementById('countriesList');

  countries.forEach(country => {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');
  
    h4.textContent = country.title;
    img.src = country.imgUrl;
  
    div.appendChild(h4);
    div.appendChild(img);
    countriesList.appendChild(div);
  });

  deleteButton.addEventListener('click', () => {
    const divs = countriesList.getElementsByTagName('div');
    if (divs.length > 0) {
      const lastDiv = divs[divs.length - 1];
      lastDiv.remove();
    }
  });