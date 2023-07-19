const baseUrl = 'https://api.nationalize.io?name=';
const input$$ = document.querySelector('input');
const button$$ = document.querySelector('button');

const search = () => {
    const name = input$$.value;
    const url = baseUrl + name;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            for (const country of data.country) {
                const p = document.createElement('p');
                const deleteButton = document.createElement('button');

                p.textContent = `El nombre ${data.name} tiene un ${country.probability}% de ser ${country.country_id}`;
                deleteButton.textContent = 'X';

                deleteButton.addEventListener('click', () => {
                    p.remove();
                    deleteButton.remove();
                });

                document.body.appendChild(p);
                document.body.appendChild(deleteButton);
            }
        });
};

button$$.addEventListener('click', search);
