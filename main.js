//query selector variables go here 👇
var meditationImage = document.querySelector('.meditation-image');
var message = document.querySelector('.message');

//global variables go here 👇
var currentMessage;
var savedMessages = [];


//event listeners go here 👇



//functions and event handlers go here 👇
function generateMessage() {
  currentMessage = new Message(affirmations[getRandomIndex(affirmations)]);
  return currentMessage;
}

function getRandomIndex(inputMessageList) {
  return Math.floor(Math.random() * inputMessageList.length);
}



//testing goes here
// console.log(affirmations[0]);
// console.log(mantras[5]);