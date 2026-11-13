// Select the form and elements
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const successMessage = document.getElementById("successMessage");

//Regex patterns for email and phone (123-456-7890)
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

//Name must not be empty
function validateName() {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        return false;
    }
    nameError.textContent = "";
    return true;
}

//Email must match the email pattern
function validateEmail() {
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    }
    emailError.textContent = "";
    return true;
}

//Phone must match the phone pattern
function validatePhone() {
    if (!phonePattern.test(phoneInput.value.trim())) {
        phoneError.textContent = "Please enter a phone number like 123-456-7890.";
        return false;
    }
    phoneError.textContent = "";
    return true;
}

//Validate each field when the user leaves it
nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
phoneInput.addEventListener("blur", validatePhone);

//Validate everything on submit
form.addEventListener("submit", (event) => {
    event.preventDefault();
    successMessage.textContent = "";

    const nameValid = validateName();
    const emailValid = validateEmail();
    const phoneValid = validatePhone();

    //Show success only if every field is valid, then reset the form
    if (nameValid && emailValid && phoneValid) {
        successMessage.textContent = "Form submitted successfully!";
        form.reset();
        nameError.textContent = "";
        emailError.textContent = "";
        phoneError.textContent = "";
    }
});