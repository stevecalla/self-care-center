//query selector variables go here 👇
var meditationImage = document.querySelector('.meditation-image');
var message = document.querySelector('.message');
var getMessageButton = document.querySelector('.receive-button');

//global variables go here 👇
var currentMessage;
var savedMessages = [];

//event listeners go here 👇
getMessageButton.addEventListener('click', getMessage);

//functions and event handlers go here 👇
function getMessage(event) {
  event.preventDefault();
  generateMessage();
  renderMessage();
  showMessage();
}

function generateMessage() {
  currentMessage = new Message(affirmations[getRandomIndex(affirmations)]);
}

function getRandomIndex(inputMessageList) {
  return Math.floor(Math.random() * inputMessageList.length);
}

function renderMessage() {
  message.innerText = currentMessage.message;
}

function showMessage() {
  show(message);
  hide(meditationImage);
}
function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}
