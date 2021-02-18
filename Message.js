class Message {
  constructor(message) {
    this.message = message;
    this.renderedAffirmations = [];
    this.renderedMantras = [];
  }

  populateAffirmations() {
    // this.renderedAffirmations.push(this.message);

    this.renderedAffirmations = this.renderedAffirmations + this.message;
  }

  populateMatras() {
    this.renderedMantras.push(this.message);
  }
  
}