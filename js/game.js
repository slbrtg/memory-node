var Card = require('./../js/card.js').cardModule;

function Game(){
  var card1 = new Card("car", "/img/car.jpeg");
  var card2 = new Card("car", "/img/car.jpeg");
  var card3 = new Card("dog", "/img/dog.jpeg");
  var card4 = new Card("dog", "/img/dog.jpeg");
  var card5 = new Card("cat", "/img/cat.jpeg");
  var card6 = new Card("cat", "/img/cat.jpeg");
  var card7 = new Card("house", "/img/house.jpeg");
  var card8 = new Card("house", "/img/house.jpeg");
  var card9 = new Card("mouse", "/img/mouse.jpeg");
  var card10 = new Card("mouse", "/img/mouse.jpeg");

  this.cardArray = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];
}

Game.prototype.shuffle = function() {
  var randomArray = [];
  while (cardArray.length > 0) {
    var randomCard = Math.floor(Math.random() * this.cardArray.length);
    randomArray.push(randomCard);
    cardArray.splice(randomCard, 1);
  }
  cardArray = randomArray;
}

exports.gameModule = Game;
