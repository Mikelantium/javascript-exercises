function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === text) {
        return i;
      }
    }
  }


const array1 = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
console.log(findArrayIndex(array1, "Mosquito"));

const array2 =["Caca", "Culo", "Pedo", "Pis"];
console.log(findArrayIndex(array2, "Pis"));