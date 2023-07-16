
fetch('http://localhost:3000/diary').then(res => res.json()).then(diary => {
    const sortedDiary = orderDiaryNotes(diary);
    createDiaryNotes(sortedDiary)
  
    // createDiaryNotes(orderDiaryNotes(diary))
});


const orderDiaryNotes = (diary) => {
    return diary.sort((a, b) => new Date(a.date) - new Date(b.date)) // puedes transformar un texto en fecha y
    // restar o sumar fechas
}

const createDiaryNotes = (diaryNotes) => {
    for (const diaryNote of diaryNotes) {
        const div$$ = document.createElement('div');
        div$$.innerHTML = `<h3>${diaryNote.title}</h3><h5>${diaryNote.date}</h5><p>${diaryNote.description}</p>`

        const button$$ = document.createElement('button');
        button$$.textContent = 'X';
        button$$.addEventListener('click', () => {removeDiaryNote(div$$)})
<<<<<<< HEAD
=======

        // button$$.addEventListener('click', function(){
        //     div$$.remove()
        // })

>>>>>>> 44257c1f97f0195d5ad7d5d683e2c2ca46cb13d5
        div$$.appendChild(button$$);
        document.body.appendChild(div$$);
    }
}

const removeDiaryNote = (diaryNote$$) => {
    diaryNote$$.remove();
}

