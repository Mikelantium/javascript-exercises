const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

const copy1 = [...colors];

copy1.splice(2,1);

console.log(copy1);