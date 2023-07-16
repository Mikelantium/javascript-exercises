const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];

for (let index = 0; index < users.length; index++) {
    const user = users[index];
    if(user.years >= 18){
        console.log('Usuario menor de edad: ' + user.name)
    } else{
        console.log('Usuario mayor de edad: ' + user.name)
    }
}



// const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];

// for (let index = 0; index < users.length; index++) {
//     const user = users[index];
//     console.log(user.years >= 18 ? 'Usuarios menores de edad:' :'Usuarios mayores de edad:', user.name );
// }