const div$$ = document.querySelectorAll(`.fn-insert-here`);


div$$.forEach(div => {
    const p$$ = document.createElement (`p`);
    p$$.textContent = `Voy dentro!`;
    div.appendChild(p$$)
});