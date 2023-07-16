const text = `gracioso-pero-no-gracioso-de-risa-gracioso-de-raro`;

// const splitTexts = text.split("-").map(splitText => splitText[0].toUpperCase() + splitText.substring(1, splitText.length)).join(" ");

// console.log(splitTexts);

let newText = "";
let nextToUpper = true;
for (let index = 0; index < text.length; index++) {
  const char = text[index];

  if (nextToUpper) {
    newText += char.toUpperCase();
    nextToUpper = false;
  } else if (char === "-") {
    nextToUpper = true;
    newText += " ";
  } else {
    newText += char;
  }
}

console.log(newText);
