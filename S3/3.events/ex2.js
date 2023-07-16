function foco() {
    const input$$ = document.querySelector('input');
    input$$.addEventListener('focus', () => {
        console.log(input$$.value);
    });
}
