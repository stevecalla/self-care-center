//query selector variables go here 👇
var meditationImage = document.querySelector('.meditation-image');
var message = document.querySelector('.message');
var getMessageButton = document.querySelector('.receive-button');
var formInformation = document.querySelector('form');
var getRadioButtonForm = document.forms[0];                             //gets radio button form
var getRadioButtonSelected = getRadioButtonForm.elements['selection'];  //gets selected element
var resetMessage = document.querySelector('.reset-message');

//global variables go here 👇
var currentMessage;
var renderedAffirmations = [];
var renderedMantras = [];

//event listeners go here 👇
formInformation.addEventListener('submit', getMessage);

//functions and event handlers go here 👇
function getMessage(event) {
  event.preventDefault();
  resetMessageAffirmations();
  resetMessageMantras();
  generateMessage();
  // console.log(currentMessage.message)
  renderMessage();
  populateRenderedAffirmationMantra();
  removeCurrentMessageFromAffirmationMantra();
  showMessage();
}

function generateMessage() {
  if (getRadioButtonSelected.value === 'affirmations') {
    currentMessage = new Message(affirmations[getRandomIndex(affirmations)]);
  } else if (getRadioButtonSelected.value === 'mantras') {
      currentMessage = new Message(mantras[getRandomIndex(mantras)]);
  }
  // var x = getRadioButtonSelected.value;
  // currentMessage = new Message(x[getRandomIndex(x)]);
}

function getRandomIndex(inputMessageList) {
  return Math.floor(Math.random() * inputMessageList.length);
}

function renderMessage() {
  // message.innerText = currentMessage.message + ' (' + getRadioButtonSelected.value + ')';
  message.innerText = currentMessage.message;
}

function populateRenderedAffirmationMantra() {
  if (getRadioButtonSelected.value === 'affirmations') {
    renderedAffirmations.push(currentMessage.message);
  } else if (getRadioButtonSelected.value === 'mantras') {
      renderedMantras.push(currentMessage.message);
  }
}

function removeCurrentMessageFromAffirmationMantra() {
  if (getRadioButtonSelected.value === 'affirmations') {
    var index = affirmations.indexOf(currentMessage.message);
    affirmations.splice(index, 1);
  } else if (getRadioButtonSelected.value === 'mantras') {
      var index = mantras.indexOf(currentMessage.message);
      mantras.splice(index, 1);
  }
}

function resetMessageAffirmations() {
  console.log(affirmations.length);
  // console.log(renderResetMessage())
  
  if (affirmations.length === 0) {
    for (var i = 0; i < renderedAffirmations.length; i++) {
      affirmations.push(renderedAffirmations[i]);
    }
    renderedAffirmations = [];
    renderResetMessage('affirmations');
    revealResetMessage();
    } else {
      cloakResetMessage();
  }
}

function resetMessageMantras() {
  // console.log(mantras.length);
  if (mantras.length === 0) {
    for (var i = 0; i < renderedMantras.length; i++) {
      mantras.push(renderedMantras[i]);
    }
    renderedMantras = [];
    renderResetMessage('mantras');
    revealResetMessage();
  } 
  // else {
  //     cloakResetMessage();
  // } //this added a 2nd cloak class which keep everyting hidden
}

function renderResetMessage(list) {
  return resetMessage.innerText = `All the ${list} have been displayed. Let's start over!`;
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

function revealResetMessage() {
  reveal(resetMessage);
}

function cloakResetMessage() {
  cloak(resetMessage);
}

function reveal(element) {
  element.classList.remove('cloak');
}

function cloak(element) {
  element.classList.add('cloak');
}