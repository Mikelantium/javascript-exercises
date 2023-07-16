const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

const citiesName = cities.map(city => city.isVisited ? city.name + ' (Visitado)' : city.name);
// const citiesName = cities.map(city => city.isVisited ===  true ? city.name + ' (Visitado)' : city.name);

console.log(citiesName);

