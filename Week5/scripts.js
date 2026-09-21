let movieTitle = "Inception";
let genre = "Action";
let runtime = 148;
let rating = 8.8;
let isSequel = false;

let total = runtime + 30;
let ratingPercent = rating * 10;

let info = movieTitle + " (" + genre + ")";
let message = "Rating: " + rating + "/10";

console.log(movieTitle);
console.log(genre);
console.log(runtime);
console.log(rating);
console.log(isSequel);
console.log(total);
console.log(ratingPercent);
console.log(info);
console.log(message);

    
document.body.innerHTML += "<p>Result: " + total + "</p>";
//This shows the total values at the end