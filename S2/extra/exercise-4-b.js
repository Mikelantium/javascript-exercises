function findArrayIndex(array, text) {
    for(let i = 0; i < array.length; i++) {
        let obj = array[i];
        if(obj === text){
            return i;
        }
    }
}

function removeItem(array, text){
    const index = findArrayIndex(array, text);
    array.splice(index, 1);
    return array;
}
 const arrayRemovedItem = removeItem(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Ajolote');
console.log(arrayRemovedItem);
