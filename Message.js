class Message {
  constructor(affirmations, mantras) {
    this.affirmations = affirmations;
    this.mantras = mantras;
    this.message = message;
    this.selectedMessageList = null;
    this.renderedAffirmations = [];
    this.renderedMantras = [];
    this.resetMessage = null;
  }

  generateMessage() {
    if (this.selectedMessageList === 'affirmations') {
      this.message = this.affirmations[this.getRandomIndex(this.affirmations)];
    } else if (this.selectedMessageList === 'mantras') {
      this.message = this.mantras[this.getRandomIndex(this.mantras)];
    }
  }

  getRandomIndex(inputMessageList) {
    return Math.floor(Math.random() * inputMessageList.length);
  }

  populateRenderedAffirmationMantra() {
    if (this.selectedMessageList === 'affirmations') {
      this.renderedAffirmations.push(this.message);
    } else if (this.selectedMessageList === 'mantras') {
        this.renderedMantras.push(this.message);
    }
  }

  removeCurrentMessageFromAffirmationMantra() {
    if (this.selectedMessageList === 'affirmations') {
      var index = this.affirmations.indexOf(this.message);
      this.affirmations.splice(index, 1); //WHY DOES THIS ALSO SPLICE AFFIRMATIONS ARRAY?
    } else if (this.selectedMessageList === 'mantras') {
      var index = this.mantras.indexOf(this.message);
      this.mantras.splice(index, 1); //WHY DOES THIS ALSO SPLICE MANTRAS ARRAY?
    }
    console.log(this.affirmations.length, this.mantras.length);
  }  

  resetMessageAffirmations() {
    this.resetMessage = null; //only need to reset once...
    if (this.affirmations.length === 0) {
      for (var i = 0; i < this.renderedAffirmations.length; i++) {
        this.affirmations.push(this.renderedAffirmations[i]);
      }
      this.renderedAffirmations = [];
      this.setResetMessage('affirmations');
    } 
  }

  resetMessageMantras() {
    if (this.mantras.length === 0) {
      for (var i = 0; i < this.renderedMantras.length; i++) {
        this.mantras.push(this.renderedMantras[i]);
      }
      this.renderedMantras = [];
      this.setResetMessage('mantras');
    } 
  }

  setResetMessage(list) {
    this.resetMessage = `All the ${list} have been displayed. Let's start over!`;
}

}