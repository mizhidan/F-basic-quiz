import "./style/index.scss";

const userInfo = document.getElementById("userInfo");
const aboutMe = document.getElementById("about-me");
const avatar = document.getElementById("avatar");
const ID = window.location.href.split("users/")[1];
const URL = "http://localhost:8080/users/";

function fillUserInfo(data) {
  userInfo.innerHTML = `My name is ${data.name} ${data.age}YO AND THIS IS MY RESUME/CV`;
  avatar.src = `${data.avatar}`;
  const description = document.createElement("p");
  description.setAttribute("class", "description");
  description.innerHTML = data.description;
  aboutMe.appendChild(description);
}

async function renderPage() {
  const response = await fetch(URL + ID);
  const data = await response.json();
  fillUserInfo(data);
}

renderPage();
