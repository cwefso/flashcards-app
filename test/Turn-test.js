const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', function() {

  it('should be a function', function() {
    const turns = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turns = new Turn();
    expect(turns).to.be.an.instanceof(Turn);
  }); 

  it('should store a guess', function() {
    const turns = new Turn('The ides of March.');
    expect(turns.guess).to.equal('The ides of March.');
  }); 
    
  it('should store a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turns = new Turn('The ides of March.', card);
    expect(turns.card).to.equal(card);
  });  
  
  it('should return a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turns = new Turn('The ides of March.', card);
    expect(turns.returnGuess()).to.equal('The ides of March.');
    })

  it('should return a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turns = new Turn('The ides of March.', card);
    expect(turns.returnCard()).to.equal(card);
  })

  it('should evaluate a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turns = new Turn('The ides of March.', card);
    expect(turns.evaluateGuess()).to.equal(false);
  })
  
  it('should return feedback', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turns = new Turn('The ides of March.', card);
    expect(turns.giveFeedback()).to.equal('correct!');
  })
});