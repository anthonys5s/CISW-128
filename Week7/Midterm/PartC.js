//Do not link this JS file to your html, this is a stand alone file

//1. Concept (5 pts): Why do we use Number(prompt()) instead of just prompt() when doing math or numeric comparisons?
// prompt() always gives back a string, even if the user types a number. Number() turns it into a real number so math and comparisons work the right way (without it, "5" + "3" gives "53" instead of 8)

//2. Operators (10 pts): In one sentence each, explain the difference between:

// == vs ===
// == compares two values after changing them to the same type, but === compares the value and the type with no changing

// > vs >=
// > is only true when the left side is bigger than the right side, but >= is also true when both sides are equal

// Part_C 3: Broken code — explain changes in comments, then rewrite correctly below
// let score = prompt("Score?");
// if (score >= "90") {
//   console.log("A");
// } else if (score == "80") {
//   console.log("B");
// } else {
//   console.log("Keep going")
// }

// What I changed:
// 1. prompt() gives back text, so I wrapped it in Number() to get a real number
// 2. I changed "90" to 90 so the score is compared as a number and not as a string
// 3. I changed == "80" to >= 80, because a B is for any score of 80 or more and == only matches exactly 80

// Write the working version of the above code below:
let score = Number(prompt("Score?"));
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("Keep going");
}