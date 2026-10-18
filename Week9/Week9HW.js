//No parameter, prints a welcome message
function showWelcome() {
  console.log("Welcome to the Movie Theater!");
}

//Parameters + return, gives back the ticket total so the math is written once and reused
function calculateTotal(pricePerTicket, numTickets) {
  let total = pricePerTicket * numTickets;

  //Takes 10% off for 4 or more tickets
  if (numTickets >= 4) {
    total = total - total * 0.1;
  }

  return total;
}

//Prints the total for 1 ticket up to numTickets by calling calculateTotal
function showPriceTable(pricePerTicket, numTickets) {
  for (let i = 1; i <= numTickets; i++) {
    console.log(i + " ticket(s): $" + calculateTotal(pricePerTicket, i));
  }
}

//Call the function with no parameters
showWelcome();

//Get the ticket price and number of tickets from the user
let ticketPrice = Number(prompt("How much is one ticket? (example: 12)"));
let ticketCount = Number(prompt("How many tickets do you want?"));

//Shows the price table using the loop function
showPriceTable(ticketPrice, ticketCount);

//Get the final total from the function that returns a value and log it
let finalTotal = calculateTotal(ticketPrice, ticketCount);
console.log("Final total: $" + finalTotal);