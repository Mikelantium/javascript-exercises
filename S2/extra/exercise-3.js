const users = [
    {
        name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 50 },
            rain: { format: 'ogg', volume: 60 },
            firecamp: { format: 'mp3', volume: 80 },
        }
    },
    {
        name: 'Mortadelo',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 30 },
            shower: { format: 'ogg', volume: 55 },
            train: { format: 'mp3', volume: 60 },
        }
    },
    {
        name: 'Super Lopez',
        favoritesSounds: {
            shower: { format: 'mp3', volume: 50 },
            train: { format: 'ogg', volume: 60 },
            firecamp: { format: 'mp3', volume: 80 },
        }
    },
    {
        name: 'El culebra',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 67 },
            wind: { format: 'ogg', volume: 35 },
            firecamp: { format: 'mp3', volume: 60 },
        }
    },
]

const favoritesSounds = [];


for (const user of users) {
    for (const key in user.favoritesSounds) {
        if (favoritesSounds.length) {
            let favoriteSoundIsInside = false;
            for (const favoriteSound of favoritesSounds) {
                if(favoriteSound.name === key){
                    favoriteSoundIsInside = true;
                    favoriteSound.count++;
                    break;
                }
            }

            if(!favoriteSoundIsInside){
                favoritesSounds.push({name: key, count: 1})
            }
        } else{
            favoritesSounds.push({name: key, count: 1})
        }
    }
}

console.log(favoritesSounds)
