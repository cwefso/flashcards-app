const data = require('./super-data');
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.superData;

class Game {
  constructor() {
    this.currentRound = 1;
    this.cards = [];
    this.deck = {};
    this.round = {};
  }

  start() {
    for (let i = 0; i < prototypeQuestions.length; i++) {
      let card = new Card(prototypeQuestions[i].id, 
                          prototypeQuestions[i].question, 
                          prototypeQuestions[i].answers, 
                          prototypeQuestions[i].correctAnswer);
      this.cards.push(card);
    }
    let deck = new Deck(this.cards);
    this.deck = deck;
    let round = new Round(this.deck);
    this.round = round;
    if (deck.countCards() >= this.cards.length) {
      this.printMessage(deck, round);
      this.printQuestion(round);
    } else {
      return round.endRound();
    }
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game