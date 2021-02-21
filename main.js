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

//event listeners go here 👇
window.addEventListener('load', createMessageInstance);
formInformation.addEventListener('submit', getMessage);

//functions and event handlers go here 👇
function createMessageInstance() {
  currentMessage = new Message();
  currentMessage.createAffirmationsInstance(affirmations);
  currentMessage.createMantrasInstance(mantras);
}

function getMessage(event) {
  event.preventDefault();
  selectedRadioButton();
  currentMessage.generateMessage();
  renderCurrentMessage();
  showMessage();
  //------this eliminates duplicates-------//
  currentMessage.removeCurrentMessageFromAffirmationMantra(); //
  currentMessage.resetMessageAffirmations(affirmations);
  currentMessage.resetMessageMantras(mantras);
  //-----this eliminate duplicates--------//
  renderResetMessage();
  revealResetMessage();
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
  console.log(currentMessage.resetMessage) //eliminate
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