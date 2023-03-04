// Navbar
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
});

// JavaScript Page
function imgChange(file) {
  let img = document.querySelector("#img_click");
  img.setAttribute("src", file);
}

const imgArray = ["./images/heads.png", "./images/tails.png"];

function randomImg() {
  let num = Math.floor(Math.random() * imgArray.length);
  document.getElementById("img_random").src = imgArray[num];
}
