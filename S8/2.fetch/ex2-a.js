const baseUrl = 'https://api.nationalize.io?name=';
const input$$ = document.querySelector('input');


document.querySelector(`button`).addEventListener('click', () => {
    const name = input$$.value;
    const url = baseUrl + name;

    fetch(url)
     .then(response => response.json())
     .then(data => {
      console.log(data);
 })
});


// Se declara una constante baseUrl que contiene la URL base de la API que se utilizará para la consulta. Esta URL se usa como punto de partida para construir la URL completa para la solicitud.

// Se utiliza document.querySelector('input') para obtener una referencia al primer elemento <input> encontrado en el documento HTML. Esto permite acceder y obtener el valor del input.

// Se agrega un event listener al botón utilizando document.querySelector('button'). Esto permite capturar el evento de clic en el botón.

// Dentro de la función del event listener, se accede al valor del input (input$$.value) y se concatena con la baseUrl para formar la URL completa para la solicitud a la API.

// Se realiza la solicitud a la API utilizando fetch(url). El método fetch() realiza una solicitud HTTP GET a la URL especificada. La URL que se pasa como argumento es la URL completa construida anteriormente.

// Después de llamar a fetch(), se encadenan los métodos then() para manejar la respuesta de la solicitud. En el primer then(), se utiliza la función de flecha con la sintaxis reducida (response => response.json()) para convertir la respuesta en formato JSON utilizando el método json(). Esto devuelve una nueva promesa que se resuelve con los datos JSON.

// En el segundo then(), se recibe la respuesta JSON (data) y se realiza una acción con ella. En este caso, se imprime en la consola utilizando console.log(data).