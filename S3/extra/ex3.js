const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const divPrintHere = document.querySelector('[data-function="printHere"]');

const ul = document.createElement("ul");

cars.forEach(function(car)  {
    const li = document.createElement("li");
     li.textContent = car;
     ul.appendChild(li);

})