//Flight booking fullname function exercise
function getFullNameFlight(firstName, surname) {
  return `${firstName} ${surname}`;
}

const fullName1 = "Benjamin";
const fullName2 = "Hughes";
const fullnameFlight = getFullNameFlight(fullName1, fullName2);
console.log(`Fullname for flight booking is: ${fullnameFlight}`);

//Formal fullname exercise
let useFormalName = true;

function getFullNameFormal(firstName, surname, useFormalName) {
  if (useFormalName) return `Formal Fullname is: Lord ${firstName} ${surname}`;
  return `Fullname without any suffix is: ${firstName} ${surname}`;
}

//Formal fullname exercise based on gender
const fullnameFormal = getFullNameFormal(fullName1, fullName2, useFormalName);
console.log(fullnameFormal);

let gender = "female";
let fullName3 = "Elizabeth";
let fullName4 = "Hughes";

function getFullName(firstName, surname, useFormalName, gender) {
  if (useFormalName && gender === "male")
    return `Fullname for male user is: Lord ${firstName} ${surname}`;
  if (useFormalName && gender === "female")
    return `Fullname for female user is: Lady ${firstName} ${surname}`;
  return `${firstName} ${surname}`;
}
let fullName = getFullName(fullName3, fullName4, useFormalName, gender);
console.log(fullName);
fullName3 = "James";
gender = "male";
fullName = getFullName(fullName3, fullName4, useFormalName, gender);
console.log(fullName);

//Event application exercise
const weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDate = new Date().getDay()
//console.log(currentDate);

function getEventWeekday(day) {
  const eventDay = (currentDate + day) % 7;
  //console.log(`eventDay ${eventDay}`);
  return weekDay[eventDay];
}
console.log(getEventWeekday(16));

//Weather wear exercise
function weatherCheck(temp) {
  if (temp < 18) return `DownJacket, gloves and Bennie`;
  return `shorts and a t-shirt`;
}

const clothesToWear = weatherCheck(18);
console.log(clothesToWear);

//Student manager exercise
const class07Students = [];

function addStudentToClass(studentName) {
  if (class07Students.length >= 6 && studentName !== "Queen") {
    return `Cannot add more students to class 07`;
  }
  for (let i = 0; i < class07Students.length; i++) {
    if (studentName === class07Students[i]) {
      //console.log("index " + i)
      //console.log(class07Students[i]);
      return `${studentName} is already in the class`;
    }
  }
  //console.log(class07Students);
  class07Students.push(studentName);
  return class07Students;
}

//with using includes() class
// function addStudentToClassNew(studentName) {
//   if (class07Students.includes(studentName))
//     //console.log(class07Students)
//     return `${studentName} is already in the class`;

//   if (class07Students.length >= 6 && studentName !== "Queen")
//     //console.log(class07Students.length)
//     return `Cannot add more students to class 07`;
//   class07Students.push(studentName);
//   return class07Students;
// }

function getNumberOfStudents() {
  return `Number of students in class are ${class07Students.length}`;
}

console.log(addStudentToClass("Queen"));
console.log(addStudentToClass("James"));
console.log(addStudentToClass("Benjamin"));
console.log(addStudentToClass("Jade"));
console.log(addStudentToClass("Bob"));
console.log(addStudentToClass("Bob"));
console.log(addStudentToClass("True"));
console.log(addStudentToClass("Harry"));
console.log(addStudentToClass("Henry"));
console.log(addStudentToClass("Queen"));
console.log(addStudentToClass("Queen"));
const numOfStudents = getNumberOfStudents();
console.log(numOfStudents);

//Candy helper exercise
const boughtCandyPrices = [];

function addCandy(candyType, weight) {
  if (candyType === "Sweet") boughtCandyPrices.push(weight * 0.5);
  else if (candyType === "Chocolate") boughtCandyPrices.push(weight * 0.7);
  else if (candyType === "Toffee") boughtCandyPrices.push(weight * 1.1);
  else if (candyType === "Chewing-gum") boughtCandyPrices.push(weight * 0.03);
}

const amountToSpend = Math.random() * 100;

function canBuyMoreCandy() {
  let totalCandyPrice = 0;
  //   for (let i = 0; i < boughtCandyPrices.length; i++) {
  //     totalCandyPrice += boughtCandyPrices[i];
  //   }

  let i = 0;
  while (i < boughtCandyPrices.length) {
    totalCandyPrice += boughtCandyPrices[i];
    i++;
  }

  if (totalCandyPrice < amountToSpend) {
    console.log(`You can buy more, so please do!`);
    return true;
  }
  console.log(`Enough candy for you`);
  return false;
}

addCandy("Sweet", 20);
canBuyMoreCandy();
