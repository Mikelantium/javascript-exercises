const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];

for (let index = 0; index < users.length; index++) {
    const user = users[index];
   if (user.years <= 18) {
    console.log(user.name + " Usuario menor de edad");
   } 
   else {
    console.log(user.name + " Usuario mayor de edad");
   }
  }