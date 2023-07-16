Haz una peticion a la api de pokemons `https://pokeapi.co/api/v2/pokemon` y pinta su nombre e imagen. La api solo devuelve el nombre (.name) y la url (.url). 

Por ello tendrás que hacer para cada pokemon otra petición a la url de la propiedad (.url). Esto te devolverá el detalle del pokemon donde encontrarás su imagen (.sprites.front_default). 

Para que no haya problema con el pintado de los pokemons os recomendamos que hagais un `Promise.all` y que así todos los pokemons vengan en orden.