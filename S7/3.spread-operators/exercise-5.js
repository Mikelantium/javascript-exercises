const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsCopy = [...colors]; 
colorsCopy.splice(2,1);

console.log(colors);
console.log(colorsCopy); // ['rojo', 'azul', 'verde', 'naranja'];

