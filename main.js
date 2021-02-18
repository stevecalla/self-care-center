//query selector variables go here 👇
var meditationImage = document.querySelector('.meditation-image');
var message = document.querySelector('.message');
var getMessageButton = document.querySelector('.receive-button');
var formInformation = document.querySelector('form');
var getRadioButtonForm = document.forms[0];                             //gets radio button form
var getRadioButtonSelected = getRadioButtonForm.elements['selection'];  //gets selected elment

//global variables go here 👇
var currentMessage;
var savedMessages = [];

//event listeners go here 👇
formInformation.addEventListener('submit', getMessage);

//functions and event handlers go here 👇
function getMessage(event) {
  event.preventDefault();
  generateMessage();
  renderMessage();
  showMessage();
}

function generateMessage() {
  if (getRadioButtonSelected.value === 'affirmations') {
    currentMessage = new Message(affirmations[getRandomIndex(affirmations)]);
  } else if (getRadioButtonSelected.value === 'mantras') {
    currentMessage = new Message(mantras[getRandomIndex(mantras)]);
  }
}

function getRandomIndex(inputMessageList) {
  return Math.floor(Math.random() * inputMessageList.length);
}

function renderMessage() {
  // message.innerText = currentMessage.message + ' ' + getRadioButtonSelected.value;
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