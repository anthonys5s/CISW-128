// Ask for the age and number of tickets (Number() because they are numbers) and the movie rating (text)
let age = Number(prompt("How old are you?"));
let rating = prompt("What is the movie rated? (use capital letters: G, PG, PG-13, or R)");
let tickets = Number(prompt("How many tickets do you want?"));

//The ticket price depends on age (kids under 13 and seniors 65 and up pay less)
let price = 0;
if (age < 13) {
  price = 8;
} else if (age >= 65) {
  price = 9;
} else {
  price = 12;
}
console.log("Your ticket price is $" + price + ".");

//R-rated movies need a parent or guardian under 17 (the nested if checks the age)
if (rating === "R") {
  if (age < 17) {
    console.log("Heads up: you need a parent or adult guardian with you for an R-rated movie.");
  } else {
    console.log("This R-rated movie is okay for your age.");
  }
} else {
  console.log("There is no age warning for this rating.");
}

//Runs once for each ticket and adds up the total cost
let total = 0;
for (let i = 1; i <= tickets; i++) {
  total = total + price;
  console.log("Ticket #" + i + ": $" + price);
}
console.log("Total: $" + total);
