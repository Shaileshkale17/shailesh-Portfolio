const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  fetch(
    "https://script.google.com/macros/s/AKfycbx5dXNH2mfADDqiD9YDKkugwb_HBxdOmcVw6pON2tzb1ma8nrmJpZlhv12zFHw_QNFJNA/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((response) => response.text())
    .then((data) => console.log(data));

  resetbutton();
});

function resetbutton() {
  form.reset();
}
