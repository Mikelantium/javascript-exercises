const baseUrl = 'https://api.nationalize.io';

const search = () => {
    const input$$ = document.querySelector('input');

    fetch(baseUrl + '?name=' + input$$.value).then(res => res.json()).then(person => {
        createNationalizeP(person)
    })
}

const createNationalizeP = (person) => {
    let text = `El nombre ${person.name} tiene`;

    for (const country of person.country) {
        const percentage = Math.floor(country.probability * 100)
        text += ` un ${percentage} porciento de ser de ${country.country_id}`;
    }

    const div$$ = document.createElement('div');
    const p$$ = document.createElement('p');
    const button$$ = document.createElement('button');

    p$$.textContent = text;
    button$$.innerHTML = 'X';

    div$$.appendChild(p$$);
    div$$.appendChild(button$$);

    button$$.addEventListener('click', () => { removeP(div$$) })
    document.body.appendChild(div$$);
}


const removeP = (nodeEl$$) => {
    nodeEl$$.remove();
}

const button$ = document.querySelector('button');

button$.addEventListener('click', search);
