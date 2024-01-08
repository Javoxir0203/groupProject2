const leftImg = document.querySelector(".left");
const newPrice = document.querySelector(".newPrice");
const oldPrice = document.querySelector(".oldPrice");
const rubbishBtn = document.querySelector(".korzinka");

const ID = JSON.parse(localStorage.getItem("cardId"));

const getDatabyId = async () => {
  const responce = await fetch("http://localhost:8080/products");
  const data = await responce.json();
  return data;
};

getDatabyId()
  .then((data) => {
    data.forEach((item) => {
      if (item.id === ID) {
        leftImg.src = `${item.imgUrl}`;
        newPrice.textContent = `${item.newPrice}`;
        oldPrice.textContent = `${item.oldPrice}`;
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });

localStorage.removeItem("ID");
