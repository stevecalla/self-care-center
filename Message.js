class Message {
  constructor(affirmations, mantras) {
    this.affirmations = affirmations;
    this.mantras = mantras;
    this.message = message;
    this.selectedMessageList = null;
    this.renderedAffirmations = [];
    this.renderedMantras = [];
  }

  generateMessage() {
    if (this.selectedMessageList === 'affirmations') {
      this.message = this.affirmations[this.getRandomIndex(this.affirmations)];
      console.log(this.message)
      console.log('1')
    } else if (this.selectedMessageList === 'mantras') {
      console.log('2')
      this.message = this.mantras[this.getRandomIndex(this.mantras)];
    }
  }

  getRandomIndex(inputMessageList) {
    return Math.floor(Math.random() * inputMessageList.length);
  }

  // populateAffirmations() {
  //   this.renderedAffirmations.push(this.message);
  //   console.log(this.renderedAffirmations);
  //   return this.renderedAffirmations;
  // }

  // populateMatras() {
  //   this.renderedMantras.push(this.message);
  // }

  //generate random num
  //generate message...
  
}

// class Message {
//   constructor(message) {
//     this.message = message;
//     this.renderedAffirmations = [];
//     this.renderedMantras = [];
//   }

//   populateAffirmations() {
//     this.renderedAffirmations.push(this.message);
//     console.log(this.renderedAffirmations);
//     return this.renderedAffirmations;
//   }

//   populateMatras() {
//     this.renderedMantras.push(this.message);
//   }

//   //generate random num
//   //generate message...
  
// }