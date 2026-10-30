// Example 1: Click event
const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", () => {
 alert("You clicked the button!");
});

//Event 1 (click): turns on movie night by changing the background to black and the text to white
clickBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
});

//Event 2 (dblclick): changes the button text to show the movie was added to favorites
dblBtn.addEventListener("dblclick", () => {
  dblBtn.textContent = "Added to Favorites!";
});

//Event 3 (keyup): shows which key was pressed in the paragraph
document.addEventListener("keyup", (event) => {
  output.textContent = "You pressed: " + event.key;
});

//Event 4 (mouseover): highlights the featured movie when the mouse is over it
hoverText.addEventListener("mouseover", () => {
  hoverText.style.backgroundColor = "gold";
  hoverText.style.color = "black";
});

//Event 5 (mouseout): removes the highlight when the mouse leaves
hoverText.addEventListener("mouseout", () => {
  hoverText.style.backgroundColor = "";
  hoverText.style.color = "";
});

//Event 6 (change): when you finish typing a favorite movie and click away, the box turns green and the movie gets logged to the console
textInput.addEventListener("change", () => {
  textInput.style.backgroundColor = "lightgreen";
  console.log("Favorite movie saved:", textInput.value);
});

//I didnt know if event 3 and 4 should count as just 1 so I added another just in case