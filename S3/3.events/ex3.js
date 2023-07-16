function foco() {
  const input$$ = document.querySelector(`input`);
  input$$.addEventListener(`input`, () => {
    console.log(input$$.value);
  });
}

foco();
