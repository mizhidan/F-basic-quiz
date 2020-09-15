import "./style/index.scss";

const userInfo = document.getElementById("userInfo");
const aboutMe = document.getElementById("about-me");
const avatar = document.getElementById("avatar");
const education = document.getElementById("education");
const ID = window.location.href.split("users/")[1];
const URL = "http://localhost:8080/users/";

function fillUserInfo(userInfoData) {
  userInfo.innerHTML = `My name is ${userInfoData.name} ${userInfoData.age}YO AND THIS IS MY RESUME/CV`;
  avatar.src = `${userInfoData.avatar}`;
  const description = document.createElement("p");
  description.setAttribute("class", "description");
  description.innerHTML = userInfoData.description;
  aboutMe.appendChild(description);
}

function fillUserEducation(userEducationData) {
  userEducationData.forEach((educationInfo) => {
    const sigleEducationInfo = document.createElement("div");
    sigleEducationInfo.setAttribute("class", "sigle-education-info");

    const educationYear = document.createElement("p");
    educationYear.setAttribute("class", "education-year");
    educationYear.innerHTML = educationInfo.year;

    const educationContent = document.createElement("div");
    educationContent.setAttribute("class", "education-content");

    const educationTitle = document.createElement("h3");
    educationTitle.innerHTML = educationInfo.title;

    const educationDescription = document.createElement("p");
    educationDescription.innerHTML = educationInfo.description;

    educationContent.appendChild(educationTitle);
    educationContent.appendChild(educationDescription);
    sigleEducationInfo.appendChild(educationYear);
    sigleEducationInfo.appendChild(educationContent);
    education.appendChild(sigleEducationInfo);
  });
}

async function renderPage() {
  const userInfoResponse = await fetch(URL + ID);
  const userInfoData = await userInfoResponse.json();
  const userEducationResponse = await fetch(`${URL + ID}/educations`);
  const userEducationData = await userEducationResponse.json();
  fillUserInfo(userInfoData);
  fillUserEducation(userEducationData);
}

renderPage();
