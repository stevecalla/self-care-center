//query selector variables go here 👇


//global variables go here 👇
var currentMessage;
var savedMessages = [];


//event listeners go here 👇



//functions and event handlers go here 👇
function generateMessage() {
  currentMessage = new Message(affirmations[0]);
  return currentMessage;
}


//testing goes here
console.log(affirmations[0]);
console.log(mantras[5]);