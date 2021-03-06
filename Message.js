class Message {
  constructor() {
    this.affirmations = [];
    this.mantras = [];
    this.message = message;
    this.selectedMessageList = null;
    this.resetMessage = null;
  }

  createAffirmationsList(affirmations) {
    for (var i = 0; i < affirmations.length; i++) {
      this.affirmations.push(affirmations[i]);
    }
  }

  createMantrasList(mantras) {
    for (var i = 0; i < mantras.length; i++) {
      this.mantras.push(mantras[i]);
    }
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

  removeCurrentMessageFromAffirmationMantra() {
    if (this.selectedMessageList === 'affirmations') {
      var index = this.affirmations.indexOf(this.message);
      this.affirmations.splice(index, 1);
    } else if (this.selectedMessageList === 'mantras') {
      var index = this.mantras.indexOf(this.message);
      this.mantras.splice(index, 1);
    }
  }  

  resetMessageAffirmations(affirmations) {
    this.resetMessage = null;
    if (!this.affirmations.length) {
      for (var i = 0; i < affirmations.length; i++) {
        this.affirmations.push(affirmations[i]);
      }
      this.setResetMessage('affirmations');
    } 
  }

  resetMessageMantras(mantras) {
    if (!this.mantras.length) {
      for (var i = 0; i < mantras.length; i++) {
        this.mantras.push(mantras[i]);
      }
      this.setResetMessage('mantras');
    } 
  }

  setResetMessage(list) {
    this.resetMessage = `All the ${list} have been displayed. Let's start over!`;
  }

}