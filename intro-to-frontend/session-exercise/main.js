//Session Exercise 1
const favDish = ["Paneer tikka", "Pizza", "Dhokla"];

for (let i = 0; i < favDish.length; i++) {
  const favItem = favDish[i];
  const listElement = document.querySelector("#dish-list");
  const liElement = document.createElement("li");
  liElement.textContent = favItem;
  listElement.appendChild(liElement);
}

//Session Exercise 2
const podcasts = [
  {
    name: "The mystery om of Johan Klausen Varbourg",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Tips about dogs with small legs",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "You, me, we and us",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Breakfast news - Dinner edition",
  },
];

const divElement = document.querySelector("#podcast");
const PListElement = document.createElement("ul");
document.body.append(PListElement);
for (let i = 0; i < podcasts.length; i++) {
  const podcast = podcasts[i];
  const PLiElement = document.createElement("li");
  const PHeader = document.createElement("h1");

  PHeader.innerHTML = podcast.name;
  PLiElement.appendChild(PHeader);
  image = podcast.imageUrl;
  if (image) {
    const imgElement = document.createElement("img");
    imgElement.src = image;
    PLiElement.appendChild(imgElement);
  }
  PListElement.appendChild(PLiElement);
}
divElement.appendChild(PListElement);

//session Exercise 3
const imageUrlNew = "https://picsum.photos/536/354";
const elementToAppendImageTo = document.querySelector("#image-inserter"); //using specific id instead of body mentioned in session exercise as I've multiple exercise to be displayed.
function imageInserter(imageUrl, elementToAppendImageTo) {
  const imgElement = document.createElement("img");
  imgElement.src = imageUrl;
  elementToAppendImageTo.appendChild(imgElement);
}
imageInserter(imageUrlNew, elementToAppendImageTo);

//Session Exercise 4
const divEle = document.querySelector("#button-click");
const btnElement = document.querySelector("#btn-1");
btnElement.addEventListener("click", (event) => {
  btnElement.textContent = "Button clicked";
});
divEle.append(btnElement);

//Session Exercise 5
const themeBtn = document.querySelector("#btn-2");
const body = document.querySelector("body");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("darkthemeclass");
  if (body.classList.contains("darkthemeclass")) {
    themeBtn.textContent = "Light Mode ";
  } else {
    themeBtn.textContent = "Dark Mode";
  }
});

//Session Exercise 6
const url = "http://api.open-notify.org/astros.json";
const text1 = "There are";
const text2 = "astronauts in space, they are:";

const divAstronaut = document.querySelector("#astronaut");
function astronaut() {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const total = data.number;
      const divElement = document.createElement("div");
      const astronautList = data.people;
      //console.log(astronautList);
      divElement.innerHTML = `${text1} ${total} ${text2}`;
      for (let i = 0; i < astronautList.length; i++) {
        const pElement = document.createElement("p");
        pElement.innerHTML = astronautList[i].name;
        divElement.appendChild(pElement);
      }
      divAstronaut.append(divElement);
    });
}
astronaut();

//Session Exercise 7

//Get a random dog image and display it in the browser
const dogUrl = "https://dog.ceo/api/breeds/image/random";
const imgElement = document.createElement("img");
const dogElement = document.querySelector("#dog-fan");

function dogImg() {
  return fetch(dogUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      imgElement.src = data.message;
      dogElement.appendChild(imgElement);
    });
}

dogImg();

//Get a new image every 2 sec.
setInterval(() => {
  dogImg();
}, 2000);

//Get the list of all breeds
const dogList = "https://dog.ceo/api/breeds/list/all";

function breedList() {
  return fetch(dogList)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const breedElement = document.querySelector("#breed");
      Object.keys(data.message).forEach(function (key) {
        //console.log(key);
        const pEle = document.createElement("p");
        pEle.innerHTML = key;
        breedElement.append(pEle);
      });
    });
}
breedList();

//Display a random image of a breed from the list
const breedImgUrl = "https://dog.ceo/api/breed/australian/images/random";
const breedImgElement = document.querySelector("#breed-img");
const breedImg = document.createElement("img");

function randomBreedImage() {
  return fetch(breedImgUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      breedImg.src = data.message;
      breedImgElement.appendChild(breedImg);
    });
}

randomBreedImage();

//Display the name of the breed under the image
const breedNameElement = document.createElement('div');
breedNameElement.innerHTML = 'Breed Name: AUSTRALIAN';
breedImgElement.after(breedNameElement)
