(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Card(name, image){
  this.name = name;
  this.image = image;
}

exports.cardModule = Card;

},{}],2:[function(require,module,exports){
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

},{"./../js/card.js":1}],3:[function(require,module,exports){
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

},{"./../js/card.js":1,"./../js/game.js":2}]},{},[3]);
