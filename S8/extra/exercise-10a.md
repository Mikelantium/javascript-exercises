Basandonos en el ejercicio 6 (con tener la parte de llamar a los personajes nos vale pero si lo tenemos todo lo podríamos mezclar y hacer un super mega ultra ejercicio 3000) vamos a crear un formulario para añadir nuevos luchadores al elenco.

Para ello añade al html un formulario para añadir los campos:

- name (input tipo string)
- avatar (input tipo string). Me vale con que el usuario ponga una url de internet
- critic (input tipo number)
- defense (input tipo number)
- vitality (input tipo number)
- damage (input tipo string)

Cuando el usuario le de al botón de guardar del formulario. Obtendremos un objeto con todos los datos introducidos por el usuario y guardaremos este luchador en la base de datos (JSON) enviando el luchador mediante un metodo POST a la url `http://localhost:3000/characters`.

Recuerda tener arrancado el servidor json-server para poder acceder a los personajes.
