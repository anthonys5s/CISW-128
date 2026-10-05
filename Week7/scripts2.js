//get user input with prompt, Number turns the ticket answer into a real number.
let movieTitle = prompt("What movie is playing tonight?");
let ticketCount = Number(prompt("How many tickets are being sold? (try 15)"));

console.log("");
console.log("--- Ticket Giveaway for " + movieTitle + " ---");

//goes through each ticket, and the if / else if inside gives popcorn on every 3rd ticket and a drink on every 5th.
for (let ticket = 1; ticket <= ticketCount; ticket++) {
  if (ticket % 3 === 0) {
    console.log("Ticket #" + ticket + ": Free popcorn!");
  } else if (ticket % 5 === 0) {
    console.log("Ticket #" + ticket + ": Free drink!");
  } else {
    console.log("Ticket #" + ticket + ": Regular ticket");
  }
}

console.log("");
console.log("--- Countdown ---");

//counts down from 5 to 1, going down by 1 each time so it eventually stops.
let timeLeft = 5;
while (timeLeft > 0) {
  console.log(timeLeft + "...");
  timeLeft = timeLeft - 1;
}

console.log("Showtime! Enjoy " + movieTitle + "!");