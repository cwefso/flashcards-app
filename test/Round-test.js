const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const card1 = new Card( 1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
const card2 = new Card( 2, 'What is a comma-separated list of related values?', ["array", "object", "function"], "array");
const card3 = new Card( 3, 'What type of prototype method directly modifies the existing array?', ["mutator method", "accessor method", "iteration method"], "mutator method");
const sampleDeck = [card1, card2, card3];

describe('Round', function() {

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const deck = new Deck(sampleDeck);
    const round = new Round(deck);
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should instantiate with a Deck', function() {
    const deck = new Deck(sampleDeck);
    const round = new Round(deck);
    expect(round.deck).to.equal(deck);
  }); 

  it('should instantiate with a current Card', function() {
    const deck = new Deck(sampleDeck);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.eql(card1);
  });

  it('should update the turns count when a guess is made', function() {
    const deck = new Deck(sampleDeck);
    const round = new Round(deck);
    expect(round.turns).to.equal(0);    
    round.takeTurn();
    expect(round.turns).to.equal(1);
  })

  it('should update the current card after a guess is made', function() {
    const deck = new Deck(sampleDeck);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.eql(card1);
    round.takeTurn('array');
    expect(round.returnCurrentCard()).to.eql(card2)
  })

  it('should be able evaluate/store an incorrect guess', function() {
    const deck = new Deck(sampleDeck);
    const round = new Round(deck);
    round.takeTurn('array');
    round.takeTurn('object');
    expect(round.incorrectAnswers).to.eql([card1.id, card2.id])
  })

  it('should be able to give feedback', function() {
    const deck = new Deck(sampleDeck);
    const round = new Round(deck);
    expect(round.takeTurn('object')).to.eql('correct!')
  })

  it('should be able to calculate percent of answers that are correct', function() {
    const deck = new Deck(sampleDeck);
    const round = new Round(deck);
    round.takeTurn('object');
    expect(round.calculatePercentCorrect()).to.equal(100)
    round.takeTurn('pizza');
    expect(round.calculatePercentCorrect()).to.equal(50)
  })
});