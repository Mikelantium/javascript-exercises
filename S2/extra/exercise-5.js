function rollDice(maxNum){
    return Math.floor(Math.random() * (maxNum - 1) + 1);
}

console.log(rollDice(10));
console.log(rollDice(20));
console.log(rollDice(6));
