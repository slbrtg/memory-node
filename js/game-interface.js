var Card = require('./../js/card.js').cardModule;
var Game = require('./../js/game.js').gameModule;
var newGame = new Game();
var test = "test"


$(document).ready(function(){
  //present cards
  newGame.shuffle();
  for (var x = 0; x < newGame.cardArray.length; x++){
    $('.cards').append("<div id = '" + newGame.cardArray[x].name  + "' class = 'card'></div>");
  }


});
