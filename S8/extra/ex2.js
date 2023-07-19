fetch("http://localhost:3000/diary")
  .then((response) => response.json())
  .then((data) => {
    data.sort((a, b) => new Date(a.date) - new Date(b.date));

    for (const note of data) {
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const h5 = document.createElement("h5");
      const p = document.createElement("p");
      const deleteButton = document.createElement("button");

      h3.textContent = note.title;
      h5.textContent = note.date;
      p.textContent = note.description;
      deleteButton.textContent = "Eliminar";

      deleteButton.addEventListener("click", () => {
        div.remove();
      });

      div.appendChild(h3);
      div.appendChild(h5);
      div.appendChild(p);
      div.appendChild(deleteButton);
      document.body.appendChild(div);
    }
    
    });

