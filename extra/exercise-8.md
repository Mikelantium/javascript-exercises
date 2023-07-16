Dado el siguiente javascript, crea una función `attack` a la que le pases como parametro las dos naves y simule un disparo de la primera nave a la segunda.

Esta función generara un numero aleatorio de 1 al numero de la propiedad `.damage` de la primera nave y le restará el  resultado al valor de la propiedad `.pv` de la segunda nave.

Ejecuta la función tantas veces como quieras.

```js
const ship1 = {name: "Banca rota", damage: 44, pv: 150};

const ship2 = {name: "Cacique pero no", damage: 66, pv: 124}
```