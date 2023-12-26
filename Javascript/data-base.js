form = document.querySelector('form');
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        let data = new FormData(form);
        fetch(
          "https://script.google.com/macros/s/AKfycbxZCcyUOW2xDtq2lnu-pvUxsKr8cTwgXU3p17y_Nx6jc4kJZ-oe5m27EgJGHgmxPs9fag/exec",{
            method:"POST",
            body: data
          }
        )
          .then((response) => response.text())
          .then((data) => console.log(data));
      });