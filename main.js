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

const imgArray = [
  "./images/html-5.png",
  "./images/css-3.png",
  "./images/js.png",
  "./images/react.png",
];

function randomImg() {
  let num = Math.floor(Math.random() * imgArray.length);
  img_random.src = randomImg(num);
}
