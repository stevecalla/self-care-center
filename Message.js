class Message {
  constructor(message) {
    this.message = message;
    this.renderedAffirmations = [];
    this.renderedMantras = [];
  }

  populateAffirmations() {
    this.renderedAffirmations.push(this.message);
    console.log(this.renderedAffirmations);
    return this.renderedAffirmations;
  }

  populateMatras() {
    this.renderedMantras.push(this.message);
  }

  //generate random num
  //generate message...
  
}