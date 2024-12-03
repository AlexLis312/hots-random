// /hots-random
import { heroList } from "./data-heroes.js";
import "./css/style.scss";

const checkbox = document.querySelector(".checkbox");
const buttonChoice = document.querySelector("button");
const buttonRandom = document.querySelector(".random");
const buttonCustom = document.querySelector(".custom");
const buttonCustomRandom = document.querySelector(".custom-random");
const iconsContainer = document.querySelector(".iconBox");
let randomBox = [];
let customBox = [];
let box = [];

checkbox.addEventListener("input", choice);
buttonRandom.addEventListener("click", randomChoice);
buttonCustom.addEventListener("click", customChoice);
buttonCustomRandom.addEventListener("click", customRandom);
buttonChoice.addEventListener("click", buttonClick);
iconsContainer.addEventListener("click", onHeroClick);

const randomInt = (number) => {
  return Math.floor(Math.random() * number);
};

function randomWhell(array) {
  clearBox();
  const randomNum = randomInt(array.length);
  const randomHero = array[randomNum];
  markupModal(randomHero.icon, randomHero.url, randomHero.role, randomHero.name);

  console.log(randomHero.name);
  console.log(randomNum);
  return randomHero;
}

function onHeroClick(e) {
  console.log(e.target);
  e.target.classList.add("custom-border");
  randomBox.filter((hero) => (e.target.alt === hero.name ? customBox.push(hero) : ""));
  console.log(customBox);

  return customBox;
}

function customRandom() {
  randomWhell(customBox);
}
function buttonClick() {
  buttonRandom.disabled = false;
  randomWhell(randomBox);
}

function customChoice() {
  randomBox.push(...heroList);
  randomBox.forEach((hero) => {
    markupIcon(hero.icon, hero.role, hero.name);
  });
}

function randomChoice() {
  randomBox.push(...heroList);
  randomBox.forEach((hero) => {
    markupIcon(hero.icon, hero.role, hero.name);
  });

  randomWhell(randomBox);
}

function choice(event) {
  buttonRandom.disabled = true;
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
  iconsContainer.appendChild(imgElement);
  return imgElement;
}

function markupModal(heroIconSrc, heroUrl, heroRole, heroName) {
  const modalElement = document.createElement("div");
  const nameText = document.createElement("p");
  const heroLink = document.createElement("a");

  modalElement.src = heroIconSrc;
  modalElement.width = 64;
  modalElement.height = 64;
  modalElement.classList.add("modal");
  modalElement.classList.add("active");
  nameText.textContent = heroName;
  heroLink.classList.add("link");
  heroLink.textContent = "Guide";
  heroLink.href = heroUrl;

  iconsContainer.appendChild(modalElement);
  modalElement.append(nameText, markupIcon(heroIconSrc, heroRole, heroName), heroLink);
}

function clearBox() {
  iconsContainer.innerHTML = "";
}

console.log(heroList);
