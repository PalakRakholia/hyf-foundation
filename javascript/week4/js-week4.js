let nameIs = "";
const toDoArr = [];
let numAdd = 0;
let numMultiply = 1;
function getReply(command) {
  let commandNew = command.toLowerCase().trim();
  //saving the name and greeting
  if (commandNew.includes("hello my name is")) {
    const strCommand = commandNew.split(" ");
    nameIs = strCommand[strCommand.length - 1];
    return `nice to meet you ${nameIs}`;
  }
  // calling the name if available
  if (commandNew === "what is my name" && nameIs !== "") {
    return `Your name is ${nameIs}`;
  }
  // no name informed earlier
  if (commandNew.includes("what is my name?")) {
    return `You have not mentioned your name yet`;
  }
  // Add to todo list
  if (
    commandNew.includes("add ") &&
    (commandNew.includes(" to my todo") ||
      commandNew.includes(" from my to do") ||
      commandNew.includes(" from my to-do"))
  ) {
    //indexOf('Add ')-gives index of A and not of whole word hence + 'add ' length
    const firstIndex = commandNew.indexOf("Add ") + "Add ".length;
    const secondIndex = commandNew.indexOf(" to my todo");
    const todo = commandNew.slice(firstIndex, secondIndex).trim();
    toDoArr.push(todo);
    return `${todo} added to your todo`;
  }
  // remove from today list
  if (
    commandNew.includes("remove") &&
    (commandNew.includes(" from my todo") ||
      commandNew.includes(" from my to do") ||
      commandNew.includes(" from my to-do"))
  ) {
    const indexOne = commandNew.indexOf("remove ") + "remove ".length;
    const indexTwo = commandNew.indexOf(" from my todo");
    const removeTodo = commandNew.slice(indexOne, indexTwo);
    let todo = [];
    for (let i = 0; i < toDoArr.length; i++) {
      if (removeTodo === toDoArr[i]) {
        todo = toDoArr.splice(i, 1);
      }
    }
    return `Removed ${todo} from your todo`;
  }
  // list items from todo with and in between
  if (
    commandNew.includes("what is on my to") ||
    commandNew.includes("what is on my to do") ||
    commandNew.includes("what is on my to-do")
  ) {
    if (toDoArr.length === 1) {
      return `you have ${toDoArr.length} todos - ${toDoArr[0]}`;
    } else {
      return `you have ${toDoArr.length} todos - ${toDoArr.join(" and ")}`;
    }
  }
  //today's date
  if (
    commandNew.includes("what day is it today") ||
    commandNew.includes("what day is today") ||
    commandNew.includes("what day it is today")
  ) {
    const todayDate = new Date();
    const day = todayDate.getDate();
    const month = todayDate.toLocaleDateString("en-US", { month: "long" });
    const year = todayDate.getFullYear();
    return `${day}. of ${month} ${year}`;
  }
  // addition
  if (
    commandNew.includes("what is ") &&
    (commandNew.includes(" + ") ||
      commandNew.includes("+") ||
      commandNew.includes("plus"))
  ) {
    if (commandNew.includes(" plus ")) {
      commandNew = commandNew.replace("plus", "+").trim();
    }
    const newStr = commandNew.split("what is ");
    const newNum = newStr[1];
    const NumArr = newNum.split(" + ");
    for (let i = 0; i < NumArr.length; i++) {
      const eachNum = Number(NumArr[i]);
      numAdd += eachNum;
    }
    return numAdd;
  }
  // multiplication
  if (
    commandNew.includes("what is ") &&
    (commandNew.includes(" * ") ||
      commandNew.includes("*") ||
      commandNew.includes("multiply"))
  ) {
    if (commandNew.includes("multiply")) {
      commandNew = commandNew.replace("multiply", "*").trim();
    }
    const newStr = commandNew.split("what is ");
    const newNum = newStr[1];
    const NumArr = newNum.split(" * ");
    for (let i = 0; i < NumArr.length; i++) {
      const eachNum = Number(NumArr[i]);
      numMultiply *= eachNum;
    }
    return numMultiply;
  }
  //set a timer
  if (
    commandNew.includes("set a timer for") ||
    commandNew.includes("set timer for") ||
    commandNew.includes("set timer") ||
    commandNew.includes("timer")
  ) {
    const index1 =
      commandNew.indexOf("set a timer for ") + "set a timer for ".length;
    const index2 = commandNew.indexOf(" minutes");
    const newTime = Number(commandNew.slice(index1, index2));
    //   setTimeout(myFunction, 4000);
    //   console.log(`Timer set for 4 minutes`)
    //   // The callback function
    //   function myFunction() {
    //     console.log("Timer done");
    //   }
    //shorthand for settimeout function
    const sec = newTime * 1000;
    setTimeout(function () {
      console.log(`Timer done`);
    }, sec);
    return `Timer set for 4 minutes`;
  }
  //added one extra command
  if (commandNew.includes("what is the first item on my todo?")) {
    if (!toDoArr.length) {
      return `There is no items in your todo yet`;
    }
    return `${toDoArr[0]} is the first item of your todo`;
  }
}
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Add dancing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 3 plus 3"));
console.log(getReply("what is 4 * 12"));
console.log(getReply("Set a timer for 4 minutes"));
console.log(getReply("WhaT is the first ITEM on my todo?"));
