const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] }

const { name, itv } = car;

const [year1, year2, year3] = itv;
// const [year1, year2, year3] = car.itv; // menos optimo

console.log(name, itv, year1, year2, year3)

