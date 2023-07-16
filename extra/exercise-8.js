const ship1 = {name: "Banca rota", damage: 44, pv: 150};

const ship2 = {name: "Cacique pero no", damage: 66, pv: 124}

const attack = (shipA, shipB)=>{
    const damage = Math.floor((Math.random() * shipA.damage) + 1);
    shipB.pv -= damage;
}

attack(ship1, ship2);
attack(ship2, ship1);
attack(ship1, ship2);
attack(ship2, ship1);
attack(ship1, ship2);
attack(ship2, ship1);
attack(ship1, ship2);

console.log(ship1, ship2)