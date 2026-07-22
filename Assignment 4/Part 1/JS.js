// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

//this is to genrate which charcters will be used
function randomCharcterNamesArrary(array) {
  const charcter = ("Willy the Goblin","Father Christmas","Big Daddy");
  return array[random];
}

//this is to genrate the name of places that be used in the story
function randomPlacesNamesArrary(array) {
  const charcter = ("the soup kitchen","DisneyLand","the white house");
  return array[random];
}

//this is to genrate which ations will be put into the story
function randomCharcterNamesArrary(array) {
  const charcter = ("spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and slithered away");
  return array[random];
}

// Partial return random string function

function returnRandomStoryString() {
  // It was 94 Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.

  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  if (customName.value !== "") {
    const name = customName.value;
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature = Math.round(94);
  }

  // TODO: replace "" with the correct expression
  story.textContent = "";
  story.style.visibility = "visible";
}