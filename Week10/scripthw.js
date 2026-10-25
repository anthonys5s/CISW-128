console.log("DOM HW loaded");

//grab all the elements
const titleEl = document.getElementById("petTitle");
const mainEl = document.getElementById("petMain");
const introEl = document.querySelector(".petIntro");
const imgEl = document.getElementById("petImg");
const listEl = document.getElementById("petList");
const toggleBtn = document.getElementById("highlightBtn");
const swapBtn = document.getElementById("swapBtn");
const factEl = document.getElementById("petFact");

//update the title and intro text
titleEl.textContent = "Pets";
introEl.textContent = "Here are some pets I like";

//change the starting image and alt text
imgEl.src = "dog.jpg";
imgEl.alt = "Photo of a dog";

//pet data for the list
const pets = [
  { name: "Chihuahua", info: "Evil" },
  { name: "Siamese Cat", info: "talkative cat with blue eyes" },
  { name: "Hamster", info: "small and runs on its wheel at night" },
  { name: "Parrot", info: "can learn to copy words" }
];

//clears the list, then build a list item for each pet
listEl.innerHTML = "";
pets.forEach((pet) => {
  const li = document.createElement("li");
  li.textContent = `${pet.name}: ${pet.info}`;
  listEl.appendChild(li);
});

//toggle the highlight class on main when the button is clicked
toggleBtn.addEventListener("click", () => {
  mainEl.classList.toggle("highlight");
});

//swap the image and alt text back and forth on click
let swapped = false;
swapBtn.addEventListener("click", () => {
  if (!swapped) {
    imgEl.src = "cat.jpg";
    imgEl.alt = "Photo of a cat";
    swapped = true;
  } else {
    imgEl.src = "dog.jpg";
    imgEl.alt = "Photo of a dog";
    swapped = false;
  }
});