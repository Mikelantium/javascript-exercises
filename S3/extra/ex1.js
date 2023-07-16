const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul$$ = document.createElement('ul');

countries.forEach(function(country) {
    const li$$ = document.createElement('li');
    li$$.textContent = country;
    ul$$.appendChild(li$$);
  });

  document.body.appendChild(ul$$);