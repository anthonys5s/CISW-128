//Part 1: Counting Loop
//This loop starts i at 1, prints it, and adds 1 each time until i goes past 10
console.log("Part 1: Counting Loop");
 
for (let i = 1; i <= 10; i = i + 1) {
  console.log(i);
}
 
 
//Part 2: User Input Loop
//prompt() gives back text, so Number() turns it into a number, then the loop counts from 1 up to it
console.log("Part 2: User Input Loop");
 
let userNumber = Number(prompt("Enter a number and I will count up to it:"));
 
for (let count = 1; count <= userNumber; count = count + 1) {
  console.log("Number " + count + " of " + userNumber);
}
 
 
//Part 3: Triangle Pattern
//Each time through, the loop adds one more # to line and prints it, so every row is one # longer
console.log("Part 3: Triangle Pattern");
 
let line = ""
 
for (let row = 1; row <= 7; row = row + 1) {
  line = line + "#" //add one more #
  console.log(line) //print the current line
}