const numbersList = [];

function sum(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b
}


function father(a, b, callback) {
    const result = callback(a, b);
    numbersList.push(result);
    // numbersList.push(callback(a, b));
}

father(4, 3, sum);
// const result = sum(4, 3);
// numbersList.push(result);
father(3, 2, sum);
// const result = sum(3, 2);
// numbersList.push(result);
father(4, 3, substract);
// const result = substract(4, 3);
// numbersList.push(result);
father(6, 3, substract);
// const result = substract(6, 3);
// numbersList.push(result);

// father(6, 3, 'hola'); // mal. Tenemos que tener en consideración que callback es una función con dos parametros

console.log(numbersList);

