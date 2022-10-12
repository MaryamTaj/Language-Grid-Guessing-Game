console.log("script running");

// Fix these querySelectors so that they each select the correct element.
const englishTile = document.querySelector("#English");
const spanishTile = document.querySelector("#Spanish");
const chineseTile = document.querySelector("#Chinese");
const tagalogTile = document.querySelector("#Tagalog");
const vietnameseTile = document.querySelector("#Vietnamese");
const arabicTile = document.querySelector("#Arabic");
const frenchTile = document.querySelector("#French");
const koreanTile = document.querySelector("#Korean");
const russianTile = document.querySelector("#Russian");

console.log(englishTile);
console.log(spanishTile);
console.log(chineseTile);
console.log(tagalogTile);
console.log(vietnameseTile);
console.log(arabicTile);
console.log(frenchTile);
console.log(koreanTile);
console.log(russianTile);

const inputField = document.querySelector("#guess");
inputField.addEventListener("change", (e) => {
  let myGuess = inputField.value;
  console.log("inputguess = " + myGuess);
  let langList = ["english", "spanish", "chinese", "tagalog", "arabic", "french", "korean", "russian"];
  let tileList = [englishTile, spanishTile, chineseTile, tagalogTile, arabicTile, frenchTile, koreanTile, russianTile];
  for (let i = 0; i < 8; i++){
    if (myGuess.toLowerCase() === langList[i]){
    tileList[i].classList.remove("hidden");
    }
  }
});
