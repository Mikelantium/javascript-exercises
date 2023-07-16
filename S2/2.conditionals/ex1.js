const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for (let index = 0; index < alumns.length; index++) {
    const alumn = alumns[index];
    if (alumn.T1 && alumn.T2 || alumn.T1 && alumn.T3 || alumn.T2 && alumn.T3) {
      alumn.isApproved = true;
    } else{
      alumn.isApproved = false;
    }
}

console.log(alumns);