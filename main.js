//query selector variables go here 👇
var meditationImage = document.querySelector('.meditation-image');
var message = document.querySelector('.message');
var getRadioButtonInput = document.querySelector('form');
var getRadioButtonForm = document.forms[0];                             
var getRadioButtonSelected = getRadioButtonForm.elements['selection']; 
var resetMessage = document.querySelector('.reset-message');
var bodyBackground = document.querySelector('body');
var animateMessageTarget = document.querySelector('.get-message-animation');

//global variables go here 👇
var currentMessage;

//event listeners go here 👇
window.addEventListener('load', createMessageInstance);
getRadioButtonInput.addEventListener('submit', getMessage);

//functions and event handlers go here 👇
function createMessageInstance() {
  currentMessage = new Message();
  currentMessage.createAffirmationsList(affirmations);
  currentMessage.createMantrasList(mantras);
}

function getMessage(event) {
  event.preventDefault();
  selectedRadioButton();
  currentMessage.generateMessage();
  currentMessage.removeCurrentMessageFromAffirmationMantra(); //
  currentMessage.resetMessageAffirmations(affirmations);
  currentMessage.resetMessageMantras(mantras);
  renderResetMessage();
  revealResetMessage();
  swithBackgroundGradient();
  animateAssetAssigment();
  show(animateMessageTarget);
  hide(meditationImage);
  hide(message);
  renderAnimation();
}

function selectedRadioButton() {
  if (getRadioButtonSelected.value === 'affirmations') {
    currentMessage.selectedMessageList = 'affirmations';
  } else if (getRadioButtonSelected.value === 'mantras') {
    currentMessage.selectedMessageList = 'mantras';
  }
}

function renderCurrentMessage() {
  message.innerText = currentMessage.message;
}

function renderResetMessage() {
  resetMessage.innerText = currentMessage.resetMessage;
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
  show(resetMessage);
}

function cloakResetMessage() {
  hide(resetMessage);
}

function fadeAnimation() {
  message.classList.add('fade');
}

function renderAnimation() {
  setTimeout( function() {
    hide(animateMessageTarget);
    renderCurrentMessage();
    fadeAnimation();
    showMessage();
  }, 1000);
}

function animateAssetAssigment() {
  if (getRadioButtonSelected.value === 'affirmations') {
    animateMessageTarget.src = './assets/Ripple-3s-124px-final-affirmation.svg';
    animateMessageTarget.alt = 'getting affirmation icon';
  } else if (getRadioButtonSelected.value === 'mantras') {
      animateMessageTarget.src = './assets/Ripple-3s-124px-final-mantra.svg';
      animateMessageTarget.alt = 'getting mantra icon';
  }
}

function swithBackgroundGradient() {
  if (getRadioButtonSelected.value === 'affirmations') {
    bodyBackground.classList.add('affirmation-gradient');
    bodyBackground.classList.remove('mantra-gradient');
  } else if (getRadioButtonSelected.value === 'mantras') {
      bodyBackground.classList.add('mantra-gradient');
  }
}