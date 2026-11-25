//Hogwarts House generator
const message = "Hold your wand, young wizard! You must enter your name before the Sorting Hat can reveal your house!";
const divElement = document.querySelector("#hogwarts");

const inputElement = document.createElement("input");
const btnElement = document.createElement("button");
const tagElement = document.createElement("p");

inputElement.classList.add('input-box');
btnElement.classList.add('generate-btn');

inputElement.placeholder = "Enter your name...";

btnElement.textContent = "REVEAL MY HOUSE";
btnElement.addEventListener("click", (event) => {
  const inputName = inputElement.value;

  const houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
  const randomHouse = houses[Math.floor(Math.random() * houses.length)];
  if (inputName) {
    tagElement.classList.add('result');
    tagElement.innerHTML = `${inputName} belongs in ${randomHouse}!`;
  } else {
    tagElement.classList.add('result');
    btnElement.disabled = true;
    tagElement.innerHTML = `${message}`;
  }

  btnElement.textContent = "Try Again!";
});

inputElement.addEventListener("input", (event) => {
  if (event.target.value.trim() === "") {
    btnElement.disabled = true;
  } else {
    btnElement.disabled = false;
  }
});

divElement.appendChild(inputElement);
divElement.appendChild(btnElement);
divElement.appendChild(tagElement);
