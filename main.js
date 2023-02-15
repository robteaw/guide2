// Navbar
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
});

// JavaScript Page
const codeImgs = ["images/html-5.png", "images/css-3.png", "images/js.png"];

function Random() {
  let num = Math.floor(Math.random() * 3);
  document.getElementById("img_click").innerHTML =
    '<img src=" + codeImgs[num]">';
}
