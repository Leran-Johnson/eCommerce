function validateForm() {
  // Get the name and email input values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  // Get the error message elements
  var nameError = document.getElementById("name-error");
  var emailError = document.getElementById("email-error");

  // Check if the name is empty
  if (name.trim() === "") {
    nameError.innerHTML = "Name is required";
    nameError.style.display = "block";
    return false;
  }

  // Check if the email is empty
  if (email.trim() === "") {
    emailError.innerHTML = "Email is required";
    emailError.style.display = "block";
    return false;
  }
  return true;
}