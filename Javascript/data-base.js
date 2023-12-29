const form = document.querySelector("form");
const dataetimeid = document.querySelector("#daatetimeid");
setInterval(() => {
  let dateTime = new Date();
  let Year = dateTime.getFullYear();
  let Month = dateTime.getMonth();
  let ThisDate = dateTime.getDate();
  let Hours = dateTime.getHours() + 1;
  let Minutes = dateTime.getMinutes();
  let Seconds = dateTime.getSeconds();

  let onTimeDate = `Date:- ${ThisDate}/${Month}/${Year} Time:-${Hours}:${Minutes}:${Seconds} `;
  form[0].value = onTimeDate;
}, 1000);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  fetch(
    "https://script.google.com/macros/s/AKfycbxrTvoWLjrxinGuDyesYv9QUq-GZSzxcxQ659jbSPfF2UPcV6EHPbRkgqezkkaFtqR3fw/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((response) => response.text())
    .then((data) => console.log(data)), Success(data);

  resetbutton();
});

function resetbutton() {
  form.reset();
}



function Success(Success) {
  if(Success){
    const form_container = document.querySelector('form');
    const success_none = document.querySelector('.success-none')
    form_container.style.display = "none";
success_none.style.display = "block";
  }
}