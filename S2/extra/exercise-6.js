function swap(array, firstIndex, secondIndex){
    const firstElement = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = firstElement;

    return array;
}

const newArray = swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 0, 2)
console.log('##ABEL## >> swap >>  ', newArray);
