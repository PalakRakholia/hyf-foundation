//Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];

const nameToRemove = "Ahmad";
const indexOfName = names.indexOf(nameToRemove);
if (indexOfName !== -1) {
  names.splice(indexOfName, 1);
}

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']

//When will we be there??
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function getTravelTime(travelInformation) {
  //if object is empty, argument passed is not an object, object'key speed and destination is negative or 0
  if (
    travelInformation == null ||
    typeof travelInformation !== "object" ||
    travelInformation.speed <= 0 ||
    travelInformation.destinationDistance <= 0
  ) {
    return false;
  }
  const calculatedTime =
    travelInformation.destinationDistance / travelInformation.speed;
  const calculatedHrs = Math.floor(calculatedTime);
  const calculatedMins = Math.floor((calculatedTime - calculatedHrs) * 60);
  return `${calculatedHrs} hours and ${calculatedMins} minutes`;
}

const travelTime = getTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

// Series duration of my life
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Lord of the Rings",
    days: 1,
    hours: 4,
    minutes: 0,
  },
  {
    title: "Slow Horses",
    days: 1,
    hours: 4,
    minutes: 48,
  },
];

function logOutSeriesText(seriesDurations) {
  const lifeSpan = 80;
  const lifeSpanInMins = lifeSpan * 365 * 24 * 60;
  let totalPercent = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    const eachSeriesName = seriesDurations[i].title;
    const eachSeriesDaysInMins = seriesDurations[i].days * 24 * 60;
    const eachSeriesHrsInMins = seriesDurations[i].hours * 60;
    const eachSeriesMins = seriesDurations[i].minutes;
    const timeInMins =
      eachSeriesDaysInMins + eachSeriesHrsInMins + eachSeriesMins;
    //toPrecision() return strings hence convert into number
    const calcPercentage = Number(
      ((timeInMins / lifeSpanInMins) * 100)
    );
    totalPercent = Number((totalPercent + calcPercentage));
    console.log(`${eachSeriesName} took ${calcPercentage.toPrecision(2)}% of my life`);
  }
  console.log(`In total that is ${totalPercent.toPrecision(2)}% of my life`);
}

logOutSeriesText(seriesDurations);

//NOnoN0nOYes (Note taking app)
const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

function getNote(id) {
  if (!id) {
    throw new Error("No valid id");
  }
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote);

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`,
    );
  }
}

logOutNotesFormatted();

//CactusIO-interactive (Smart phone usage app)
const activities = [];
function addActivity(activity, duration) {
  const todaysDate = new Date();
  const date = todaysDate.toLocaleDateString("en-US");

  activities.push({ date, activity, duration });
}

addActivity("Youtube", 40);
addActivity("Instagram", 30);
//addActivity('Spotify', 35);

console.log(activities);

function showStatus(activities) {
  let totalDuration = 0;
  const activityCount = activities.length;
  if (!activities.length) {
    console.log(`Add some activities before calling showStatus`);
  }
  for (let i = 0; i < activities.length; i++) {
    totalDuration += activities[i].duration;
  }
  if (totalDuration <= 78) {
    console.log(
      `You have added ${activityCount} activities. They amount to ${totalDuration} min. of usage`,
    );
  } else {
    console.log(`You have reached your limit, no more smartphoning for you!`);
  }
}

showStatus(activities);
