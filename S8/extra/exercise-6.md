Ejecuta `json-server --watch exercise-6.json` para obtener un endpoint de personajes `http://localhost:3000/characters`.

Pinta una galeria con los campos .name .image de los cinco primeros personajes. Para ello utilizaremos el endpoint con un filtro de página y limite de personajes de 5 por página `http://localhost:3000/characters?_page=1&_limit=5`.

Una vez pintados, crea un botón que esté situado abajo con el texto `Cargar más`. Si hacemos click en este botón hará un nuevo fetch a la siguiente página de personajes por lo tanto la url debería de ser la página actual + 1 `http://localhost:3000/characters?_page=2&_limit=5`. De esta forma obtendremos 5 personajes más que tendremos que pintar debajo de los anteriores.

La base de datos solo tiene 20 personajes así que lo ideal sería ocular el botón cuando estemos en la página 4.