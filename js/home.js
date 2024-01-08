const logOut = document.querySelector(".logOut");
const confirm = document.querySelector(".confirm");
const closeBtn = document.querySelector(".closeBtn");
const yesBtn = document.querySelector(".yesBtn");
const noBtn = document.querySelector(".noBtn");
const confirmation = document.querySelector(".confirmation-section");

const hasData = localStorage.getItem("userData");

if (!hasData) {
  window.location.href = "login.html";
}

logOut.addEventListener("click", () => {
  confirm.classList.remove("hidden");
  closeBtn.addEventListener("click", () => {
    confirm.classList.add("hidden");
  });
  noBtn.addEventListener("click", () => {
    confirm.classList.add("hidden");
  });
  yesBtn.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "login.html";
  });
  confirmation.addEventListener("click", () => {
    confirm.classList.add("hidden");
  });
});

document.addEventListener("keydown", (e) => {
  if (e.which === 27) {
    confirm.classList.add("hidden");
  }
});

const handleClick = (id) => {
  const clickCard = document.querySelector(`#card-${id}`);
  const cardId = id;
  localStorage.setItem("cardId", id);

  clickCard.addEventListener("click", () => {
    window.location.href = "about.html";
  });
};
