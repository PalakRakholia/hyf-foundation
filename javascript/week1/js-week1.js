//EXERCISE 1: Age-ify (A future age calculator)

const yearOfBirth = 1996; //number type
const yearFuture = 2027; //number type

const age = yearFuture - yearOfBirth;

console.log(`You will be ${age} years old in ${yearFuture}`);

//EXERCISE 2: Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
let shouldShowResultInDogYears = false; //Boolean type

// 1 human year = 7 dog year
const humanYear = dogYearFuture - dogYearOfBirth;
const dogYear = humanYear * 7;

console.log(`shouldShowResultInDogYears: ${shouldShowResultInDogYears}`);

if (shouldShowResultInDogYears) {
  console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`);
} else {
  console.log(
    `Your dog will be ${humanYear} human years old in ${dogYearFuture}`,
  );
}

shouldShowResultInDogYears = true;
console.log(`shouldShowResultInDogYears: ${shouldShowResultInDogYears}`);

if (shouldShowResultInDogYears) {
  console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`);
} else {
  console.log(
    `Your dog will be ${humanYear} human years old in ${dogYearFuture}`,
  );
}

//EXERCISE 3: Housey pricey (A house price estimator)

//For Peter
const peterHouseWidth = 8;
const peterHouseHeight = 10;
const peterHouseDepth = 10;
const peterHouseGardenSizeInM2 = 100;
const peterHouseCost = 2500000;

const peterVolumeInMeters =
  peterHouseWidth * peterHouseHeight * peterHouseDepth;

const peterHousePrice =
  peterVolumeInMeters * 2.5 * 1000 + peterHouseGardenSizeInM2 * 300;

if (peterHouseCost >= peterHousePrice) {
  console.log(
    `Estimated House Cost is $${peterHouseCost} so, Peter is paying too much as compared to House Price: $${peterHousePrice}`,
  );
} else {
  console.log(
    `Estimated House Cost is $${peterHouseCost} so, Peter is paying too little as compared to House Price: $${peterHousePrice}`,
  );
}

//for Julia
const juliaHouseWidth = 5;
const juliaHouseDepth = 11;
const juliaHouseHeight = 8;
const juliaHouseGardenSizeInM2 = 70;
const juliaHouseCost = 1000000;

const juliaVolumeInMeters =
  juliaHouseWidth * juliaHouseDepth * juliaHouseHeight;

const juliaHousePrice =
  juliaVolumeInMeters * 2.5 * 1000 + juliaHouseGardenSizeInM2 * 300;

if (juliaHouseCost >= juliaHousePrice) {
  console.log(
    `Estimated House Cost is $${juliaHouseCost} so, Julia is paying too much as compared to House Price: $${juliaHousePrice}`,
  );
} else {
  console.log(
    `Estimated House Cost is $${juliaHouseCost} so, Julia is paying too little as compared to House Price: $${juliaHousePrice}`,
  );
}

//EXERCISE 4: Ez Namey (Startup name generator)

const firstWords = [
  "Tech",
  "Innovation",
  "Startup",
  "Open",
  "Talent",
  "Nova",
  "Future",
  "Deep",
  "Bright",
  "Core",
];
const secondWords = [
  "AI",
  "Cloud",
  "Digital",
  "Hub",
  "System",
  "Solution",
  "Easy",
  "Flow",
  "Corporate",
  "Labs",
];

const randomNumber = Math.floor(Math.random() * 10);

const startupName = `${firstWords[randomNumber]} ${secondWords[randomNumber]}`;

console.log(
  `The startup: "${startupName}" and contains ${startupName.length} characters`,
);
