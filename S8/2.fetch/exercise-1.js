fetch("https://api.agify.io?name=michael")
  .then((res) => res.json())
  .then((resData) => {
    console.log(resData);
  })
  .catch((resError) => {
    console.log(resError);
  });