const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function formSubmit(event) {
  event.preventDefault();

  const email = this.elements.email.value.trim();
  const password = this.elements.password.value.trim();

  if (!email || !password) {
    alert("Wszystkie pola powinny być wypełnione!");
  } else {
    const dataForm = {
      email: email,
      password: password,
    };
    console.log(dataForm);
    this.reset();
  }
});
