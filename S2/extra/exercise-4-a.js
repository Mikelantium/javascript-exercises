function findArrayIndex(array, text) {
    for(let i = 0; i < array.length; i++) {
        let obj = array[i];
        if(obj === text){
            return i;
        }
    }
}

const index = findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Ajolote');
console.log(index);

const index2 = findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Mosquito');
console.log(index2);
