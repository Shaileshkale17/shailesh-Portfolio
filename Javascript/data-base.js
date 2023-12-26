const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let usernameInput = document.querySelector('input[name="name"]');
  let usernameErr = document.getElementById("Error");
  
  if (usernameInput || usernameErr) {
    // Check if either element is missing in the DOM
    console.log("Username input or error element not found");
    return;
  }
  
  if (usernameInput.value.trim() === "") {
    // Check if the value is empty
    console.log("Please enter a username");
    usernameErr.classList.add("error");
    usernameErr.innerHTML = "Please enter a username";
    return; // Stop further execution if validation fails
  }
  
  // If validation passes, continue with other actions
  // ...
  



  let data = new FormData(form);
  fetch(
    "https://script.google.com/macros/s/AKfycbxZCcyUOW2xDtq2lnu-pvUxsKr8cTwgXU3p17y_Nx6jc4kJZ-oe5m27EgJGHgmxPs9fag/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((response) => response.text())
    .then((data) => submitData(data));
});

function submitData(data) {
  if (data === "Success") {
    console.log("sjdfjs");
  }
}

// console.log("objectErr",validateForm());
