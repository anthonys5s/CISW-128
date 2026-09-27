//collects user input
let age = Number(prompt("Enter your age:"));
let rating = prompt("Enter the movie's rating (G, PG, PG-13, R):");
let hasTicket = prompt("Do you have a ticket? (yes/no)");

//takes the age that was inputed and decides if its appropiate for the movie (with fixed nesting this time)
if (rating === "R") {
  if (age >= 17) {
    console.log("You're old enough to watch this R-rated movie.");
  } else {
    console.log("Sorry, you must be 17+ to watch an R-rated movie.");
  }
} else {
  console.log("This movie is rated for a general audience. Enjoy!");
}

//checks if you have a ticket or not with the strict operator
if (hasTicket === "yes") {
  console.log("Ticket confirmed, head to your seat!");
} else {
  console.log("You'll need to buy a ticket before entering.");
}

//combines both the age and the ticket check
if (age < 17) {
  if (hasTicket !== "yes") {
    console.log("Reminder: minors need both a ticket and adult accompaniment for R-rated films.");
  }
}