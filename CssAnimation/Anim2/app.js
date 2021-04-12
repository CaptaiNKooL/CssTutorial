//Containers
const container = document.querySelector(".container");
const card = document.querySelector(".card");

//Items
const sneakerImg = document.querySelector(".sneaker img");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase");

//animation
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerWidth / 2 - e.pageY) / 25;

  card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg) `;
});

//animation-in
container.addEventListener("mouseenter", (e) => {
  //pop-outs
  title.style.transform = "translateZ(150px)";
  description.style.transform = "translateZ(150px)";
  sneakerImg.style.transform = "translateZ(200px) rotateZ(-30deg)";
  sizes.style.transform = "translateZ(150px)";
  purchase.style.transform = "translateZ(150px)";
  card.style.transition = "none";
});

//animation-out
container.addEventListener("mouseleave", (e) => {
  //pop-back
  title.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  sneakerImg.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
  card.style.transition = "all 0.5s ease ";
  card.style.transform = `rotateX(${0}deg) rotateY(${0}deg) `;
});
