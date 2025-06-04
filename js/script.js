// Валидация форм в JavaScript
const usernameInput = document.querySelector("input[name='username']");
const emailInput = document.querySelector("input[name='email']");
const passwordInput = document.querySelector("input[name='password']");

const usernameError = document.querySelector("#usernameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  if (username.length === 0) {
    usernameError.textContent = "Введите свой никнейм";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  if (email.length === 0) {
    emailError.textContent = "Введите свою электронную почту";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  if (password.length === 0) {
    passwordError.textContent = "Введите свой пароль";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  if (isValid) {
    alert(`Пользователь ${username} с электронной почтой ${email} был успешно зарегистрирован!`);
    form.reset();
  }
});
