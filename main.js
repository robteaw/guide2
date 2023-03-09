// Navbar
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
});

// JavaScript Page
// Onclick Images
function imgChange(file) {
  let img = document.querySelector("#img_click");
  img.setAttribute("src", file);
}

// Random Images
const imgArray = ["./images/heads.png", "./images/tails.png"];

function randomImg() {
  let num = Math.floor(Math.random() * imgArray.length);
  document.getElementById("img_random").src = imgArray[num];
}

// Fetch
async function loadUsers() {
  const response = await fetch("data/users.json");
  const users = await response.json();

  return users;

  console.log(response);
}

document.addEventListener("DOMContentLoaded", async () => {
  let users = [];
  try {
    users = await loadUsers();
  } catch (e) {
    console.log("Error");
    console.log(e);
  }
  console.log(users);
});

// Map
const people = [];

const names = people.map((person) => {
  return person.name;
});
console.log(names);
