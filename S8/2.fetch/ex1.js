fetch("https://api.agify.io?name=michael")
  .then(response => response.json())
  .then(myJson => {
    console.log(myJson);
  })