// const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
// const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

// for (let index = 0; index < foodSchedule.length; index++) {
//     const food = foodSchedule[index];
//     if(!food.isVegan){
//         food.name = fruits.shift();
//     }
// }

// console.log(foodSchedule);

// ALTERNATIVA

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];
let counter = 0;

for (let index = 0; index < foodSchedule.length; index++) {
    const food = foodSchedule[index];
    if(!food.isVegan){
        food.name = fruits[counter];
        counter++;
    }
}

console.log(foodSchedule);
