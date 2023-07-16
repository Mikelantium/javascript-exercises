const animalFunction = () => {
    return {name: 'Mad dog', race: 'Dog'};
};

const { name, race } = animalFunction();

console.log(name);  
console.log(race);  