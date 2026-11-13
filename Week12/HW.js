const form = document.getElementById("signupForm");
const results = document.getElementById("results");

form.addEventListener("submit", function (event) {
  // stop the page from reloading when the form is submitted
  event.preventDefault();

  // get the value from each input
  const name = document.getElementById("name").value;
  const guests = document.getElementById("guests").value;
  const genre = document.getElementById("genre").value;
  const seating = document.querySelector('input[name="seating"]:checked').value;
  const suggestions = document.getElementById("suggestions").value;

  // show each labeled value inside the results section
  const entries = [
    ["Name", name],
    ["Number of Guests", guests],
    ["Favorite Genre", genre],
    ["Seating", seating],
    ["Movie Suggestions", suggestions]
  ];

  results.innerHTML = "";
  entries.forEach(function (entry) {
    const line = document.createElement("p");
    line.textContent = entry[0] + ": " + entry[1];
    results.appendChild(line);
  });
});