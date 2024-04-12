let form = document.getElementById("form");
let emailInput = document.querySelector("#input_email");
let errorMes = document.querySelector(".error-message");
let erroIcon = document.querySelector(".icon-error");
let button = document.querySelector(".btn");
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
let check = regex.test(emailInput.value);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  check = regex.test(emailInput.value);
  if (check) {
    emailInput.classList.remove("erroShown");
    errorMes.innerHTML = "Email Has been sent";
    errorMes.classList.add("good");
    emailInput.classList.remove("errorShown");

    setTimeout(() => {
      emailInput.value = "";
      window.location.reload();
    }, 2000);
  } else {
    errorMes.innerHTML = "Please enter a valid email address";
    emailInput.classList.add("errorShown");
    if (window.innerWidth <= "600px") {
      emailInput.style.marginBottom = "25px";
    }
  }
});
