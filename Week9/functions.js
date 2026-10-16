//greetUser takes a name and logs a greeting to the console
function greetUser(name) {
  console.log("Hello, " + name + "!");
}

//addNumbers takes two numbers and returns their sum (uses return)
function addNumbers(a, b) {
  return a + b;
}

//calculateArea takes a length and a width and returns length times width
function calculateArea(length, width) {
  return length * width;
}

//Ask the user for their name with prompt()
let userName = prompt("What is your name?");

//Calls greetUser with the name the user typed in
greetUser(userName);

//Ask the user for two numbers and turn the text into numbers with Number()
let firstNumber = Number(prompt("Enter the first number:"));
let secondNumber = Number(prompt("Enter the second number:"));

//Call addNumbers, save the returned sum, then log it
let sum = addNumbers(firstNumber, secondNumber);
console.log("The sum of " + firstNumber + " and " + secondNumber + " is " + sum);

//Ask the user for a length and a width
let rectLength = Number(prompt("Enter the length:"));
let rectWidth = Number(prompt("Enter the width:"));

//Calls calculateArea, save the returned area, then log it
let area = calculateArea(rectLength, rectWidth);
console.log("The area is " + area);