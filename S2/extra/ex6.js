const myArray = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
const swappedArray = swap(myArray, 1, 3);

function swap(array, index1, index2) {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  
    return array;
  }
  
  console.log(swappedArray);

  // Revisar por qué funciona myArray¿array??