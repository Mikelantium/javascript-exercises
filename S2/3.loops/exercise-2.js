const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg',
}

for (const key in alien) {
    console.log('Propiedad: ' + key + ', valor: ' + alien[key])
    console.log(`Propiedad: ${key}, valor: alien[${key}]`)
}