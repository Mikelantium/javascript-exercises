const shortFilm = [];
const mediumFilm = [];
const longFilm = []

const movies = [
  { name: "Your Name", durationInMinutes: 130 },
  { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
  { name: "Origen", durationInMinutes: 165 },
  { name: "El señor de los anillos", durationInMinutes: 967 },
  { name: "Solo en casa", durationInMinutes: 214 },
  { name: "El jardin de las palabras", durationInMinutes: 40 },
];

for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];
  if (movie.durationInMinutes < 100) {
    shortFilm.push(movie);
  }
  else if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200){
    mediumFilm.push(movie)
  }
  else{
    longFilm.push(movie)
  }
}

console.log( "Películas cortas", shortFilm);
console.log(mediumFilm);
console.log(longFilm);

