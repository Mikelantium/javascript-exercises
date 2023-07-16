function handleChange(event){
    console.log(event.target.value);
}

const input$$ = document.querySelector('input');

input$$.addEventListener('input', handleChange);