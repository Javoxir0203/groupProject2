const form = document.querySelector(".forms");

const passwordEye = document.querySelector(".password-eye");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");

// password eye
passwordEye.addEventListener("click", (e) => {
  if (e.target.previousElementSibling.type === "password") {
    e.target.previousElementSibling.type = "text";
    passwordEye.textContent = "visibility_off";
  } else {
    e.target.previousElementSibling.type = "password";
    passwordEye.textContent = "visibility";
  }
});

// regEx

const RegExEmail = /^^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const RegExPassword = /^(?=.*[0-9])(?=.*[A-Za-z])[A-Za-zd0-9]{8,}$/;

const data = JSON.parse(localStorage.getItem("userData"));

if (data) {
  window.location.href = "homePage.html";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = e.target[0].value.trim();
  const password = e.target[1].value.trim();

  console.log(email, password);

  if (RegExEmail.test(email) && RegExPassword.test(password)) {
    localStorage.setItem("userData", JSON.stringify({ email, password }));

    window.location.href = "homePage.html";

    e.target.reset();
  }
});

// success and error
inputEmail.addEventListener("keyup", (e) => {
  if (RegExEmail.test(e.target.value)) {
    inputEmail.setAttribute("class", "success");
  } else {
    inputEmail.setAttribute("class", "error");
  }
});

inputPassword.addEventListener("keyup", (e) => {
  if (RegExPassword.test(e.target.value)) {
    inputPassword.setAttribute("class", "success");
  } else {
    inputPassword.setAttribute("class", "error");
  }
});
