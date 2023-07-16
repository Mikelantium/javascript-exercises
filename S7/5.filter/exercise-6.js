const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const filteredLoleros = streamers.filter(streamer => {
    const toReturn = streamer.gameMorePlayed.toLowerCase().includes('legends');

    if(toReturn && streamer.age > 35){
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    }

    return toReturn;
})

// const filteredLoleros = streamers.filter(streamer => {
//     if(streamer.age > 35){
//         streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
//     }
//     return streamer.gameMorePlayed.toLowerCase().includes('legends');
// })

console.log(filteredLoleros);