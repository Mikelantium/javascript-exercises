const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const handleChange = (event) => {
  console.log(event);
  const filteredStreamers = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(event.target.value.toLowerCase())
  );

  console.log(filteredStreamers);
};

const input$$ = document.querySelector('[data-function="toFilterStreamers"]');
// const input$$ = document.querySelector('input');

input$$.addEventListener("input", handleChange);
