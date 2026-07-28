// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

//this is to define a list of names to be randomly chossen via cycling through the array 
  const Characters = [
    "Willy the Goblin",
    "Father Christmas",
    "Big Daddy"];


//this is to define a list of places to be randomly chossen via cycling through the array
  const Places = [
    "the soup kitchen",
    "DisneyLand",
    "the white house"];


//this is to define a list of certin events to be randomly chosen via cycling through the array
  const Events = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and slithered away"];


// Partial return random string function

function returnRandomStoryString() {
  const character = randomValueFromArray(Characters);
  const place = randomValueFromArray(Places);
  const event = randomValueFromArray(Events);
  const storyText =
  "It was 94 Fahrenheit outside, so"
  +character +
  "went for a walk. When they got to"
  +place+ 
  ",they stared in horror for a few moments, then"
  +event + 
  ".Bob saw the whole thing, but was not surprised —"
  +character+
  "weighs 300 pounds, and it was a hot day."
  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);



function generateStory() {
  let newStory = returnRandomStoryString()
  if (customName.value !== "") {
    newStory = newStory.replaceAll("Bob", customName.value);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(weight);
    convertedWeight = (weight/14)

    const temperature = Math.round(temperature);
    convertedTemprature = ((temperature -32)*5/9)
  }

  // TODO: replace "" with the correct expression
  story.textContent = newStory;
  story.style.visibility = "visible";
}