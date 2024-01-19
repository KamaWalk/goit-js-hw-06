const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Wszystkie pola powinny być wypełnione!");
  } else {
    console.log("Email:", emailInput.value);
    console.log("Password:", passwordInput.value);
    loginForm.reset();
  }
});
