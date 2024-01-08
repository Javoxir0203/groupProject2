const cardInner = document.querySelector(".cards-inner");

const getData = async () => {
  const res = await fetch("http://localhost:8080/products");
  const data = await res.json();
  return data;
};
getData()
  .then((data) =>
    data.forEach((item) => {
      cardInner.innerHTML += `
      <div class="card" id="card-${item.id}" onclick="handleClick(${item.id})">
              <img
                class="mainPhoto"
                src="${item.imgUrl}"
                alt="cardImg1"
                width="288"
                height="320"
              />
              <div class="rating">
                <img
                  src="./assests/images/framefull.svg"
                  alt="full"
                  width="16"
                  height="16"
                />
                <img
                  src="./assests/images/framefull.svg"
                  alt="full"
                  width="16"
                  height="16"
                />
                <img
                  src="./assests/images/framefull.svg"
                  alt="full"
                  width="16"
                  height="16"
                />
                <img
                  src="./assests/images/frameEmpty.svg"
                  alt="full"
                  width="16"
                  height="16"
                />
                <img
                  src="./assests/images/frameEmpty.svg"
                  alt="full"
                  width="16"
                  height="16"
                />
                <span>(12) отзывов</span>
              </div>
              <p>
                ${item.title}
              </p>
              <span class="newPrice">${item.newPrice}</span>
              <span class="oldPrice">${item.oldPrice}</span>
              <button class="sale">SALE</button>
            </div>`;
    })
  )
  .catch((err) => {
    console.log(err);
  });
