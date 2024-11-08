// publicPath: '/hots-random/',
import { heroList } from "./data-heroes.js";
import "./css/style.scss";

const checkbox = document.querySelector(".checkbox");
const buttonChoice = document.querySelector("button");
const buttonRandom = document.querySelector(".random");
let randomBox = [];

checkbox.addEventListener("input", choice);
buttonRandom.addEventListener("click", randomChoice);
buttonChoice.addEventListener("click", buttonClick);

const randomInt = (number) => {
  return Math.floor(Math.random() * number);
};

function randomWhell(array) {
  const randomNum = randomInt(array.length);
  const randomHero = array[randomNum];
  markupModal(randomHero.icon, randomHero.url, randomHero.role, randomHero.name);
  // markupIcon(randomHero.icon);
  console.log(randomHero.name);
  console.log(randomNum);
  return randomHero;
}

function buttonClick() {
  randomWhell(randomBox);
}

function randomChoice() {
  randomBox.push(...heroList);
  console.log(randomBox);
  randomBox.forEach((hero) => {
    markupIcon(hero.icon, hero.role, hero.name);
  });

  randomWhell(randomBox);
}

function choice(event) {
  const checkedRoles = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(
    (checkbox) => checkbox.value
  );

  randomBox = heroList.filter((hero) => checkedRoles.includes(hero.role));

  document.querySelectorAll("img[data-role]").forEach((img) => img.remove());

  randomBox.forEach((hero) => {
    markupIcon(hero.icon, hero.role, hero.name);
  });

  // if (event.target.checked) {
  //   const roleChoice = heroList.filter((hero) => hero.role === event.target.value);
  //   randomBox.push(...roleChoice);
  //   console.log(randomBox);
  //   randomBox.forEach((hero) => {
  //     markupIcon(hero.icon, hero.role);
  //   });
  // } else {
  //   randomBox = randomBox.filter((hero) => hero.role !== event.target.value);

  //   document.querySelectorAll(`img[data-role="${event.target.value}"]`).forEach((img) => {
  //     img.remove();
  //   });
  // }

  console.log(randomBox);
  return randomBox;
}

function markupIcon(heroIconSrc, heroRole, heroName) {
  const imgElement = document.createElement("img");
  imgElement.src = heroIconSrc;
  console.log(heroIconSrc);
  imgElement.alt = `${heroName}`;
  imgElement.width = 64;
  imgElement.height = 64;
  imgElement.setAttribute("data-role", heroRole);
  document.body.appendChild(imgElement);
  return imgElement;
}
function markupModal(heroIconSrc, heroUrl, heroRole, heroName) {
  const modalElement = document.createElement("div");
  const heroLink = document.createElement("a");
  modalElement.src = heroIconSrc;
  modalElement.width = 64;
  modalElement.height = 64;
  modalElement.classList.add("modal");
  modalElement.classList.add("active");
  heroLink.textContent = heroUrl;
  heroLink.href = heroUrl;
  document.body.appendChild(modalElement);
  modalElement.append(heroLink, markupIcon(heroIconSrc, heroRole, heroName));
}

console.log(heroList);
