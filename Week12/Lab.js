// Select the form and result section
const form = document.getElementById("contactForm");
const result = document.getElementById("result");

// Listen for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stops page refresh

    // Get values from the inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const movie = document.getElementById("movie").value; // extra input
    const message = document.getElementById("message").value;

    // Display the info back to the user
    result.innerHTML = `
      <h3>Here's what you entered:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Favorite Movie:</strong> ${movie}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
});