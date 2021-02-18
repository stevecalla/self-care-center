//query selector variables go here 👇
var meditationImage = document.querySelector('.meditation-image');
var message = document.querySelector('.message');

//global variables go here 👇
// var currentMessage;
var savedMessages = [];
//event listeners go here 👇

//functions and event handlers go here 👇
function generateMessage() {
  var currentMessage = new Message(affirmations[getRandomIndex(affirmations)]);
  renderMessage(currentMessage.message);
  return currentMessage;
}

function getRandomIndex(inputMessageList) {
  return Math.floor(Math.random() * inputMessageList.length);
}

function renderMessage(currentMessage) {
  message.innerText = currentMessage;
  showMessage();
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function showMessage() {
  hide(meditationImage);
  show(message);
}

//testing goes here
// console.log(affirmations[0]);
// console.log(mantras[5]);